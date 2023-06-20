import HeadIntro from "@/components/HeadIntro"
import PagesDetailsHero from "@/components/PagesDetailsHero"
import PropertiesHeroBg from '@/public/img/city_com.jpeg'
import PropertiesPageListing from "@/components/PropertiesPageListing"


export const metadata = {
    title: 'Adonai Real Estate | Properties',
    description: 'ALL listing properties',
}

const page = () => {
    return (
        <>
            <PagesDetailsHero ImageBg={PropertiesHeroBg} text='properties' href="/" prev="home" current="properties" />
            <HeadIntro text={'All Properties'} desc={`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Culpa perspiciatis exercitationem debitis maxime et, 
            recusandae nam quisquam perferendis obcaecati dolorum quibusdam sed esse quo officia!`} />
            <div className="py-[3rem]">
                <PropertiesPageListing />
            </div>
        </>
    )
}

export default page