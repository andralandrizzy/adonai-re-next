import Image from "next/image";
import Link from "next/link";

const TopCityListing = () => {
    const topCityProperties = [
        {
            id: '1',
            city: 'Atlanta',
            src: '/img/atl-min.jpeg',
        },
        {
            id: '2',
            city: 'Dallas',
            src: '/img/texas-min.jpg',
        },
        {
            id: '3',
            city: 'Los Angeles',
            src: '/img/lad-min.jpeg',
        },
        {
            id: '4',
            city: 'Miami',
            src: '/img/atl-min.jpeg',
        },
    ];
    return (
        <section className='w-[100vw] h-auto'>
            <div className="mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-0 justify-center items-center">
                {topCityProperties.map(city => (
                    <div key={city.id} className="md:w-[100%] relative md:h-[280px]">
                        <Image style={{ width: '100%', height: '280px' }} sizes="100vw" width={0} height={0} src={city.src} alt="property by city" />
                        <div className="overlay absolute top-100 bottom-8 text-center w-[100%] h-auto">
                            <Link className='bg-[#14288cae;] text-white px-[1.5rem]
                             py-[.6rem] rounded-full border-[1px] border-white' href="#"> {city.city} (14)</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopCityListing