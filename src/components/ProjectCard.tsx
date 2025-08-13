import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useContext } from 'react';
import { LanguageContext } from '@/global/LanguageContext';
import { Project } from '@/data/projects';

export default function ProjectCard(props: ProjectCardProps) {
    const language = useContext(LanguageContext);
    return (
        <Link href={'/' + language + '/projects/' + props.project.name} >
            <div className='relative h-auto max-w-full aspect-square overflow-hidden cursor-pointer'>
                <div className='relative h-full'>
                    <ExportedImage src={props.project.src} alt={props.project.alt} className='object-cover' fill />
                </div>
            </div>
        </Link>
    );
}

interface ProjectCardProps {
    project: Project;
}
