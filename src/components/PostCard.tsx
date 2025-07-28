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
        <Link href={'/' + language + '/blog/' + props.post.name} className='px-[5%] text-sm sm:text-lg'>
            <div className='relative w-full outline-solid outline-2 outline-(--flavor) overflow-hidden cursor-pointer h-75 sm:h-125'>
                <div className='relative h-[50%]'>
                    <ExportedImage src={props.post.src} alt={props.post.alt} className=' object-cover overflow-hidden' fill />
                </div>
                <div className='px-[5%] pb-[5%] pt-[3%]'>
                    <p className='text-[80%] pb-[2%]'>{props.post.date}</p>
                    <h2 className='text-base pb-[3%]'>{title}</h2>
                    <div className='overflow-ellipsis line-clamp-4'>
                        <p className='text-[80%]'>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

interface PostCardProps {
    post: Post;
}
