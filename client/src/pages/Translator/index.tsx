import Layout from "Layout";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import useSpeechRecognition from "hooks/useSpeechRecognitionHook";
import SignLanguageDetector from "model";
import { useTranslationService } from "spokenToSign";
import axios from 'axios';
import languages from "languages.json";
import { cos } from "@tensorflow/tfjs";
interface IProps {
	className?: string;
}

function Translator(props: IProps) {
	const { text: recognizedText, isListening, startListening, stopListening, setIsAdding, resetText } = useSpeechRecognition();
	const [text, setText] = useState("");
	const [mode, setMode] = useState("textToASL");
	const [buttonClicked, setButtonClicked] = useState("upload");
	const [isAddingMode, setIsAddingMode] = useState(false);
	const [soundButtonClicked, setSoundButtonClicked] = useState(false);
	const history = useHistory();
	const [spokenLanguage, setSpokenLanguage] = useState("en"); // Default to English
	const [signedLanguage, setSignedLanguage] = useState("ase"); // Default to American Sign Language
	const [videoSrc, setVideoSrc] = useState<string | null>(null);
	const [srcLanguage, setSrc] = useState("en");
	const [dected, setDetected] = useState(true);
	const [detectedLanguage, setDetectedLanguage] = useState(null);
	useEffect(() => {
		if (recognizedText) {
			setText(recognizedText);
		}
	}, [recognizedText]);

	useEffect(() => {
		const unlisten = history.listen((location) => {
			if (location.pathname === "/translate") {
				setMode("textToASL");
				setButtonClicked("upload");
				setSoundButtonClicked(false);
			}
		});
		return () => {
			unlisten();
		};
	}, [history]);

	useEffect(() => {
		setText("");
		setButtonClicked("upload");
		setSoundButtonClicked(false);
		resetText();
	}, [mode]);

	useEffect(() => {
		if (!text.trim()) {
			setVideoSrc(null)
		}
	}, [text]);

	const handleVoiceInputClick = () => {
		if (isListening) {
			stopListening();
			setIsAddingMode(true);
			resetText();
		} else {
			startListening();
			setIsAdding(true);
			setIsAddingMode(false);
		}
	};

	const handleSoundClick = () => {
		setSoundButtonClicked((prev) => {
			const newState = !prev;
			if (newState) {
				speakText();
			} else {
				setIsAddingMode(false);
				stopListening();
			}
			return newState;
		});
	};

	const speakText = () => {
		if (text) {
			const utterance = new SpeechSynthesisUtterance(text);
			if (isListening) {
				stopListening();
			}
			utterance.onend = () => {
				setSoundButtonClicked(false);
			};

			speechSynthesis.speak(utterance);
		}
	};

	const spokenToSigned = (text: string, spokenLanguage: string, signedLanguage: string) => {
		const api = 'https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_pose';
		return `${api}?text=${encodeURIComponent(text)}&spoken=${spokenLanguage}&signed=${signedLanguage}`;
	};
	const handleTextChange = async (e: any) => {
		const newText = e.target.value
		setText(newText)

		if (newText.trim()) {
			try {
				// const response = await axios.post('http://localhost:5000/translate-text', { text: newText, dest: 'en' });
				// console.log(response.data)
				// if (response.data.langCode !== srcLanguage) {
				// 	setDetectedLanguage(response.data.langCode)
				// } else {
				// 	setDetectedLanguage(null) 
				// 	// const url = spokenToSigned(response.data.translation, "en", signedLanguage);
				// 	// setVideoSrc(url)
				// }
				// const url = spokenToSigned(response.data.translation, "en", signedLanguage);
				const url = spokenToSigned(newText, "en", signedLanguage);
				setVideoSrc(url)
			} catch (error) {
				console.error('Error:', error);
			}
		} else {
			setVideoSrc(null)
		}
	};

	const handleSuggestion = () => {
		if (detectedLanguage) {
			setSrc(detectedLanguage)
			setDetectedLanguage(null)
		}
	}

	const handleDownloadPose = async () => {
		if (videoSrc) {
			try {
				const response = await axios.get(videoSrc, { responseType: 'blob' });
				const poseFile = new File([response.data], "pose.pose", { type: 'application/octet-stream' });
				const formData = new FormData();
				formData.append('pose', poseFile);

				const drawResponse = await axios.post('http://localhost:5000/draw_pose', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					responseType: 'blob',
				});

				const videoBlob = drawResponse.data;
				const videoUrl = URL.createObjectURL(videoBlob);
				const fileName = `${text.trim()}.mp4`;
				const link = document.createElement('a');
				link.href = videoUrl;
				link.download = fileName;
				link.click();
				URL.revokeObjectURL(videoUrl);
			} catch (error) {
				console.error("Error downloading pose file:", error);
			}
		}
	}

	return (
		<Layout>
			<div className=" rounded-lg bg-white p-6 shadow-md">
				{/* <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Translator</h1> */}
				<div className="flex items-center mb-6">
					<img
						src="https://cdn0.iconfinder.com/data/icons/future-business/512/Translating-Service-Globalization-translate-langues-1024.png"
						alt="Translator"
						className="w-12 h-12 mr-4"
					/>
					<h1 className="text-5xl font-extrabold text-blue-600">Translator</h1>
				</div>
				<hr className="mb-6 border-gray-300" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
						<div className="flex items-center mb-2">
							<span className="text-lg text-[#48C9B0] font-bold flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
								</svg>
								Text to Sign Language
							</span>
						</div>
						<p className="text-gray-700">Converts written text into accurate sign language animations, enabling easy understanding for hearing-impaired users.</p>
					</div>

					<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
						<div className="flex items-center mb-2">
							<span className="text-lg text-[#48C9B0] font-bold flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
								</svg>
								Sign Language to Text
							</span>
						</div>
						<p className="text-gray-700">Users can express sign language through a camera, which is recognized and converted back into text.</p>
					</div>
				</div>
				<hr className="mb-6 border-gray-300" />

				<div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
						<button
							className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${mode === "textToASL"
								? "bg-[#D2E3FC] text-[#1A73E8] shadow-md transform scale-105"
								: "border border-gray-300 hover:bg-gray-100"
								}`}
							onClick={() => setMode("textToASL")}
						>
							<div className={`rounded-full p-2 ${mode === "textToASL" ? "bg-blue-100" : "bg-gray-100"}`}>
								<img
									src="https://cdn0.iconfinder.com/data/icons/tuts/128/google_translate.png"
									alt="Text to ASL"
									className="w-8 h-8"
								/>
							</div>
							<span className="text-lg font-medium">Translate Text to ASL</span>
						</button>
						<button
							className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${mode === "ASLToText"
								? "bg-[#D2E3FC] text-[#1A73E8] shadow-md transform scale-105"
								: "border border-gray-300 hover:bg-gray-100"
								}`}
							onClick={() => setMode("ASLToText")}
						>
							<div className={`rounded-full p-2 ${mode === "ASLToText" ? "bg-blue-100" : "bg-gray-100"}`}>
								<img
									src="https://cdn4.iconfinder.com/data/icons/logos-4/24/Translate-128.png"
									alt="ASL to Text"
									className="w-8 h-8"
								/>
							</div>
							<span className="text-lg font-medium">Translate ASL to Text</span>
						</button>
					</div>

					{mode === "textToASL" ? (
						<div className="flex space-x-6">
							<div className="w-[580px] bg-white border border-gray-300 rounded-lg p-6">
								<div className="flex justify-between mb-3 space-x-2">
									{/* <span className="flex-1 p-2 border border-gray-300 rounded-md flex items-center h-10">
										{dected ? `${srcLanguage} - Detected` : `${srcLanguage}`}
										</span> */}
									<select
										value={srcLanguage}
										onChange={(e) => {
											setSrc(e.target.options[e.target.selectedIndex].text);
											setDetected(false);
										}}

										className="flex-1 p-2 border border-gray-300 rounded-md"
									>
										{/* <option value={srcLanguage}>
											{English}
										</option> */}
										{Object.entries(languages).map(([langCode, langName]) => (
											<option key={langCode} value={langCode}>
												{langName}
											</option>
										))}
									</select>

								</div>
								<textarea
									className="w-full h-[300px] p-4 border border-gray-300 rounded-lg text-lg"
									placeholder="Enter text here..."
									value={text}
									onChange={handleTextChange}
								></textarea>
								{/* Gợi ý ngôn ngữ phát hiện */}
								{detectedLanguage && (
									<div className="mt-2 text-blue-600 cursor-pointer" onClick={handleSuggestion}>
										Translate from: {languages[detectedLanguage]}
									</div>
								)}
								<div className="flex justify-between mt-6">
									<div className="flex space-x-4">
										<button
											className={`p-3 border rounded-full ${isListening ? "bg-blue-500 text-white" : "border-gray-300"
												}`}
											onClick={handleVoiceInputClick}
										>
											<img
												src="https://cdn3.iconfinder.com/data/icons/random-icon-set/512/microphone-128.png"
												alt="Listening"
												className="w-6 h-6"
											/>
										</button>
										<button
											className={`p-3 border border-gray-300 rounded-full ${soundButtonClicked ? "bg-blue-500 text-white" : ""
												}`}
											onClick={handleSoundClick}
										>
											<img
												src="https://cdn3.iconfinder.com/data/icons/system-basic-vol-5/20/icon-speaker-loudness-sound-2-128.png"
												alt="Speaking"
												className="w-6 h-6"
											/>
										</button>
									</div>
								</div>
							</div>

							<div className="w-[580px] bg-[#F5F7FD] rounded-lg p-6 border border-gray-300">
								<div className="flex justify-between mb-3">
									<span className="flex-1 p-2 border bg-white border-gray-300 rounded-md items-center h-10">Sign Language</span>
								</div>
								<div className="h-[300px] bg-white rounded-lg p-4 border border-gray-300 flex justify-center items-center">

									{/* Translation output will go here */}
									{videoSrc ? (
										<div >
											<pose-viewer src={videoSrc} width="100%" loop={true}></pose-viewer>
										</div>
									) : (

										<p className="text-gray-500">Translated output will appear here.</p>
									)}
								</div>
								<div className="flex justify-end space-x-4 mt-6">
									<button className="p-3 border border-gray-300 rounded-full" onClick={handleDownloadPose}>
										<img
											src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_save-128.png"
											alt="Download"
											className="w-6 h-6"
										/>
									</button>
									<button className="p-3 border border-gray-300 rounded-full">
										<img
											src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-copy-128.png"
											alt="Copy"
											className="w-6 h-6"
										/>
									</button>
								</div>
							</div>
						</div>
					) : (
						<div className="App">
							<SignLanguageDetector />
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
}

export default Translator;
