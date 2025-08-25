'use client';

import { posts } from '@/data/posts';
import PostCard from './PostCard';

export default function PostCardContainer(props: { numOfPosts: number }) {
    return (
        <div className='mt-5 gap-10'>
            {posts
                .toReversed()
                ?.slice(props.numOfPosts)
                .map((post) => {
                    return <PostCard key={post.id} post={post}></PostCard>;
                })
                .reverse()}
        </div>
    );
}
