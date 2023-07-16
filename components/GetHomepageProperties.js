import Image from "next/image"
import Link from "next/link"
import Container from "./Container"
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'



const GetHomepageProperties = ({ properties }) => {
    // console.log(properties);

    return (
        <Container>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] justify-center w-full">
                {properties.slice(1, 10).map((content) => (
                    <div key={content.id} className="relative w-[100%] h-auto">
                        <Link href={'/'}>

                            {/* <div className="w-[100%] h-auto] rounded-md">
                                {content.imageUrl[0] && <Image className="w-full h-[290px] rounded-md" width={860} height={290} alt="property listings" src={content.imageUrl[0]} />}
                            </div> */}
                            <div className="w-[100%] h-auto] rounded-md">
                                {<Image className="w-full h-[290px] rounded-md" width={860} height={290} alt="property listings" src={content.imageUrl} />}
                            </div>
                            <div className="relative w-[94%] right-0 left-0 top-[-8%] bottom-[0%] rounded-md flex-col items-center bg-neutral-50 mx-auto p-[25px] shadow-md">
                                <h3 className="price text-2xl font-bold py-[1rem]"><span className="underline underline-offset-8">${content.price.toLocaleString("en-US")}</span></h3>
                                <p className="address py-[1.5rem]">
                                    {/* <span className="font-bold">{content.location.full_location.substr(0, content.location.full_location.indexOf(','))}</span><br /> */}
                                    <span className="font-bold">{content.address.street}</span><br />
                                    <span className="city text-[1.5rem] font-bold">{content.address.city}, </span>
                                    <span className="country text-[1.5rem] font-bold">{content.address.state}, </span>
                                    <span className="country text-[1.5rem] font-bold">{content.address.postalCode}</span>
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link className="text-[0.854rem]" href={'#'}><i className="text-3xl leading-[0px]"><FaBed /></i> <br /> <span>{content.bedrooms} Beds </span></Link>
                                    <Link className="text-[0.854rem]" href={'#'}><i className="text-3xl leading-[0px]"><FaBath /></i> <br /> <span>{content.bathrooms} Baths </span></Link>
                                    <Link className="text-[0.854rem]" href={'#'}><i className="text-3xl leading-[0px]"><FaRulerCombined /></i> <br /> <span>{content.sqft} <br /> sqft</span></Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div >
        </Container >
    )
}

export default GetHomepageProperties