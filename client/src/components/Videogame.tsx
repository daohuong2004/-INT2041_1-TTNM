import React, { useState, useEffect, useCallback } from "react";
import Layout from "Layout";

interface GlossEntry {
  gloss: string;
  instances: {
    url: string;
  }[];
}

function Game() {
  const [data, setData] = useState<GlossEntry[]>([]);
  const [selectedGloss, setSelectedGloss] = useState<GlossEntry | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [message, setMessage] = useState<React.ReactNode>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  useEffect(() => {
    fetch("/data/WLASL_v0.3.json")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data loaded:", json); // Log loaded data
        setData(json);
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  const getValidEntries = (entries: GlossEntry[]) => {
    return entries.filter((entry) =>
      entry.instances.some(
        (instance) =>
          (instance.url.endsWith(".mp4") || instance.url.endsWith(".swf")) &&
          !instance.url.includes("protected_media") &&
          !instance.url.includes("aslsearch") &&
          !instance.url.includes("handspeak") &&
          !instance.url.includes("aslpro") &&
          !instance.url.includes("aslsignbank")
      )
    );
  };

  const getRandomOptions = (correctWord: string, entries: GlossEntry[]) => {
    console.log("Generating random options...");
    const optionsList = [correctWord];
    while (optionsList.length < 4) {
      const randomWord = entries[Math.floor(Math.random() * entries.length)].gloss;
      if (!optionsList.includes(randomWord)) {
        optionsList.push(randomWord);
      }
    }
    return optionsList.sort(() => Math.random() - 0.5);
  };

  const pickNewVideo = useCallback(() => {
    console.log("Picking a new video...");
    if (data.length === 0) {
      console.log("Data is empty. No entries to choose from.");
      return;
    }

    const validEntries = getValidEntries(data);
    if (validEntries.length === 0) {
      setMessage("No valid video available. Please try again later.");
      console.log("No valid entries found after filtering.");
      return;
    }

    const glossEntry = validEntries[Math.floor(Math.random() * validEntries.length)];
    setSelectedGloss(glossEntry);
    console.log("Selected gloss entry:", glossEntry);

    const validInstance = glossEntry.instances.find(
      (instance) =>
        (instance.url.endsWith(".mp4") || instance.url.endsWith(".swf")) &&
        !instance.url.includes("protected_media") &&
        !instance.url.includes("aslsearch") &&
        !instance.url.includes("handspeak") &&
        !instance.url.includes("aslpro") &&
        !instance.url.includes("aslsignbank")
    );

    if (validInstance) {
      setCurrentVideo(validInstance.url);
      console.log("Selected video URL:", validInstance.url);
    } else {
      setMessage("No valid video available for this entry. Please try again.");
      setCurrentVideo("");
      console.log("No valid video found for this entry.");
    }

    const optionsList = getRandomOptions(glossEntry.gloss, data);
    console.log("Options generated:", optionsList);

    setOptions(optionsList);
    setSelectedOption(null);
    setMessage("");
    setIsAnswered(false);
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      pickNewVideo();
    }
  }, [data, pickNewVideo]);

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      console.log("Selected option:", option); 
    }
  };

  const checkAnswer = () => {
    console.log("Checking answer...");
    if (selectedOption === selectedGloss?.gloss) {
      setMessage("Correct! 🎉");
      console.log("Answer is correct."); 
    } else {
      setMessage(
        <span>
          Incorrect! The correct answer is:{" "}
          <span className="text-green-500">{selectedGloss?.gloss}</span>. ❌
        </span>
      );
      console.log("Answer is incorrect. Correct answer:", selectedGloss?.gloss); 
    }
    setIsAnswered(true);
  };

  return (
    <Layout>
      <div>
        <h1 className="text-5xl font-extrabold mb-6 text-[#1F618D]">Guess the Sign Game</h1>
        <hr className="mb-6 border-gray-300" />
        <p className="mb-4 text-lg">
          Watch the sign language video carefully and try to guess the correct word that is being expressed in the video.
        </p>
        <p className="mb-6 text-lg">
          After watching the video, select one of the options below that you believe corresponds to the word shown in the video.
        </p>
        <hr className="mb-6 border-gray-300" />
        {/* Display video */}
        {currentVideo ? (
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-2xl p-4 bg-gray-100 rounded-lg shadow-lg">
              <video
                controls
                src={currentVideo}
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg font-medium">No video found.</p>
        )}
        {/* Display options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto mb-6">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={`p-3 text-lg font-semibold rounded shadow text-center transform transition-all duration-300 
                ${
                  selectedOption === option
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-gray-800 text-white hover:bg-gray-600 hover:scale-105"
                }
                ${
                  message && option === selectedGloss?.gloss
                    ? "bg-green-500 text-white scale-110"
                    : message && option !== selectedGloss?.gloss && option === selectedOption
                    ? "bg-red-500 text-white scale-95"
                    : ""
                }`}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Check answer and new question buttons */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={checkAnswer}
            disabled={!selectedOption}
            className={`p-2 w-40 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 
              ${
                selectedOption
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
          >
            Check Answer
          </button>
          <button
            onClick={pickNewVideo}
            className="p-2 w-40 text-lg font-semibold rounded-lg shadow-md bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-300"
          >
            Another
          </button>
        </div>
        {/* Display result message */}
        {message && (
          <div
            className={`flex items-center justify-center gap-3 text-lg font-semibold mt-6 p-4 rounded-lg shadow-lg transition-all duration-500 
              ${
                message === "Correct! 🎉"
                  ? "bg-green-100 text-green-800 border border-green-400"
                  : "bg-red-100 text-red-800 border border-red-400"
              }`}
          >
            {message === "Correct! 🎉" && <span>✔️</span>}
            {message !== "Correct! 🎉" && <span>❌</span>}
            <p>{message}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Game;
