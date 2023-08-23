import { motion } from "framer-motion";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import React, { useEffect, useState } from "react";
const Intro = () => {
    const [bgOpacity, setBgOpacity] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            // Calculate the opacity based on the scroll position
            const opacity = window.scrollY / 600; // You can adjust this value

            // Limit opacity to a maximum of 1
            const limitedOpacity = Math.min(opacity, 1);

            // Set the background opacity
            setBgOpacity(limitedOpacity);
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <div
            className="w-full min-h-screen flex flex-col m-auto md:p-12"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                // Add other styles for your Intro component
            }}
        >
            <motion.div className=" flex flex-col m-auto md:p-12 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <h2 className="text-xl md:pt-12 pb-4">
                    Crafting Digital Experiences, Building Connections:
                </h2>
                <h2 className="text-xl ">
                    Where Code Meets Creativity and Business
                </h2>
                <motion.h1

                    animate={{
                        color: [
                            "#4BFFA5",
                            "#FFFFFF",
                            "#4BFFA5",
                        ],
                    }}
                    transition={{
                        color: { duration: 6, repeat: Infinity },
                    }}
                    className="text-5xl py-4"
                >
                    Zeyna Baaj
                </motion.h1>
                <DownloadPdfButton />
            </motion.div>
        </div >

    )
}

export default Intro