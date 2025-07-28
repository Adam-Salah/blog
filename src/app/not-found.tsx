'use client';

import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
    const language = usePathname().substring(1, 3);
    useEffect(() => {
        switch (language) {
            case 'fr':
                redirect('/fr');
            case 'en':
                redirect('/en');
            default:
                redirect('/en');
        }
    }, []);
}
