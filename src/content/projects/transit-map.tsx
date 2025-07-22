import A from '@/components/mini/A';
import ExportedImage from 'next-image-export-optimizer';

export default function Content() {
    return (
        <div>
            <h1>Transit Map</h1>
            <h2>By me</h2>
            <br />
            <div className='flex mx-auto overflow-hidden object-cover px-10'>
                <div className='relative h-70 aspect-video w-full'>
                    <ExportedImage
                        src={'/resources/images/projects/transit_map_card_thumbnail.png'}
                        alt={
                            'Image of the city of Montréal. Many dots are scattered along the roads. A widget on the right displays information on a selected dot'
                        }
                        className='object-cover mx-auto'
                        fill
                    />
                </div>
            </div>
            <br />
            <p>
                This app displays a real-time map of the Montréal Transport Society (STM) vehicle fleet. It was my first{' '}
                <A href='https://nextjs.org/'>Next.js</A> project and my introduction to <A href='https://react.dev/'>React</A> state management.
            </p>
            <br />
            <p>
                The data I used comes from the <A href='https://www.stm.info/en/about/developers'>STM's open data APIs</A>. Since the API allows
                10,000 requests/day, I set poll rate to 10 seconds. This allows me to refresh data as often as possible without passing that
                threshold. The app then serves that data to the clients when requested. Currently, the client sends a request every 30 seconds, but
                this will be altered depending on performance. I might even use a different method to serve the data.
            </p>
            <br />
            <p>
                The most challenging part of working with this API was figuring out how to work with the{' '}
                <A href='https://gtfs.org/documentation/realtime/reference/'>GTFS Real-Time</A> specification. Transit companies all around the world
                use it to structure their API data to keep everything coherent between systems. Bus position data is encoded using Protocol Buffers
                (or Protobuf). The data structure is laid out in a <A href='https://gtfs.org/documentation/realtime/proto/'>gtfs-realtime.proto</A>{' '}
                file. For this project I chose to use the <A href='https://github.com/MobilityData/gtfs-realtime-bindings'>gtfs-realtime-bindings</A>{' '}
                library, which provides pre-generated JavaScript/TypeScript bindings for GTFS Realtime.
            </p>
            <br />
            <p>
                For the map, I used the <A href='https://openlayers.org/'>OpenLayers</A> library with{' '}
                <A href='https://www.openstreetmap.org'>OpenStreetMap</A> tiles as both technologies free and well documented, which is perfect for an
                introductory project like this one. I render marker directly on the map's canvas and use mouse events to detect interactions. The
                available data on a bus is displayed on a floating panel.
            </p>
            <br />
            <p>
                With the core of the application and it's basic UI finished, I am satisfied with this project. I do not have a server to host it on at the moment, so when I do I might revamp the project. I might also add more features such as displaying bus routes and schedules.
            </p>
        </div>
    );
}
