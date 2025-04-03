// Taken from QoP on Stackoverflow
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
//

import { useEffect, useState } from 'react';
import { Dimensions } from '../types';


export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<Dimensions>();

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
