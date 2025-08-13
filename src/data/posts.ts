export interface Post {
    id: number;
    name: string;
    src: string;
    alt: string;
    title_en: string;
    title_fr: string;
    date: string;
    description_en: string;
    description_fr: string;
}

export const posts = [
    {
        id: 0,
        name: 'welcome-site',
        src: '/resources/images/posts/welcome-site-banner.png',
        alt: 'image of a smiling text character',
        title_en: 'Welcome to my blog',
        title_fr: 'Bienvenue sur mon blog',
        date: '28-07-2025',
        description_en: 'This is my blog! In this post I detail the purpose of this website as well as my process to create it :)',
        description_fr: "Voici mon blog! Dans cet article, je détaille l'objectif du site ainsi que les étapes qui ont permis sa création",
    },
    {
        id: 1,
        name: 'welcome-site',
        src: '/resources/images/posts/welcome-site-banner.png',
        alt: 'image of a smiling text character',
        title_en: 'Welcome to my blog',
        title_fr: 'Bienvenue sur mon blog',
        date: '28-07-2025',
        description_en: 'This is my blog! In this post I detail the purpose of this website as well as my process to create it :)',
        description_fr: "Voici mon blog! Dans cet article, je détaille l'objectif du site ainsi que les étapes qui ont permis sa création",
    },
];
