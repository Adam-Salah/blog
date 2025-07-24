'use client'

import '@/app/globals.css';
import { LanguageContext } from '@/global/LanguageContext';
import { Red_Hat_Mono } from 'next/font/google';

const baseFont = Red_Hat_Mono({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <title>garutako.com</title>
            </head>
            <body className={baseFont.className}>
                <LanguageContext.Provider value='en'>
                    {children}
                </LanguageContext.Provider>
            </body>
        </html>
    );
}
