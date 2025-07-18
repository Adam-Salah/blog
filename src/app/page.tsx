import Hbr from "@/components/mini/hbr";

export default function Page() {
    return (
        <>
            <p> Hello and welcome to my blog!</p>
            <br />
            <p> I am Adam, a programmer based in Montréal.</p>
            <p> I am currently pursuing a software engineering degree at ÉTS</p>
            <p> Oh, and I'm also a member at my university's video game club, Conjure.</p>
            <br />
            <p>I enjoy exploring different technologies and learning about every domain. </p>
            <p>Here is what I'm most familiar with: </p>
            <br />
            <h1 className='text-xl'><b>Web technologies</b></h1>
            <Hbr />
            <p>Yes you heard that right! Our dearest World Wide Web is the tool I favor for personal projects.</p>
            <p>The Web allows me to showcase my projects easily while keeping their structure simple and reusable.</p>
            <p>
                I am proficient with the basics, such as HTML, Javascript (though I prefer Typescript) and CSS, but where I shine best is with
                React!
            </p>
            <p>I generally use NextJS as the framework and deploy as a static site on Github</p>
            <p>I used these technologies to build this website. I think I might have spent too much time on the background animations though... math and physics can get confusing (I still love them though {'<'}3)</p>

            <div className='sm:pl-10 sm:pr-10 sm:pt-5 sm:pb-5'>
                <img src='/resources/projects/images/transit_map_card_thumbnail.png' alt='Map of Montréal. There are dots on the map to represent buses. One dot is selected. A box displays basic information on the bus, such as line number, bus ID, speed, occupancy and last update time.' className='pb-3' />
                <div className='pl-10 pr-10'>
                    <figcaption className='text-[0.8rem] text-center text-gray-500'>
                        Here's a little project I'm working on. It's a map of every active bus in Montréal! Usually maps will display only the
                        buses you select so I thought: "Why not have all of them at once". I don't plan on adding routing features, this project
                        is for fun. I like the idea of having a general overview of the city and seeing the buses move in real time like
                        little ants :P
                    </figcaption>
                </div>
            </div>
            <br />
            <br />
            <p>This website is still in construction. It kinda sucks right now... But fret not! I will add more over the next few days ;</p>
        </>
    );
}