import React from 'react'
import Hero from '@/Components/Hero'
import Contact from '@/Components/Contact'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message="Submit the form below for more work and quotes" />
        <Contact />
    </div>
  )
}

export default contact