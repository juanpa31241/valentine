import { motion } from "framer-motion";

// Función que divide el mensaje en letras y les aplica una animación
const MessageWithAnimation: React.FC<{ message: string }> = ({ message }) => {
    const letters = message.split(""); // Dividimos el mensaje en letras individuales

    return (
        <motion.div
            className="message-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h1>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -20 }}  // Cada letra comienza con opacidad 0 y desplazada a la izquierda
                        animate={{ opacity: 1, x: 0 }}    // Cada letra se vuelve visible y se mueve a su posición original
                        transition={{
                            delay: index * 0.04,            // El retraso aumenta con cada letra
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>
        </motion.div>
    );
};

export default MessageWithAnimation;
