import React, { useEffect, useState } from 'react';

const SpeechRecognitionComponent: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Verifica si la API está disponible
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition() as SpeechRecognition;
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    // Manejar los eventos de la API
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      console.log("Result: ", speechResult);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    // Controla el inicio y fin del reconocimiento
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.abort();
    };
  }, [isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
