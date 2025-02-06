import { AnimatePresence, motion } from "framer-motion";
import MessageWithAnimation from "./MessageWithAnimation";
import GradientButton from "./GradientButton";

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
            {isVisible && (
                <motion.div
                    key={screenNumber}
                    className={`screen screen-${screenNumber}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ display: "block", position: "relative", overflow: "hidden" }}
                >
                    {/* Mensaje animado */}
                    <motion.div
                        className="message-container"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <MessageWithAnimation message={message} />
                    </motion.div>

                    {/* Ícono animado */}
                    {iconSrc && (
                        <div style={{
                            display: "grid",
                            placeItems: "center",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            zIndex: 1,
                        }}>
                            <motion.img
                                src={iconSrc}
                                alt="Heart Icon"
                                style={{ width: "80px" }}
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    )}

                    {/* Botones */}
                    <div className="buttons-container">
                        {buttons.map((button, index) => (
                            <GradientButton
                                index={index}
                                key={index}
                                {...button}
                                onClick={() => button.onClick ? button.onClick() : onButtonClick(button)}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Screen;
