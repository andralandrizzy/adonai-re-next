
import Agents from '@/components/Agents'
import ButtonCustom from '@/components/ButtonCustom'
import CallToAction from '@/components/CallToAction'
import FunFacts from '@/components/FunFacts'
import HomePropertiesListing from '@/components/HomePropertiesListing'
import SectionHeadText from '@/components/SectionHeadText'
import TopCityListing from '@/components/TopCityListing'
import Hero from '@/components/navbar/Hero'
import { SessionProvider } from 'next-auth/react'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <SectionHeadText subTitle="Recents Post" title='Recent Properties Listing' />
      <HomePropertiesListing />
      <ButtonCustom text={'See more properties'} href={'/properties'} />
      <TopCityListing />
      <SectionHeadText subTitle="Agents" title='meet our agents' />
      <Agents />
      <SectionHeadText subTitle="fun facts" title='We Bring Dream Homes To Reality' />
      <FunFacts />
    </>
  )
}
