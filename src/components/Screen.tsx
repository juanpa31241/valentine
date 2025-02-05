import { AnimatePresence, motion } from "framer-motion";
import MessageWithAnimation from "./MessageWithAnimation";

interface ButtonProps {
    text: string;
    className: string;
    onClick?: () => void;
}

interface ScreenProps {
    screenNumber: number;
    message: string;
    buttons: ButtonProps[];
    isVisible: boolean;
    onButtonClick?: (button: ButtonProps) => void;
    iconSrc: string;  // Añadimos una propiedad para la imagen del icono
}

const Screen: React.FC<ScreenProps> = ({ screenNumber, message, buttons, isVisible, onButtonClick = () => { }, iconSrc }) => {
    return (
        <AnimatePresence mode="wait">
            {/* Aquí es donde se maneja la transición de opacidad entre pantallas */}
            {isVisible && (
                <motion.div
                    key={screenNumber}  // Usamos screenNumber como key para diferenciar las pantallas
                    className={`screen screen-${screenNumber}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ display: "block", position: "relative", overflow: "hidden" }}
                >
                    {/* Fondo Animado con Fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "transparent", // Fondo transparente para fade
                            zIndex: -1,
                        }}
                    />

                    <motion.div
                        className="message-container"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <MessageWithAnimation message={message} />
                    </motion.div>

                    {/* Contenedor para centrar el ícono con Grid */}
                    <div
                        style={{
                            display: iconSrc ? "grid" : "none",  // Ocultar si no hay iconSrc
                            placeItems: "center",  // Esto asegura que el ícono esté centrado
                            width: "100%",
                            height: "100%",  // Asegura que el contenedor ocupe toda la pantalla
                            position: "relative",
                            zIndex: 1, // Aseguramos que esté por encima de otros elementos si es necesario
                        }}
                    >
                        {/* Ícono con animación de latido */}
                        <motion.img
                            src={iconSrc}  // Usamos la propiedad iconSrc para cargar el ícono PNG
                            alt="Heart Icon"
                            style={{
                                width: "80px", // Ajusta el tamaño del ícono
                            }}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.2, 1] }}  // Animación de latido
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <div className="buttons-container">
                        {buttons.map((button, index) => (
                            <motion.button
                                key={index}
                                className={button.className}
                                onClick={() => button.onClick ? button.onClick() : onButtonClick(button)}
                                whileHover={{
                                    scale: 1.1,
                                    background: "linear-gradient(135deg, #e91e63, #9b59b6)",
                                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.4)",
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {button.text}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Screen;
