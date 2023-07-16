import PagesDetailsHero from "@/components/PagesDetailsHero"
import BlogHeroBg from '@/public/img/blogpage_com.jpeg'


const page = () => {
  return (
    <>
      <PagesDetailsHero ImageBg={BlogHeroBg} text='Our Recent Blogs' href="/" prev="home" current="blogs" />
    </>
  )
}

export default page