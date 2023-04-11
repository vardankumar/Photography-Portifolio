import React from 'react'
import Image from 'next/image'

const portifolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl' >Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4 '>
            <div className='h-full w-full col-span-3 md:col-span-2'>
                <Image src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='/' layout='responsive' width={671} height={451} />
            </div>
            <div className='w-fullh-full'>
                <Image src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" width={215} height={217} layout='responsive' style={{objectFit: "cover"}} />
                <Image src='https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" width={215} height={217} layout='responsive' style={{objectFit: "cover"}} />
                <Image src='https://plus.unsplash.com/premium_photo-1669223469455-b7b734c838f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" width={215} height={217} layout='responsive' style={{objectFit: "cover"}} />
                <Image src='https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" width={215} height={217} layout='responsive' style={{objectFit: "cover"}} />
            </div>
        </div>
    </div>
  )
}

export default portifolio