'use client'

import { posts } from '@/data/posts';
import PostCard from "./PostCard";

export default function PostCardContainer() {
    return (
        <div className="mt-5 grid grid-cols-1 auto-cols-max gap-15">
            {
                posts?.map((post) => {
                    return <PostCard key={post.id} post={post}></PostCard>
                }).reverse()
            }
        </div>
    );
}