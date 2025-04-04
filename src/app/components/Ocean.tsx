'use client';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import useMouse from '../hooks/useMouse';
import { clamp } from '../modules/MathUtils';

export default function ocean() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;
    let context;

    const dimensions = useWindowDimensions();
    const mouse = useMouse();

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

        let mapHeight: number = Math.floor(canvas.height / tileHeight);
        let currentHeight: number = map.length;

        if (currentHeight <= mapHeight) {
            for (let i = currentHeight; i < mapHeight; i++) {
                map.push([]);
            }
        } else {
            map.splice(mapHeight - currentHeight);
        }

        let mapWidth: number = Math.floor(canvas.width / tileWidth);
        let currentWidth: number = map[0].length;

        if (currentWidth <= mapWidth) {
            for (let i = 0; i < mapHeight; i++) {
                for (let j = currentWidth; j < mapWidth; j++) {
                    map[i].push(0);
                }
            }
        } else {
            for (let i = 0; i < mapHeight; i++) {
                map[i].splice(mapWidth - currentWidth);
            }
        }
    }, [dimensions]);

    //the one and only canvas rendering
    useEffect(() => {
        if (!canvas) return;
        let context = canvas.getContext('2d');
        if (!context) return;
        if (!dimensions) return;

        context.font = fontSize + 'px monospace';
        // context.fillStyle = 'oklch(0.81 0.185 208.59)';
        context.fillStyle = '#FFFFFF';

        context.clearRect(0, 0, canvas.width, canvas.height);
        render(context);
    });

    useEffect(() => {
        if (!canvas) return;

        console.log(map[0].length)
        map[clamp(Math.floor(mouse.y / tileHeight), 0, map.length - 1)][clamp(Math.floor(mouse.x / tileWidth), 0, map[0].length - 1)] = 1;
    }, [mouse]);

    const render = (context: CanvasRenderingContext2D) => {
        for (let i = 0; i < map.length; i++) {
            let line = '';
            for (let j = 0; j < map[i].length; j++) {
                line += map[i][j];
            }
            context.fillText(line, 10, 50 + i * tileHeight);
        }
    };

    return <canvas ref={canvasRef} id='ocean' className='h-screen' />;
}
