import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useContext } from 'react';
import { LanguageContext } from '@/global/LanguageContext';
import { Post } from '@/data/posts';

export default function PostCard(props: PostCardProps) {
    const language = useContext(LanguageContext);
    let title;
    let description;
    if (language == 'fr') {
        title = props.post.title_fr;
        description = props.post.description_fr;
    } else {
        title = props.post.title_en;
        description = props.post.description_en;
    }
    return (
        <Link href={'/' + language + '/blog/' + props.post.name} className='text-sm sm:text-lg'>
            <div className='relative w-full overflow-hidden cursor-pointer pb-10'>
                <h2 className='text-base underline pb-2'>{title}</h2>
                <p className='text-[80%] pb-2'>{props.post.date}</p>
                <p className='text-[80%]'>{description}</p>
            </div>
        </Link>
    );
}

interface PostCardProps {
    post: Post;
}
