'use client';

import '@/app/globals.css';
import Header from '@/components/Header';
import Network from '@/components/Network';
import { LanguageContext } from '@/global/LanguageContext';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LanguageContext.Provider value='fr'>
            <Header />
            <Network />
            <div className='flex justify-center items-center'>
                <div
                    id='page-container'
                    className='w-full max-w-[960px] ml-3 mr-3 pt-5 pb-15 pl-[5%] pr-[5%]'
                >
                    {children}
                </div>
            </div>
        </LanguageContext.Provider>
    );
}
