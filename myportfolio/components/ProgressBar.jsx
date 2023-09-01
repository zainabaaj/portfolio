import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const ProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < percentage) {
                setProgress(progress + 1);
            }
        }, 30);

        return () => {
            clearInterval(interval);
        };
    }, [progress, percentage]);

    return (
        <div className="relative h-4 w-80 rounded-full bg-transparent border">
            <motion.div
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
                className="absolute h-full rounded-full bg-gradient-to-r from-green-400 via-white to-green-400"
                style={{ width: `${progress}%` }}
            ></motion.div>
        </div>
    );
};

export default ProgressBar;
