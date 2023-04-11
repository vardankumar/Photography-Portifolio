import Image from 'next/image'
import { Raleway } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/Components/Hero'
import Slider from '@/Components/Slider'
import { sliderData } from '@/Components/SliderData'
import Instagram from '@/Components/Instagram'

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Photography Next App</title>
    </Head>
    <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive' />
    <Slider slides={sliderData} />
    <Instagram />
    </>
  )
}
