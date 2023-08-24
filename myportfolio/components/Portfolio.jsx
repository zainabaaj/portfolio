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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />







        </div>
    )
}

export default Portfolio