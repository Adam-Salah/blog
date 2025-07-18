import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'Mon Blog',
    description: 'Le blog à Adam :)',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Header />
                <div className='flex justify-center items-center'>
                    <div className='w-full max-w-[960px] ml-3 mr-3 pt-5 pb-15 pl-[5%] pr-[5%] mask-x-from-95% bg-opacity-50 backdrop-blur-md rounded-xl'>
                        {children}
                    </div>
                </div >
            </body >
        </html >
    );
}
