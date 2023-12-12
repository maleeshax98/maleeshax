import Image from 'next/image'
import React from 'react'

export default function ServiceCard({ img, title, desc }) {
  return (
    <div className='card p-4 rounded-md max-w-[450px]'>
        <Image src={img} width={30} height={30} alt='' />
        <h1 className='font-semibold text-lg text-white mt-[15px]'>{title}</h1>
        <p className='text-[#727272] mt-[10px]'>{desc}</p>
    </div>
  )
}
