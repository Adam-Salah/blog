// Taken from QoP on Stackoverflow
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
//

import { useEffect, useState } from 'react';
import { Dimensions } from '../types';

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<Dimensions>();
    const [canUpdate, setCanUpdate] = useState<boolean>(false);
    const [lastResizeTime, setLastResizeTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (canUpdate && Date.now() - lastResizeTime > 100) {
                setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
                setCanUpdate(false);
            }
        }, 100);

        const handleResize = () => {
            setCanUpdate(true);
            setLastResizeTime(Date.now());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, [canUpdate, lastResizeTime]);

    useEffect(() => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    return windowDimensions;
}
