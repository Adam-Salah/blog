'use client';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function ocean() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;
    let context;

    const dimensions = useWindowDimensions();

    const fontSize = 54;
    const tileHeight = fontSize + 5;
    const tileWidth = 30; //gotta do the math urself for that one :(

    const [map, setMap] = useState<number[][]>([[]]);

    useEffect(() => {
        if (!canvas) return;
        context = canvas.getContext('2d');
        if (!context) return;
        if (!dimensions) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        context.font = fontSize + 'px monospace';
        // context.fillStyle = 'oklch(0.81 0.185 208.59)';
        context.fillStyle = '#FFFFFF';

        let mapHeight: number = canvas.height / tileHeight;
        let currentHeight: number = map.length;

        if (currentHeight < mapHeight) {
            for (let i = currentHeight; i < mapHeight; i++) {
                map.push([]);
            }
        } else {
            setMap(map.slice(0, -(mapHeight - currentHeight)));
        }

        let mapWidth: number = canvas.width / tileWidth;
        let currentWidth: number = map[0].length;

        if (currentWidth < mapWidth) {
            for (let i = 0; i < mapHeight; i++) {
                for (let j = currentWidth; j < mapWidth; j++) {
                    map[i].push(0);
                }
            }
        } else {
            for (let i = 0; i < mapHeight; i++) {
                map[i] = map[i].slice(0, -(mapWidth - currentWidth));
            }
        }
        console.log(map)
    }, [dimensions]);

    useEffect(() => {
        if (!canvas) return;
        let context = canvas.getContext('2d');
        if (!context) return;
        if (!dimensions) return;

        for (let i = 0; i < map.length; i++) {
            let line = "";
            for (let j = 0; j < map[i].length; j++) {
                line += map[i][j];
            }
            context.fillText(line, 10, 50 + i * tileHeight);
        }
        // console.log()
    }, [dimensions]);

    return <canvas ref={canvasRef} id='ocean' className='h-screen' />;
}
