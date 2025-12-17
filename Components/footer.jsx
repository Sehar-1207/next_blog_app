import React from 'react'
import Image from 'next/image'
import { asserts } from '@/Asserts/Asserts'

function Footer() {
  return (
    // 'items-center' (with an S) centers children vertically
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-black py-5 items-center'>
      
      <Image src={asserts.logo} alt='' width={60} className='invert' />
      
      {/* 'text-center' ensures the text stays centered on mobile when stacked */}
      <p className='text-sm text-white text-center'>
        All rights reserved. Copyright @bloggers
      </p>

      <div className='flex gap-2'>
        <Image src={asserts.facebook_icon} alt='' width={40} />
        <Image src={asserts.twitter_icon} alt='' width={40} />
        <Image src={asserts.googleplus_icon} alt='' width={40} />
      </div>

    </div>
  )
}

export default Footer