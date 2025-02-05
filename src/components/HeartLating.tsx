import React from "react";
import { motion } from "framer-motion";

const HeartLating: React.FC = () => {
    return (
        <motion.div
            className="heart"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        />
    );
};

export default HeartLating;
