import { useEffect, useState } from 'react';

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
        <div className="relative h-2 w-20 md:w-44 rounded-full bg-transparent border">
            <div
                className="absolute h-full rounded-full bg-green-200"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
