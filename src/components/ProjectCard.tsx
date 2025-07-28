import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useContext } from 'react';
import { LanguageContext } from '@/global/LanguageContext';
import { Project } from '@/data/projects';

export default function ProjectCard(props: ProjectCardProps) {
    const language = useContext(LanguageContext);
    return (
        <Link href={'/' + language + '/projects/' + props.project.name} >
            <div className='p-[5%] relative w-full h-full aspect-square outline-solid outline-2 outline-(--flavor) overflow-hidden hover:scale-103 cursor-pointer'>
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
