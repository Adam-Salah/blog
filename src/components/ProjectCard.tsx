import { Project } from '@/interfaces';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Link href={props.project.href}>
            <div className='outline-solid outline-1 outline-(--flavor) object-cover overflow-hidden hover:scale-103 cursor-pointer'>
                <div className='relative w-full h-full aspect-square'>
                        <ExportedImage src={props.project.src} alt={props.project.alt} className='p-[5%] object-cover' fill/>
                </div>
            </div>
        </Link>
    );
}

interface ProjectCardProps {
    project: Project;
}
