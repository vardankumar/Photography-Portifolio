import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg'
import IgImg2 from '../public/ig-img-2.jpeg'
import IgImg3 from '../public/ig-img-3.jpeg'
import IgImg4 from '../public/ig-img-4.jpeg'
import IgImg5 from '../public/ig-img-5.jpeg'
import IgImg6 from '../public/ig-img-6.jpeg'
import Instsgramimg from './Instsgramimg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instsgramimg socialImg={IgImg1} />
            <Instsgramimg socialImg={IgImg2} />
            <Instsgramimg socialImg={IgImg3} />
            <Instsgramimg socialImg={IgImg4} />
            <Instsgramimg socialImg={IgImg5} />
            <Instsgramimg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram