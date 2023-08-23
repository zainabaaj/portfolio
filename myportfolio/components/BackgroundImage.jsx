
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundImage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);
    const divStyle = {
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    };
    return (
        <motion.div
            className="bg-black"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >


        </motion.div>
    );
};

export default BackgroundImage;
