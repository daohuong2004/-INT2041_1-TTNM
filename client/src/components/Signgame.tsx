import React, { useEffect, useRef, useState } from "react";
import { Hands, HAND_CONNECTIONS, Results } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


// Define the types for the state
interface State {
  detectedLetter: string;
  targetLetter: string;
  score: number;
  timeLeft: number;
  isGameActive: boolean;
  isLoading: boolean;
}

const SignLanguageGame: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [detectedLetter, setDetectedLetter] = useState<string>("");
  const [targetLetter, setTargetLetter] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10); // 10-second timer
  const [isGameActive, setIsGameActive] = useState<boolean>(false); // Game starts inactive
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading screen state

  // Generate a random letter (A-Z)
  const generateRandomLetter = (): void => {
    const letters = "ABDEIH";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    setTargetLetter(randomLetter);
  };
  
  // Khi game bắt đầu thì random chữ
  useEffect(() => {
    if (isGameActive) {
      generateRandomLetter();
      setTimeLeft(10); // reset luôn thời gian khi bắt đầu
    }
  }, [isGameActive]);
  
  // Timer logic
  useEffect(() => {
    if (!isGameActive || timeLeft === 0) {
      setIsGameActive(false); // End the game
      return;
    }
  
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [timeLeft, isGameActive]);
  
  // Check nếu user tạo đúng dấu tay
  useEffect(() => {
    if (detectedLetter === targetLetter && isGameActive) {
      setScore((prevScore) => prevScore + 1);
      generateRandomLetter();
      setTimeLeft(10); // Reset lại thời gian
    }
  }, [detectedLetter, targetLetter, isGameActive]);
  
  // Hand detection logic
  useEffect(() => {
    if (!videoRef.current || !isGameActive) {
      return;
    }
  
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });
  
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
  
    hands.onResults((results: Results) => {
      if (!canvasRef.current || !isGameActive) return; // canvas mất hoặc game kết thúc thì bỏ
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
  
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  
      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          drawLandmarks(ctx, landmarks);
          const letter = detectSignLanguageLetter(landmarks);
          setDetectedLetter(letter);
        }
      }
    });
  
    const camera = new Camera(videoRef.current!, {
      onFrame: async () => {
        if (videoRef.current) {
          await hands.send({ image: videoRef.current });
        }
      },
      width: 320,
      height: 240,
    });
  
    camera.start();
  
    // Cleanup khi component unmount hoặc game dừng
    return () => {
      camera.stop();
      hands.close?.(); // Nếu Hands có hàm close thì gọi luôn
    };
  }, [isGameActive]);
  
  // Vẽ tay
  const drawLandmarks = (ctx: CanvasRenderingContext2D, landmarks: any): void => {
    if (!canvasRef.current) return;
  
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
  
    ctx.fillStyle = "#FF0000";
    for (const landmark of landmarks) {
      ctx.beginPath();
      ctx.arc(landmark.x * width, landmark.y * height, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    ctx.strokeStyle = "#00FF00";
    ctx.lineWidth = 2;
    for (const [start, end] of HAND_CONNECTIONS) {
      ctx.beginPath();
      ctx.moveTo(landmarks[start].x * width, landmarks[start].y * height);
      ctx.lineTo(landmarks[end].x * width, landmarks[end].y * height);
      ctx.stroke();
    }
  };
  
  // Detect chữ tay
  const detectSignLanguageLetter = (landmarks: any): string => {
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
  
    const distance = (point1: { x: number; y: number }, point2: { x: number; y: number }) =>
      Math.hypot(point1.x - point2.x, point1.y - point2.y);

    // Letter "A": Thumb extended, other fingers closed
    if (
      thumbTip.y < indexTip.y &&
      thumbTip.y < middleTip.y &&
      thumbTip.y < ringTip.y &&
      thumbTip.y < pinkyTip.y
    ) {
      return "A";
    }

    // Letter "B": All fingers extended, thumb closed
    if (
      thumbTip.y > indexTip.y &&
      thumbTip.y > middleTip.y &&
      thumbTip.y > ringTip.y &&
      thumbTip.y > pinkyTip.y
    ) {
      return "B";
    }

    // Letter "C": Fingers curved into a "C" shape
    if (
      distance(indexTip, middleTip) < 0.1 &&
      distance(middleTip, ringTip) < 0.1 &&
      distance(ringTip, pinkyTip) < 0.1 &&
      distance(thumbTip, indexTip) > 0.2
    ) {
      return "C";
    }

    // Letter "D": Index finger extended, other fingers closed
    if (
      indexTip.y < thumbTip.y &&
      indexTip.y < middleTip.y &&
      indexTip.y < ringTip.y &&
      indexTip.y < pinkyTip.y
    ) {
      return "D";
    }

    // Letter "E": All fingers curled, thumb across palm
    if (
      distance(indexTip, middleTip) < 0.1 &&
      distance(middleTip, ringTip) < 0.1 &&
      distance(ringTip, pinkyTip) < 0.1 &&
      distance(thumbTip, indexTip) < 0.1
    ) {
      return "E";
    }

    // Letter "F": Thumb and index finger touching, other fingers extended
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      middleTip.y < ringTip.y &&
      middleTip.y < pinkyTip.y
    ) {
      return "F";
    }

    // Letter "G": Index finger pointing, thumb and other fingers closed
    if (
      indexTip.y < thumbTip.y &&
      indexTip.y < middleTip.y &&
      indexTip.y < ringTip.y &&
      indexTip.y < pinkyTip.y &&
      distance(thumbTip, middleTip) < 0.1
    ) {
      return "G";
    }

    // Letter "H": Index and middle fingers extended, other fingers closed
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      ringTip.y > thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "H";
    }

    // Letter "I": Pinky finger extended, other fingers closed
    if (
      pinkyTip.y < thumbTip.y &&
      pinkyTip.y < indexTip.y &&
      pinkyTip.y < middleTip.y &&
      pinkyTip.y < ringTip.y
    ) {
      return "I";
    }

    // Letter "K": Index and middle fingers extended and spread apart, thumb extended
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      distance(indexTip, middleTip) > 0.2
    ) {
      return "K";
    }

    // Letter "L": Thumb and index finger extended, other fingers closed
    if (
      thumbTip.y < middleTip.y &&
      indexTip.y < middleTip.y &&
      middleTip.y > ringTip.y &&
      middleTip.y > pinkyTip.y
    ) {
      return "L";
    }

    // Letter "M": Thumb tucked under three fingers
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      distance(indexTip, middleTip) < 0.1 &&
      distance(middleTip, ringTip) < 0.1
    ) {
      return "M";
    }

    // Letter "N": Thumb tucked under two fingers
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      distance(indexTip, middleTip) < 0.1 &&
      distance(middleTip, ringTip) > 0.2
    ) {
      return "N";
    }

    // Letter "O": Fingers curled into an "O" shape
    if (
      distance(indexTip, thumbTip) < 0.1 &&
      distance(middleTip, thumbTip) < 0.1 &&
      distance(ringTip, thumbTip) < 0.1 &&
      distance(pinkyTip, thumbTip) < 0.1
    ) {
      return "O";
    }

    // Letter "P": Index finger pointing down, thumb extended
    if (
      indexTip.y > thumbTip.y &&
      middleTip.y > thumbTip.y &&
      ringTip.y > thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "P";
    }

    // Letter "Q": Thumb and index finger extended, other fingers closed
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      middleTip.y > thumbTip.y &&
      ringTip.y > thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "Q";
    }

    // Letter "R": Index and middle fingers crossed
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      Math.abs(indexTip.x - middleTip.x) < 0.1
    ) {
      return "R";
    }

    // Letter "S": Fist with thumb over fingers
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      distance(indexTip, middleTip) < 0.1 &&
      distance(middleTip, ringTip) < 0.1 &&
      distance(ringTip, pinkyTip) < 0.1
    ) {
      return "S";
    }

    // Letter "T": Thumb between index and middle fingers
    if (
      distance(thumbTip, indexTip) < 0.1 &&
      distance(thumbTip, middleTip) < 0.1 &&
      ringTip.y > thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "T";
    }

    // Letter "U": Index and middle fingers extended together
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      distance(indexTip, middleTip) < 0.1
    ) {
      return "U";
    }

    // Letter "V": Index and middle fingers extended and spread apart
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      distance(indexTip, middleTip) > 0.2
    ) {
      return "V";
    }

    // Letter "W": Index, middle, and ring fingers extended
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y < thumbTip.y &&
      ringTip.y < thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "W";
    }

    // Letter "X": Index finger bent
    if (
      indexTip.y > middleTip.y &&
      middleTip.y < ringTip.y &&
      middleTip.y < pinkyTip.y
    ) {
      return "X";
    }

    // Letter "Y": Thumb and pinky extended, other fingers closed
    if (
      thumbTip.y < indexTip.y &&
      pinkyTip.y < indexTip.y &&
      indexTip.y > middleTip.y &&
      indexTip.y > ringTip.y
    ) {
      return "Y";
    }

    // Letter "Z": Index finger pointing, thumb extended
    if (
      indexTip.y < thumbTip.y &&
      middleTip.y > thumbTip.y &&
      ringTip.y > thumbTip.y &&
      pinkyTip.y > thumbTip.y
    ) {
      return "Z";
    }

    // If no letter is detected
    return "";
  };

  // Start the game
  const startGame = (): void => {
    setScore(0);
    setTimeLeft(10);
    setIsGameActive(true);
    setDetectedLetter("");
    generateRandomLetter();
    setIsLoading(false); // Hide loading screen
    setIsGameActive(true); // Start the game
  };

  return (
    <div className="flex h-screen ml-60 mt-14 bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
  
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />
  
        {/* Loading Screen */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full bg-cyan-950">
            <img src="/assets/handscan.jpg" alt="Hand Scan" className=" w-full h-3/4 mb-8" />
            <button
              onClick={startGame}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition duration-300"
            >
              Let's Play
            </button>
          </div>
        )}
  
        {/* Game Interface */}
        {!isLoading && (
          <div className="ml-10 mt-5 flex flex-grow">
            {/* Left Side: Detected Letter */}
            <div className="w-1/2 p-4 overflow-hidden">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Detected Letter</h2>
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-lg"
                  autoPlay
                  playsInline
                ></video>
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                  width={320}
                  height={240}
                ></canvas>
              </div>
              <p className="text-gray-700 mt-4">
                Detected Letter: <span className="font-bold text-blue-600">{detectedLetter}</span>
              </p>
            </div>
  
            {/* Right Side: Game Interface */}
            <div className="w-1/2 p-4 bg-white">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Sign Language Game</h2>
              <div className="text-center">
                <p className="text-xl font-semibold mb-4">
                  Show the sign for: <span className="text-4xl font-bold text-green-600">{targetLetter}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Score: <span className="font-bold text-blue-600">{score}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Time Left: <span className="font-bold text-red-600">{timeLeft}</span> seconds
                </p>
  
                {!isGameActive && (
                  <>
                    {timeLeft === 0 && (
                      <div className="mt-8 flex flex-col items-center justify-center text-center space-y-4">
                      <p className="text-2xl font-bold text-red-600">Time's up! Game Over.</p>
                      <p className="text-lg text-gray-800">Your score: <span className="text-blue-700 font-bold">{score}</span></p>
                      <button
                        onClick={startGame}
                        className="bg-green-500 text-white text-lg px-8 py-3 rounded-xl hover:bg-green-400 transition duration-300 shadow-lg"
                      >
                        Play Again
                      </button>
                    </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default SignLanguageGame;
