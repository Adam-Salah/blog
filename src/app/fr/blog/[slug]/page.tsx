import dynamic from 'next/dynamic';
import { Post, posts } from '@/data/posts';
import ExportedImage from 'next-image-export-optimizer';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const Content = dynamic(() => import(`@/content/fr/posts/${slug}.tsx`));
    const post = posts.filter((post) => {
        if (post.name === slug) return post;
    })[0];
    return (
        <div>
            <p>{post.date}</p>
            <h1>{post.title_fr}</h1>
            <br />
            <div className='flex mx-auto overflow-hidden object-cover sm:px-10'>
                <div className='relative h-70 aspect-video w-full'>
                    <ExportedImage src={post.src} alt={post.alt} className='object-cover mx-auto' fill />
                </div>
            </div>
            <br />
            <Content />
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post: Post) => ({
        slug: post.name,
    }));
}

export const dynamicParams = false;
