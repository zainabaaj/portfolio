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
        <div className="relative h-2 w-80 rounded-full bg-transparent border">
            <div
                className="absolute h-full rounded-full bg-green-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
