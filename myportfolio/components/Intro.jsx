import { motion } from "framer-motion";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import React, { useEffect, useState } from "react";
const Intro = () => {
    const [bgOpacity, setBgOpacity] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            // Calculate the opacity based on the scroll position
            const opacity = window.scrollY / 500; // You can adjust this value

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
            id="intro"
            className="w-full min-h-screen flex bg-gradient-to-b from-transparent from-40% to-black  flex-col m-auto md:p-12"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                // Add other styles for your Intro component
            }}
        >
            <div className=" flex flex-col m-auto p-6 md:p-12 "

            >
                <motion.h2
                    className="text-xl md:pt-12 pb-4"
                    initial={{ x: "-40%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: "easeInOut",
                    }}
                >

                    Crafting Digital Experiences, Building Connections:

                </motion.h2>
                <motion.h2
                    className="text-xl  pb-4"
                    initial={{ x: "-40%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: "easeInOut",
                    }}
                >

                    Where Code Meets Creativity and Business


                </motion.h2>

                <motion.div className=" "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
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
                        className="text-6xl py-6 font-bold"
                    >
                        Zeyna Baaj
                    </motion.h1>
                </motion.div>
                <DownloadPdfButton />
            </div>
        </div >

    )
}

export default Intro