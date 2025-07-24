import { Project } from '@/interfaces';
import dynamic from 'next/dynamic';
import { projects } from '@/data/projects';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const Content = dynamic(() => import(`@/content/projects/${slug}.tsx`));
    return (
        <div className=''>
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
