import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
const Portfolio = () => {
    return (
        <div
            id='portfolio'
            className='flex flex-col bg-black p-12 text-justify' >
            <h1 className='text-6xl font-extrabold text-green-400 p-4'>Projects </h1>
            <div className="flex flex-row">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>








        </div>
    )
}

export default Portfolio