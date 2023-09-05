import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="flex flex-col md:p-8 " id="contact">
            <div className="flex flex-col pb-12 ">
                <h1 className='text-4xl md:text-6xl font-extrabold text-green-400 p-4' >Contact</h1>
                <div className='flex flex-col'>
                    <form
                        action="https://formsubmit.co/zeynabaaj@gmail.com"
                        method="POST"
                        className='flex flex-col'
                    >
                        <motion.input
                            className='my-4  bg-transparent border-b placeholder:text-gray-900 p-3 text-gray-900'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className='m-2 bg-transparent border-b p-3 placeholder:text-gray-900 text-gray-900'

                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            className='m-2 bg-transparent border-b  p-3 placeholder:text-gray-900  text-gray-900'

                            id="message"
                            rows="4"
                            placeholder="Message"
                            name="text"
                            required
                        ></textarea>
                        <button className="border-2 border-white font-bold m-auto  text-lg hover:border-green-300 border-opacity-70 rounded-lg p-4 " text={"Contact Me"} >
                            Contact Me
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact