'use client';

import React, { useRef, useEffect, useState } from 'react';
import useMouse from '../hooks/useMouse';
import { MouseInfo } from '../types';

export default function Network() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // const mouseRef = useRef<MouseInfo>(useMouse());
    const previousWindowWidthRef = useRef<number>(0);
    const proximity = useRef<number>(0);

    const fps = 240;
    const numPoints = 150;
    const fadeThreshold = 100;
    // const forceRadius = 200;
    const speed = 25;

    const [points, setPoints] = useState<Point[]>([]);

    // TODO
    // turn into hook
    let lastUpdate = useRef<number>(0);

    //compute physics
    const physics = (dt: number) => {
        // get canvas
        const canvas = canvasRef.current!;
        points.forEach((p) => {
            // new position
            p.x += p.fx * speed * dt;
            p.y += p.fy * speed * dt;

            // bounds loop
            if (p.x < 0) {
                p.x = canvas.width;
            } else if (p.x > canvas.width) {
                p.x = 0;
            }
            if (p.y < 0) {
                p.y = canvas.height;
            } else if (p.y > canvas.height) {
                p.y = 0;
            }

            // random movement
            let random = Math.random() - 0.5;
            if (random < 0.05 || random > -0.05) {
                p.fx += random * dt;
            }
            random = Math.random() - 0.5;
            if (random < 0.05 || random > -0.05) {
                p.fy += random * dt;
            }

            // deceleration
            let ogfx = Math.abs(p.ogfx);
            if (p.fx > -ogfx || p.fx < ogfx) {
                p.fx *= 0.9;
                if (p.fx < ogfx && p.fx > -ogfx) {
                    p.fx = Math.sign(p.fx) * ogfx;
                }
            }
            let ogfy = Math.abs(p.ogfy);
            if (p.fy > -ogfy || p.fy < ogfy) {
                p.fy *= 0.9;
                if (p.fy < ogfy && p.fy > -ogfy) {
                    p.fy = Math.sign(p.fy) * ogfy;
                }
            }
        });
    };

    // render draw
    const render = (dt: number) => {
        // get canvas & context
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        // fill background
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw points
        ctx.fillStyle = '#000';
        points.forEach((p) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fill();
        });

        // draw lines
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const p1 = points[i];
                const p2 = points[j];

                // shortest distance
                let dx = Math.abs(p1.x - p2.x);
                let dy = Math.abs(p1.y - p2.y);

                if (dx > canvas.width / 2) {
                    dx = canvas.width - dx;
                }
                if (dy > canvas.height / 2) {
                    dy = canvas.height - dy;
                }

                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist <= proximity.current + fadeThreshold) {
                    let alpha = 0.2;
                    if (dist > proximity.current) {
                        alpha = 0.2 * (1 - (dist - proximity.current) / fadeThreshold);
                    }
                    ctx.strokeStyle = 'rgba(0,0,0,' + alpha + ')';

                    let x1 = p1.x;
                    let y1 = p1.y;
                    let x2 = p2.x;
                    let y2 = p2.y;

                    // horizontal edge
                    if (Math.abs(x1 - x2) > canvas.width / 2) {
                        if (x1 > x2) {
                            x1 -= canvas.width;
                        } else {
                            x2 -= canvas.width;
                        }
                    }
                    // vertical edge
                    if (Math.abs(y1 - y2) > canvas.height / 2) {
                        if (y1 > y2) {
                            y1 -= canvas.height;
                        } else {
                            y2 -= canvas.height;
                        }
                    }

                    // draw and wrap if need be
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

    // render 30fps
    useEffect(() => {
        lastUpdate.current = Date.now();

        const interval = setInterval(() => {
            let dt = (Date.now() - lastUpdate.current) / 1000;
            lastUpdate.current = Date.now();
            physics(dt);
            render(dt);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, []);

    // resize
    useEffect(() => {
        const canvas = canvasRef.current!;

        previousWindowWidthRef.current = window.innerWidth;
        proximity.current = window.innerWidth / 15;

        const resize = () => {
            // width
            canvas.width = window.innerWidth;
            let beforeAfterWidthRatio = window.innerWidth / previousWindowWidthRef.current;
            points.forEach((p) => {
                p.x *= beforeAfterWidthRatio;
            });
            proximity.current *= beforeAfterWidthRatio;

            previousWindowWidthRef.current = window.innerWidth;

            // height
            canvas.height = 0;
            canvas.height = document.documentElement.scrollHeight;
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

    //create points
    useEffect(() => {
        const canvas = canvasRef.current!;
        for (let i = 0; i < numPoints; i++) {
            let fx = Math.random() - 0.5;
            let fy = Math.random() - 0.5;
            let p: Point = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                fx: fx,
                fy: fx,
                ogfx: fy,
                ogfy: fy,
                r: 0,
            };
            points.push(p);
        }
    }, []);

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
