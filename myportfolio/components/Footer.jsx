import React from "react";
import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillInstagram,
    AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            className=" flex flex-row justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
        >
            <div className=" flex flex-row ">

                <a href="mailto:zeynabaaj@gmail.com" className="">
                    <p >E: zeynabaaj@gmail.com</p>
                </a>
                <p>T: +90 (552) 624 43 22</p>
            </div>
            <div className="flex flex-row justify-between">
                <p >Follow Me</p>
                <div ></div>
                <a
                    href="https://www.linkedin.com/in/zeynabaaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin
                        className=""


                    />
                </a>

                <a
                    href="https://github.com/zainabaaj"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub
                        className=""

                    />
                </a>
            </div>
        </motion.div>
    );
};

export default Footer;
