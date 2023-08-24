import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DownloadPdfButton from './DownloadPdfButton'

const Resume = () => {
    return (
        <div
            id='resume'
            className='flex flex-col bg-black p-12 text-justify' >
            <h1 className='text-6xl font-extrabold text-green-400 p-4'>About </h1>
            <div className='flex flex-col md:flex-row h-full md:p-6'>
                <div className='flex flex-col items-center'>
                    <Image src='/zeynapp.png'
                        alt="zeyna profile picture"
                        width={400}
                        height={700}

                    />
                    <div className="py-6">
                        <DownloadPdfButton />

                    </div>
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
                        <div className='flex flex-col md:flex-row items-center justify-between'>
                            <div className='flex flex-row'>
                                <motion.svg
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
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="28" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                                </motion.svg>
                                <p>zeynabaaj@gmail.com</p>
                            </div>
                            <div className="flex flex-row">
                                <motion.svg
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
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="28" viewBox="0 -960 960 960" width="48"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
                                </motion.svg>
                                <p>+90 (552) 624 43 22</p>
                            </div>
                            <div className="flex flex-row">
                                <motion.svg
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
                                    xmlns="http://www.w3.org/2000/svg" height="28" fill="currentColor" viewBox="0 -960 960 960" width="48"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                                </motion.svg>
                                Turkey
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Resume
