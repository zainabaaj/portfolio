import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const ProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                width: `${percentage}%`,
                transition: { duration: 2 }
            });
        }
    }, [controls, inView, percentage]);


    return (
        <motion.div
            className="relative h-2 w-full md:w-44 rounded-full bg-black bg-opacity-40"

        >

            <motion.div
                ref={ref}
                initial={{ width: '0%' }}
                animate={controls}

                className="absolute h-full rounded-full bg-green-200">

                <motion.div
                    className="h-full rounded-full"
                    animate={{
                        backgroundColor: [
                            "#4BFFA5",
                            "#FFFFFF",
                            "#4BFFA5",
                        ],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                ></motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProgressBar;
