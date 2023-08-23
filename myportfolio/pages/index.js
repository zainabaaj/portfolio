import React from "react";
import Page from "../components/page";
import { motion } from "framer-motion";

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

      <div >
        <motion.h1

          animate={{
            color: [
              "#4BFFA5",
              "#FFFFFF",

            ],
          }}
          transition={{
            color: { duration: 6, repeat: Infinity },
          }}
        >
          Zeyna Baaj
        </motion.h1>
      </div>

      <style jsx>{``}</style>
    </Page>
  );
}
