export interface Project {
    id: number;
    name: string;
    card_src: string;
    banner_src: string;
    alt: string;
    title_en: string;
    title_fr: string;
    author_en: string;
    author_fr: string;
}

export const projects = [
    {
        id: 0,
        name: 'transit-map',
        card_src: '/resources/images/projects/transit_map_card_thumbnail.png',
        banner_src: '/resources/images/projects/transit_map_card_thumbnail.png',
        alt: 'transit map project',
        title_en: 'Montréal transit map',
        title_fr: 'Carte des bus de Montréal (pas encore traduit)',
        author_en: 'Garutako',
        author_fr: 'Garutako',
    },
    {
        id: 1,
        name: 'blog-site',
        card_src: '/resources/images/projects/blog_site_card_thumbnail.png',
        banner_src: '/resources/images/projects/blog_site_card_thumbnail.png',
        alt: 'blog site project',
        title_en: 'My blog',
        title_fr: 'Mon Blog',
        author_en: 'Garutako',
        author_fr: 'Garutako',
    },
];
