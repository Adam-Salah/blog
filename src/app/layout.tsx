import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import { Red_Hat_Mono } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Mon Blog',
    description: 'Le blog à Adam :)',
};

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
        <html lang='en'>
            <body className={baseFont.className}>
                <Header />
                <div className='flex justify-center items-center'>
                    <div
                        id='page-container'
                        className='w-full max-w-[960px] ml-3 mr-3 pt-5 pb-15 pl-[5%] pr-[5%] mask-x-from-95% bg-opacity-50 backdrop-blur-md rounded-xl'
                    >
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
