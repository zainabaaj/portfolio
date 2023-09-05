import React from "react";
import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillInstagram,
    AiFillGithub,
    AiFillMessage,
    AiFillMail,
    AiFillPhone,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            className=" flex flex-row justify-center p-2 bg-black bg-opacity-30 bottom-0 fixed w-full items-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
        >

            <a href="mailto:zeynabaaj@gmail.com" className="p-2">

                <AiFillMail
                    className="w-8 h-8 rounded-full" />
            </a>
            <a href="tel:+905526244322" className="p-2">
                <AiFillPhone
                    className="w-8 h-8"
                />

            </a>

            <a
                href="https://www.linkedin.com/in/zeynabaaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 "
            >
                <AiFillLinkedin
                    className="w-8 h-8 rounded-full"


                />
            </a>

            <a
                href="https://github.com/zainabaaj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
            >
                <AiFillGithub
                    className="w-8 h-8"

                />
            </a>
            <a
                href="https://www.instagram.com/zeyna.baaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
            >
                <AiFillInstagram
                    className="w-8 h-8"


                />
            </a>



        </motion.div>
    );
};

export default Footer;
