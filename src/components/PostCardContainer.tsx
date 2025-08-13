'use client'

import { posts } from '@/data/posts';
import PostCard from "./PostCard";

export default function PostCardContainer() {
    return (
        <div className="mt-5 gap-10 mx-auto max-w-200">
            {
                posts?.map((post) => {
                    return <PostCard key={post.id} post={post}></PostCard>
                }).reverse()
            }
        </div>
    );
}