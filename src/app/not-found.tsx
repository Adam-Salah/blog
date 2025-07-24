'use client'

import { LanguageContext } from '@/global/LanguageContext';
import { redirect } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function NotFound() {
    const language = useContext(LanguageContext);
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