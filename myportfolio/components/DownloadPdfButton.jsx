import React from "react";
import { motion } from "framer-motion";
function DownloadPdfButton() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/CV_ZeynaBaaj.pdf"; // Use a relative path from the public directory
    link.download = "my-pdf-file.pdf"; // Define the downloaded file name

    // Trigger a click event to start the download
    link.click();
  };

  return (
    <div>
      <motion.button
        className=" rounded-md p-4 border-2 "
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
        onClick={handleDownload}>Download PDF</motion.button>
    </div>
  );
}

export default DownloadPdfButton;