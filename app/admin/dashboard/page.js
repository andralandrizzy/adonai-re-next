
import HeadIntro from '@/components/HeadIntro'
import PagesDetailsHero from '@/components/PagesDetailsHero'
import DashboardHeroBg from '@/public/img/dashboard_com.jpeg'

const page = () => {
    return (
        <>
            <section>
                <PagesDetailsHero ImageBg={DashboardHeroBg} text='Admin Dashboard' href="/" prev="home" current="dashboard" />
                <HeadIntro text={'Admin Dashboard'} desc={`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Culpa perspiciatis exercitationem debitis maxime et, 
            recusandae nam quisquam perferendis obcaecati dolorum quibusdam sed esse quo officia!`} />
            </section>
        </>
    )
}

export default page