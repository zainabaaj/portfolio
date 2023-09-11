import React from "react";
import { motion } from "framer-motion";
function DownloadPdfButton() {
  const handleDownload = () => {

    const link = document.createElement("a");
    link.href = "/CV_Zeyna_Baaj_Tech.pdf";
    link.download = "Zeyna Baaj.pdf";

    link.click();
  };

  return (
    <div>
      <motion.button
        className=" border-2 border-white hover:border-green-300 border-opacity-70 rounded-lg p-4 "
        whileHover={{ scale: 1.1 }}
        animate={{
          color: [
            "#4BFFA5",
            "#FFFFFF",
            "#4BFFA5",

          ],
        }}
        transition={{
          color: { duration: 1, repeat: 1 },
        }}
        onClick={handleDownload}>Download CV</motion.button>
    </div>
  );
}

export default DownloadPdfButton;