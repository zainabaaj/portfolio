import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Resume = () => {
    return (
        <div className='flex flex-col bg-black p-12 text-justify' id='resume'>
            <h1 className='text-6xl font-extrabold text-green-400 p-4'>About </h1>
            <div className='flex flex-col md:flex-row h-full md:p-6'>
                <div>
                    <Image src='/zeynapp.png'
                        alt="zeyna profile picture"
                        width={400}
                        height={700}
                    />
                </div>
                <div className="bg-white mx-2 p-1"></div>
                <div>


                    <div className="relative">
                        <motion.div
                            className="h-full bg-black absolute"
                            initial={{ width: "100%", left: 0 }}
                            animate={{ width: "0%", left: '100%' }}
                            transition={{ delay: 1, duration: 3, ease: "easeInOut" }}
                        >
                        </motion.div>
                        <h2 className="text-gray-400 text-2xl font-semibold mb-4">Greetings, I am Zeyna Baaj</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A dedicated technologist and creative mind. My journey commenced with a B.Eng. in Computer Engineering, followed by advanced proficiency in HTML, CSS, JavaScript, and React, attained through the RE:CODED Front-End Bootcamp.
                        </p>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Currently serving as the Business Development Manager at Open Aluminum Design, I seamlessly merge technical acumen with strategic insight. My background encompasses impactful roles in backend development, student mentoring, and translation, attesting to my versatile skill set.
                        </p>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Beyond the realm of technology, I founded the Python and Robotics initiative, underscoring my commitment to education. Additionally, my engagement with the Syrian Institute for Progress reflects my dedication to humanitarian causes.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Fluent in multiple languages and bolstered by certifications in UX, Agile methodologies, and more, I am poised to engineer profound digital narratives.
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Resume
