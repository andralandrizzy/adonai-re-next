import Image from "next/image";
import Container from "./Container"
import SectionHeadText from "./SectionHeadText"
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'
import Link from "next/link";



const GetProperties = ({ properties }) => {
    // const properties = [
    //     {
    //         id: '1',
    //         price: `$ ${(3254650).toLocaleString("en-US")}`,
    //         street: '458 w Monroe rd',
    //         city: 'Phoenix',
    //         State: 'AZ',
    //         zip: '85031',
    //         bed: '3 beds',
    //         bath: '2.5 baths',
    //         sqft: '2060 sqft',
    //         country: 'USA',
    //         src: '/img/beach_house-min.jpeg',
    //     },
    //     {
    //         id: '2',
    //         price: `$ ${(3964650).toLocaleString("en-US")}`,
    //         street: '455 Dirksen st',
    //         city: 'Washington DC',
    //         State: 'TN',
    //         zip: '20510',
    //         bed: '3 beds',
    //         bath: '4 baths',
    //         sqft: '2230 sqft',
    //         country: 'USA',
    //         src: '/img/lake_view-min.jpeg',
    //     },
    //     {
    //         id: '3',
    //         price: `$ ${(6113556).toLocaleString("en-US")}`,
    //         street: '664 South Avondale ave',
    //         city: 'Miami',
    //         State: 'FL',
    //         zip: '33158',
    //         bed: '5 beds',
    //         bath: '6.1 baths',
    //         sqft: '2430 sqft',
    //         country: 'USA',
    //         src: '/img/lightsnow-min.jpeg',
    //     },
    //     {
    //         id: '4',
    //         price: `$ ${(5213556).toLocaleString("en-US")}`,
    //         street: '6544 South beach collins ave',
    //         city: 'Miami',
    //         State: 'FL',
    //         zip: '33128',
    //         bed: '5 beds',
    //         bath: '6baths',
    //         sqft: '2410 sqft',
    //         country: 'USA',
    //         src: '/img/treehouse-min.jpg',
    //     },
    //     {
    //         id: '5',
    //         price: `$ ${(6113556).toLocaleString("en-US")}`,
    //         street: '664 South Avondale ave',
    //         city: 'Miami',
    //         State: 'FL',
    //         zip: '33158',
    //         bed: '5 beds',
    //         bath: '6.1 baths',
    //         sqft: '2430 sqft',
    //         country: 'USA',
    //         src: '/img/lightsnow-min.jpeg',
    //     },
    //     {
    //         id: '6',
    //         price: `$ ${(3254650).toLocaleString("en-US")}`,
    //         street: '458 w Monroe rd',
    //         city: 'Phoenix',
    //         State: 'AZ',
    //         zip: '85031',
    //         bed: '3 beds',
    //         bath: '2.5 baths',
    //         sqft: '2060 sqft',
    //         country: 'USA',
    //         src: '/img/beach_house-min.jpeg',
    //     },
    // ];

    return (
        <section className="w-full h-auto">
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] justify-center w-full">
                    {properties.map((content) => (
                        <div key={content.id} className="relative w-[100%] h-auto">
                            <Link href={'/'}>
                                <div className="w-[100%] h-auto] rounded-md">
                                    {content.photos[0] && <Image className="w-full h-[290px] rounded-md" width={860} height={290} alt="property listings" src={content.photos[0]} />}
                                </div>
                                <div className="relative w-[94%] right-0 left-0 top-[-8%] bottom-[0%] rounded-md flex-col items-center bg-neutral-50 mx-auto p-[25px] shadow-md">
                                    <h3 className="price text-2xl font-bold py-[1rem]"><span className="underline underline-offset-8">{content.price.formatted_price}</span></h3>
                                    <p className="address py-[1.5rem]">
                                        <span className="font-bold">{content.location.full_location.substr(0, content.location.full_location.indexOf(','))}</span><br />
                                        <span className="city text-[1.5rem] font-bold">{content.location.city}, </span>
                                        <span className="country text-[1.5rem] font-bold">{content.state_code}</span>
                                        <span className="country text-[1.5rem] font-bold">{content.location.zip_code}</span>
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link className="text-[0.854rem]" href={'/'}><i className="text-3xl leading-[0px]"><FaBed /></i> <br /> <span>{content.bedrooms_formatted} </span></Link>
                                        <Link className="text-[0.854rem]" href={'/'}><i className="text-3xl leading-[0px]"><FaBath /></i> <br /> <span>{content.bathrooms_formatted} </span></Link>
                                        <Link className="text-[0.854rem]" href={'/'}><i className="text-3xl leading-[0px]"><FaRulerCombined /></i> <br /> <span>{content.floor_space_formatted}</span></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div >
            </Container >
        </section>
    )
}

export default GetProperties