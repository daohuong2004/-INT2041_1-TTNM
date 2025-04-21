import { useEffect, useState } from 'react';

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true; 
    recognition.lang = "en-US"; 
}

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log("onresult event: ", event);
            const newText = event.results[event.resultIndex][0].transcript; 
            setText(prevText => isAdding ? prevText + " " + newText : newText);
        };

        recognition.onend = () => {
            setIsListening(false);
            console.log("Đã dừng nghe");
            setText("");
        };
    }, [isAdding]);

    const startListening = () => {
        if (!isListening) {
            setIsListening(true);
            setIsAdding(true); 
            recognition.start();
            console.log("Bắt đầu nghe...");
        } else {
            console.log("Đang nghe...");
        }
    };

    const stopListening = () => {
        if (isListening) {
            recognition.stop();
            setIsListening(false);
            setIsAdding(false); 
            console.log("Dừng nghe...");
        } else {
            console.log("Hiện không nghe.");
        }
    };

    const resetText = () => {
        setText("");
        setIsAdding(false);
        console.log("Đã reset text.");
    }

    const speakText = (inputText: string) => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(inputText);
            window.speechSynthesis.speak(utterance);
            console.log("Đang phát âm thanh:", inputText);
        } else {
            console.log("Trình duyệt không hỗ trợ Speech Synthesis");
        }
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        setIsAdding,
        resetText,
        speakText,
        hasRecognitionSupport: !!recognition, 
    };
};

export default useSpeechRecognition;
