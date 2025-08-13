import dynamic from 'next/dynamic';
import { Project, projects } from '@/data/projects';
import ExportedImage from 'next-image-export-optimizer';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const Content = dynamic(() => import(`@/content/fr/projects/${slug}.tsx`));
    const project = projects.filter((project) => {
        if (project.name === slug) return project;
    })[0];
    return (
        <div className='mx-auto max-w-200'>
            <h1>{project.title_fr}</h1>
            <h2>{project.author_fr}</h2>
            <br />
            <div className='flex mx-auto overflow-hidden object-cover sm:px-10'>
                <div className='relative h-70 aspect-video w-full'>
                    <ExportedImage src={project.src} alt={project.alt} className='object-cover mx-auto' fill />
                </div>
            </div>
            <br />
            <Content />
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project: Project) => ({
        slug: project.name,
    }));
}

export const dynamicParams = false;
