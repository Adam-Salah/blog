'use client';

import '@/app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LanguageContext } from '@/global/LanguageContext';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LanguageContext.Provider value='en'>
            {/* <Header /> */}
            <div className='flex justify-center items-center'>
                <div id='page-container' className='w-full ml-3 mr-3 pt-5 pb-15 px-5'>
                    {children}
                </div>
            </div>
        </LanguageContext.Provider>
    );
}
