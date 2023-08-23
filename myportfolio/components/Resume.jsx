import React from 'react'
import { motion } from 'framer-motion'
const Resume = () => {
    return (
        <div className='flex flex-col bg-black'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>
                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>
                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>
                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>
                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>

                <div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div><div>Resume</div>
            </motion.div>
        </div>
    )
}

export default Resume