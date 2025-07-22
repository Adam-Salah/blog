export function clamp(val: number, min: number, max: number) {
    return val <= min ? min : val >= max ? max : val;
}

export const lerp = (a: number, b: number, t: number) => {
    return a * (1 - t) + b * t;
};
