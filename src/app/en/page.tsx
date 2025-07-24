'use client';

import Banner from '@/components/Banner';
import Hbr from '@/components/mini/Hbr';

export default function Page() {
    return (
        <>
            <Banner name='garu' speed={1} height={4}></Banner>
            <Hbr size={3}></Hbr>
        </>
    );
}
