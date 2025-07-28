export interface Project {
    id: number;
    name: string;
    src: string;
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
        src: '/resources/images/projects/transit_map_card_thumbnail.png',
        alt: 'transit map project',
        title_en: 'Montréal transit map',
        title_fr: 'Carte des bus de Montréal (pas encore traduit)',
        author_en: 'Garutako',
        author_fr: 'Garutako',
    },
    {
        id: 1,
        name: 'transit-map',
        src: '/resources/images/projects/transit_map_card_thumbnail.png',
        alt: 'transit map project',
        title_en: 'Montréal transit map',
        title_fr: 'Carte des bus de Montréal (pas encore traduit)',
        author_en: 'Garutako',
        author_fr: 'Garutako',
    },
];
