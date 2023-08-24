import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
const ProjectCard = () => {
    const images = ['/capstone/Capture.JPG', '/capstone/course.JPG', '/capstone/home.JPG'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-row ' style={{ width: '400px', height: '300px' }}>
            <div className="flex flex-col">
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt="capstone project"
                    width={400}
                    height={300}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 0.7, ease: "easeInOut" }}
                />
                <p>Course Worm</p>
            </div>
        </div>
    )
}

export default ProjectCard
