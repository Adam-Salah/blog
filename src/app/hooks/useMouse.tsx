// Taken from QoP on Stackoverflow
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
//

import { useEffect, useState } from 'react';
import { MouseInfo } from '../types';

export default function useMouse() {
    const [mouseInfo, setMouseInfo] = useState<MouseInfo>({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
        mouseInfo.x = e.x;
        mouseInfo.y = e.y;
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mouseInfo;
}
