import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps {
    index: number;
    text: string;
    className: string;
    onClick?: () => void;
}

const GradientButton: React.FC<ButtonProps> = ({ index, text, className, onClick }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLButtonElement;

        // Calcula la posición del fondo en base a la posición del cursor
        const x = (offsetX / clientWidth) * 100;
        const y = (offsetY / clientHeight) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    // Variants para las animaciones

    return (
        <motion.button
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileTap={{ scale: 0.8 }}
            style={{
                background: "linear-gradient(135deg, #9b59b6, #e91e63)",
                backgroundSize: "200% 200%",
                backgroundPosition,
            }}
            variants={{
                initial: { y: 0 },
                jumping: {
                    y: [0, -10, 0],
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: index * 2,
                        repeatType: "loop",
                        repeatDelay: 2,
                    },
                },
                hovered: {
                    scale: 1.1,
                    y: 0, // Detiene la animación de salto cuando se hace hover
                    transition: { duration: 0.2 },
                },
            }} // Usando los variants definidos
            initial="initial" // Inicia con la animación de salto
            animate="jumping" // Aplica la animación de salto continuamente
            whileHover="hovered" // Activa la animación de hover
        >
            {text}
        </motion.button>
    );
};

export default GradientButton;
