import React, {useState, useEffect} from "react";
import Image from "next/image";
import Play from "../../assets/play.png"

const useAudio = url => {
    const [audio] = useState(typeof Audio !== "undefined" ? new Audio(`/musik.mp3`) : null);
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            if (!audio) return;
            playing ? audio.play() : audio.pause();
        },
        [playing, audio]
    );

    useEffect(() => {
        if (!audio) return;
        const handleEnded = () => setPlaying(false);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    return [playing, toggle];
};

const Music = ({url}) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggle}
                className={`bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border border-white/50 ${playing ? 'animate-spin-slow' : ''}`}
                style={{ width: '60px', height: '60px' }}
            >
                {/* Vinyl Record Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`text-color-pallete-400 w-8 h-8 ${!playing ? 'opacity-50' : ''}`}>
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default Music;