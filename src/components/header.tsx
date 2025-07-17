'use client';

import { Page } from "@/enums";
import { Dispatch, SetStateAction } from "react";

export default function Header(props: HeaderProps) {
    return (
        <div className='header sticky z-[100] top-[0] flex p-5 bg-(--background) text-lg' id='header'>
            <div className='header-logo m-auto p-5 text-[1.5em]' onClick={() => props.setCurrentPage(Page.Home)}>
                <a className='cursor-pointer'>Adam Salah</a>
            </div>
            <div className='flex flex-auto flex-wrap justify-end m-auto gap-3'>
                <div className='p-5 cursor-pointer' onClick={() => props.setCurrentPage(Page.Blog)}>
                    <a>Blog</a>
                </div>
                <div className='p-5 cursor-pointer' onClick={() => props.setCurrentPage(Page.Projects)}>
                    <a>Projects</a>
                </div>
                <div className='p-5 cursor-pointer' onClick={() => props.setCurrentPage(Page.About)}>
                    <a>About</a>
                </div>
            </div>
        </div>
    );
}

interface HeaderProps {
    setCurrentPage: Dispatch<SetStateAction<Page | undefined>>;
}