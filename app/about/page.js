import Agents from "@/components/Agents"
import FunFacts from "@/components/FunFacts"
import HeadIntro from "@/components/HeadIntro"
import PagesDetailsHero from "@/components/PagesDetailsHero"
import AboutHeroBg from '@/public/img/abou_com.jpeg'

export const metadata = {
    title: 'Adonai Real estate | About Us',
    description: 'Lean more about what we do',
}

const page = () => {
    return (
        <>
            <PagesDetailsHero ImageBg={AboutHeroBg} text='about us' href="/" prev="home" current="About" />
            <HeadIntro text={'Our history'} desc={`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Culpa perspiciatis exercitationem debitis maxime et, 
            recusandae nam quisquam perferendis obcaecati dolorum quibusdam sed esse quo officia!`} />
            <FunFacts />
            <HeadIntro text={'The Team'} desc={`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Culpa perspiciatis exercitationem debitis maxime et,`} />
            <Agents />
        </>
    )
}

export default page