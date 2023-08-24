import Link from "next/link";
import { motion } from "framer-motion"
const Header = () => (
  <header className="w-full fixed top-0 shadow-md bg-slate-950 bg-opacity-20">
    <nav className="w-full text-lg flex flex-row justify-end pt-2 md:pr-5 ">
      <motion.div
        className="p-2 cursor-pointer"
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Home
      </motion.div>
      <motion.div
        className="p-2 cursor-pointer"
        href="#resume"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Resume
      </motion.div>
      <motion.div
        className="p-2 cursor-pointer"
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Portfolio
      </motion.div>
      <motion.div
        className="p-2 cursor-pointer"
        href="/about"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Contact
      </motion.div>
    </nav>


  </header>


);

export default Header;
