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
                {children}
            </body >
        </html >
    );
}
