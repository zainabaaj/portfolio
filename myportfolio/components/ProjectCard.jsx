import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import projectImages from '@/public/projectImages';
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
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row p-4 md:pl-6">
            <div className='p-2 w-full h-64 '>
                <motion.img
                    key={project.key}
                    src={project.images[index].src}
                    alt="capstone project"
                    width={2000} height={1000}
                    variants={imgVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 5, delay: 0.7, ease: "easeInOut" }}
                    className='rounded-md w-full h-full'
                />
            </div>
            <div className='flex flex-col p-4 '>
                <p className='text-green-400 '>{project.name}</p>
                <div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>


        </div>
    )
}

export default ProjectCard
