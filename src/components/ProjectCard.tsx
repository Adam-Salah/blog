import { Project } from '@/interfaces';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useContext } from 'react';
import { LanguageContext } from '@/global/LanguageContext';

export default function ProjectCard(props: ProjectCardProps) {
    const language = useContext(LanguageContext);
    return (
        <Link href={'/' + language + '/projects/' + props.project.name} >
            <div className='outline-solid outline-2 outline-(--flavor) object-cover overflow-hidden hover:scale-103 cursor-pointer rounded-xl'>
                <div className='relative w-full h-full aspect-square'>
                    <ExportedImage src={props.project.src} alt={props.project.alt} className='p-[5%] object-cover' fill />
                </div>
            </div>
        </Link>
    );
}

interface ProjectCardProps {
    project: Project;
}
