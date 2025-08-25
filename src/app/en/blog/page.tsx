'use client'

import PostCardContainer from "@/components/PostCardContainer";

export default function Page() {
    return (
        <div className='mx-auto max-w-200'>
            <PostCardContainer numOfPosts={0} />
        </div>
    );
}