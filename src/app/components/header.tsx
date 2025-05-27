'use client';

export default function Header() {
    return (
        <div className='header sticky z-[100] top-0 flex p-5 bg-(--background) text-2xl' id='header'>
            <div className='header-logo m-auto p-5 text-[1.5em]'>
                <p>Adam Salah</p>
            </div>
            <div className='flex flex-auto justify-end m-auto gap-3'>
                <div className='p-5'>
                    <a>Blog</a>
                </div>
                <div className='p-5'>
                    <a>Projects</a>
                </div>
                <div className='p-5'>
                    <a>About</a>
                </div>
            </div>
        </div>
    );
}
