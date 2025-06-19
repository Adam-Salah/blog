'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function Network() {
    const lastUpdate = useRef<number>(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const previousWindowWidthRef = useRef<number>(0);
    const proximity = useRef<number>(0);
    const fadeThreshold = useRef<number>(0);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 800;
    const fps = isMobile ? 60 : 240;
    const speed = 25;
    
    const [numPoints, setNumPoints] = useState<number>(100);
    const [points] = useState<Point[]>([]);

    const physics = (dt: number) => {
        const canvas = canvasRef.current!;
        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            p.x += p.fx * speed * dt;
            p.y += p.fy * speed * dt;

            if (p.x < 0) p.x = canvas.width;
            else if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            else if (p.y > canvas.height) p.y = 0;

            let random = Math.random() - 0.5;
            if (random < 0.05 && random > -0.05) p.fx += random * dt;
            random = Math.random() - 0.5;
            if (random < 0.05 && random > -0.05) p.fy += random * dt;

            const ogfx = Math.abs(p.ogfx);
            if (p.fx > -ogfx || p.fx < ogfx) {
                p.fx *= 0.9;
                if (p.fx < ogfx && p.fx > -ogfx) p.fx = Math.sign(p.fx) * ogfx;
            }
            const ogfy = Math.abs(p.ogfy);
            if (p.fy > -ogfy || p.fy < ogfy) {
                p.fy *= 0.9;
                if (p.fy < ogfy && p.fy > -ogfy) p.fy = Math.sign(p.fy) * ogfy;
            }
        }
    };

    const render = () => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#000';
        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fill();
        }

        for (let i = 0; i < points.length; i++) {
            const p1 = points[i];
            for (let j = i + 1; j < points.length; j++) {
                const p2 = points[j];
                let dx = Math.abs(p1.x - p2.x);
                let dy = Math.abs(p1.y - p2.y);

                if (dx > canvas.width / 2) dx = canvas.width - dx;
                if (dy > canvas.height / 2) dy = canvas.height - dy;

                const dist = dx * dx + dy * dy;
                const prox = proximity.current;
                const fade = fadeThreshold.current;
                const maxDist = (prox + fade) * (prox + fade);

                if (dist <= maxDist) {
                    let alpha = 0.2;
                    if (dist > prox * prox) {
                        alpha = 0.2 * (1 - (Math.sqrt(dist) - prox) / fade);
                    }
                    ctx.strokeStyle = 'rgba(0,0,0,' + alpha + ')';

                    let x1 = p1.x,
                        y1 = p1.y,
                        x2 = p2.x,
                        y2 = p2.y;
                    if (Math.abs(x1 - x2) > canvas.width / 2) {
                        if (x1 > x2) x1 -= canvas.width;
                        else x2 -= canvas.width;
                    }
                    if (Math.abs(y1 - y2) > canvas.height / 2) {
                        if (y1 > y2) y1 -= canvas.height;
                        else y2 -= canvas.height;
                    }
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                    if (x1 < 0 || x2 < 0) {
                        ctx.beginPath();
                        ctx.moveTo(x1 + canvas.width, y1);
                        ctx.lineTo(x2 + canvas.width, y2);
                        ctx.stroke();
                    }
                    if (y1 < 0 || y2 < 0) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1 + canvas.height);
                        ctx.lineTo(x2, y2 + canvas.height);
                        ctx.stroke();
                    }
                    if ((x1 < 0 || x2 < 0) && (y1 < 0 || y2 < 0)) {
                        ctx.beginPath();
                        ctx.moveTo(x1 + canvas.width, y1 + canvas.height);
                        ctx.lineTo(x2 + canvas.width, y2 + canvas.height);
                        ctx.stroke();
                    }
                }
            }
        }
    };

    useEffect(() => {
        lastUpdate.current = Date.now();
        let running = true;
        const loop = () => {
            if (!running) return;
            const now = Date.now();
            const dt = (now - lastUpdate.current) / 1000;
            lastUpdate.current = now;
            physics(dt);
            render();
            setTimeout(loop, 1000 / fps);
        };
        loop();
        return () => {
            running = false;
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current!;
        previousWindowWidthRef.current = window.innerWidth;
        proximity.current = window.innerWidth / 15;
        fadeThreshold.current = proximity.current / 3;

        const resize = () => {
            canvas.width = window.innerWidth;
            const beforeAfterWidthRatio = window.innerWidth / previousWindowWidthRef.current;
            for (let i = 0; i < points.length; i++) {
                points[i].x *= beforeAfterWidthRatio;
            }
            proximity.current *= beforeAfterWidthRatio;
            previousWindowWidthRef.current = window.innerWidth;

            setNumPoints(window.innerHeight / 4);

            canvas.height = 0;
            canvas.height = document.documentElement.scrollHeight - document.getElementById('header')!.offsetHeight - 1;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#fff';
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };

        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        console.log(numPoints)
        const canvas = canvasRef.current!;
        points.length = 0;
        for (let i = 0; i < numPoints; i++) {
            const fx = Math.random() - 0.5;
            const fy = Math.random() - 0.5;
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                fx: fx,
                fy: fx,
                ogfx: fy,
                ogfy: fy,
                r: 0,
            });
        }
    }, [numPoints]);

    return <canvas ref={canvasRef} className='absolute z-[-10] w-screen' />;
}

type Point = {
    x: number;
    y: number;
    fx: number;
    fy: number;
    ogfx: number;
    ogfy: number;
    r: number;
};
