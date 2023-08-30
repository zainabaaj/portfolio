import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
import images from '@/public/projectImages'
const Portfolio = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
    return (
        <div
            id='portfolio'
            className='flex flex-col bg-black p-12 text-justify' >
            <h1 className='text-6xl font-extrabold text-green-400 p-4'>Projects </h1>
            <motion.div ref={carousel} className=' flex flex-row  cursor-grab overflow-hidden ' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className=' flex flex-row min-w-30 '>
                    {images.map((image) => {
                        return (
                            <motion.div className=' rounded-sm p-8 w-80 h-64 pointer-events-none'     >
                                <Image src={image} alt="" width={1080} height={700} className='w-full h-full rounded-md ' />
                            </motion.div>
                        )
                    })}
                </motion.div>

            </motion.div>








        </div>
    )
}

export default Portfolio