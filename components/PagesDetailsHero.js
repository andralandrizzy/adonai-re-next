import HeroBreadCrumbs from "./HeroBreadCrumbs"
import PropertiesHeroBg from '@/public/img/blogpage_com.jpeg';



const PagesDetailsHero = (props) => {
    return (
        <div className='max-w-full h-[70vh] w-full m-auto'>
            <div
                style={{
                    backgroundImage: `url(${props.ImageBg.src})`
                }}
                className='w-full h-[70vh] relative bg-center bg-cover duration-500'
            >

                <div className="absolute max-w-full h-[70vh] w-full bg-[#0d164c7b]">

                </div>
                <div
                    className="absolute text-center flex flex-col h-[65vh] top-[45%] bottom-[45%] px-[1.3rem] w-full h-auto">
                    <h1 className='uppercase text-[1.8rem] lg:text-[3em] pt-[1rem] mx-auto font-bold text-[#ffffffb4] text-opacity-2'>
                        {props.text}
                    </h1>
                    {/* breadcrumb gose here */}
                    <HeroBreadCrumbs href={props.href} prev={props.prev} current={props.current} />
                </div>
            </div>
        </div >
    );
}


export default PagesDetailsHero