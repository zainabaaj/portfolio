import React from "react";
import Page from "../components/page";
import { motion } from "framer-motion";
import DownloadPdfButton from "@/components/DownloadPdfButton";

export default function Home() {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  const divStyle = {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <Page >

      <motion.div className=" flex flex-col m-auto md:p-12 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h2 className="text-xl md:pt-12 pb-4">
          Crafting Digital Experiences, Building Connections:
        </h2>
        <h2 className="text-xl ">
          Where Code Meets Creativity and Business
        </h2>
        <motion.h1

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
          className="text-5xl py-4"
        >
          Zeyna Baaj
        </motion.h1>
        <DownloadPdfButton />
      </motion.div>

      <style jsx>{``}</style>
    </Page>
  );
}
