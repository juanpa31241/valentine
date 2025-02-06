import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react"; // Íconos minimalistas

const MUSIC_SRC = "/song.mp3"; // Asegúrate de que la ruta sea correcta

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100 || 0);
        };

        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.src === "") {
            audio.src = MUSIC_SRC; // Asegura que el audio se carga solo cuando el usuario interactúa
        }

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch((error) => console.error("Error al reproducir audio:", error));
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />

            {/* Botón Circular */}
            <button onClick={togglePlay} className="music-button">
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* Barra de Progreso */}
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default MusicPlayer;
