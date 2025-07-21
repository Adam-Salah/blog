'use client';

export default function Hbr(props: { size: number }) {
    return (
        <div>
            {[...Array(props.size).keys()].map((i) => (
                <br key={i} />
            ))}
        </div>
    );
}
