import { AnimatePresence, motion } from "framer-motion";

// Componente para manejar el fade del fondo
const BackgroundFade: React.FC<{ background: string }> = ({ background }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={background} // Usamos el background como key para cambiar de fondo
                className="background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />
        </AnimatePresence>
    );
};

export default BackgroundFade;
