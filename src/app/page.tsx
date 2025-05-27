import Network from './components/network';

export default function Home() {
    return (
        <div className='home text-xl'>
            <Network />
            <div className='ml-[calc(15%*var(--small-mult))] mr-[calc(15%*var(--small-mult))] pt-15 pb-15 pl-[5%] pr-[5%] mask-x-from-95% mask-y-from-99% bg-[#ffffff33] backdrop-blur-md rounded-xl'>
               <p> Salut! Moi c'est Adam. Voici mon site web. Je travaille activement dessus donc restez branchés :)</p>
            </div>
        </div>
    );
}
