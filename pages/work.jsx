import React from 'react'
import Hero from '@/Components/Hero'
import Portifolio from '@/Components/portifolio'

const work = () => {
  return (
    <div>
        <Hero heading={"My Work"} message={"This is some of my works travelling the world"} />
        <Portifolio />
    </div>
  )
}

export default work