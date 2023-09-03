import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import projectImages from '@/public/projectImages';
import Link from 'next/link';
const ProjectCard = ({ project }) => {
    // const images = ['/capstone/Capture.JPG', '/capstone/course.JPG', '/capstone/home.JPG'];
    const [index, setIndex] = useState(0);
    const imgVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
    };
    console.log(project.images)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }, 5000);

        return () => clearInterval(interval);
    },);

    return (
        <div className={`flex flex-col w-full md:flex-row md:p-8 text-slate-200 `}>
            <div className='p-6  w-full h-96  rounded-xl'>
                <motion.img
                    key={project.key}
                    src={project.images[index].src}
                    alt="capstone project"
                    width={2000} height={1000}
                    variants={imgVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5, delay: 0.7, ease: "easeInOut" }}
                    className='rounded-md w-full h-full  shadow-lg'
                />
            </div>
            <div className='flex flex-col w-full px-2 md:px-4 text-sm md:text-md bg-gray-800 bg-opacity-50 md:mr-8 rounded-xl'>
                <p className='text-green-400 py-2 font-bold text-lg'>{project.name}</p>
                <div className='md:leading-relaxed' dangerouslySetInnerHTML={{ __html: project.description }} />
                <div className="flex flex-row items-center justify-center py-4">
                    <motion.a
                        className=" border-2 border-white m-2 hover:border-green-300 border-opacity-70 rounded-lg p-4 "
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            color: [
                                "#4BFFA5",
                                "#FFFFFF",
                                "#4BFFA5",

                            ],
                        }}
                        transition={{
                            color: { duration: 1, repeat: 1 },
                        }}
                        href={project.link} target="_blank">Go to Website</motion.a>
                    <motion.a
                        className=" border-2 border-white m-2 hover:border-green-300 border-opacity-70 rounded-lg p-4 "
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            color: [
                                "#4BFFA5",
                                "#FFFFFF",
                                "#4BFFA5",

                            ],
                        }}
                        transition={{
                            color: { duration: 1, repeat: 1 },
                        }}
                        href={project.github} target="_blank">View Code on Github</motion.a>
                </div>

            </div>


        </div >
    )
}

export default ProjectCard