import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
import images from '@/public/projectImages'
const Portfolio = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const controls = useAnimation();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const nextSlide = () => {
        if (currentIndex < 1) {
            setCurrentIndex(currentIndex + 1);
            controls.start({ x: -width * (currentIndex + 1) }, { duration: 0.5 });
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            controls.start({ x: -width * (currentIndex - 1) }, { duration: 0.5 });
        }
    };

    return (
        <div
            id='portfolio'
            className='flex flex-col bg-black p-12 text-justify' >
            <h1 className='text-6xl font-extrabold text-green-400 p-4'>Projects </h1>
            <div className="flex flex-row items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={prevSlide} height="28" viewBox="0 -960 960 960" fill='#FFFFFF' width="28"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg> */}
                <div className="prev text-black p-4" onClick={prevSlide} >
                    {"‣"}
                </div>
                <motion.div ref={carousel} className=' flex flex-row  cursor-grab overflow-hidden ' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: - width }}
                        animate={controls}
                        className=' flex flex-row min-w-30 '>
                        {images.map((image) => {
                            return (
                                <motion.div className=' rounded-sm p-8 w-80 h-64 pointer-events-none' key={image.key}     >
                                    <Image src={image.image} alt="" width={1080} height={700} className='w-full h-full rounded-md ' />
                                    <p onClick={() => handleClick(image.name)} className='flex flex-wrap text-sm'>{image.name}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>

                {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={nextSlide} height="28" fill='#FFFFFF' viewBox="0 -960 960 960" width="28"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg> */}
                <div className="next text-black p-4" onClick={nextSlide}  >
                    {"‣"}
                </div>
            </div>






        </div>
    )
}

export default Portfolio