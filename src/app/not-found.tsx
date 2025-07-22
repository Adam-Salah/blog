'use client'

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        switch (window.location.pathname.substring(0, 3)) {
            case '/fr':
                redirect('/fr');
            default:
                redirect('/');
        }
    }, []);
}
