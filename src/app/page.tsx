'use client'

import Header from "@/components/Header";
import { Page } from "@/enums";
import { ReactNode, useEffect, useState } from "react";
import Home from "@/app/pages/Home";
import Projects from "@/app/pages/Projects";
import { useParams } from "next/navigation";

export default function App() {
    const params = useParams<{ page: string }>()
    
    const [pages, setPages] = useState<Map<Page, ReactNode>>(new Map<Page, ReactNode>());
    const [currentPage, setCurrentPage] = useState<Page>();

    pages.set(Page.Home, <Home />);
    //pages.set(Page.Blog, <Blog />);
    pages.set(Page.Projects, <Projects />);
    //pages.set(Page.About, <About />);

    useEffect(() => {
        const redirect = location.hash as Page;
        console.log(redirect);
    }, []);

    useEffect(() => {
        if (currentPage) {
            if (currentPage !== Page.Home) location.pathname = currentPage.toString();
            else location.pathname = '';
        }
    }, [currentPage])

    return (
        <>
            <Header setCurrentPage={setCurrentPage} />
            <div className='flex justify-center items-center'>
                <div className='w-full max-w-[960px] ml-3 mr-3 pt-5 pb-15 pl-[5%] pr-[5%] mask-x-from-95% bg-opacity-50 backdrop-blur-md rounded-xl'>
                    {currentPage ? pages.get(currentPage) : pages.get(Page.Home)}
                </div>
            </div >
        </>
    );
}