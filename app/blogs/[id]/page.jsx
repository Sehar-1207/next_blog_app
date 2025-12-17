'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const page=({params})=> {
    const[data, setData]=useState(null);
    const fetchBlogData =()=>{
         for(let i=0;i<blog_data.length; i++){
            if(Number(params.id)===blog_data[i].id){
             setData(blog_data[i]);
             break;
             console.log(blog_data[i]);
            }
         }
    }

    useEffect(()=>{
          fetchBlogData();
    },[])
  return (
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between item-center'>
<Image  src={asserts.logo} width={100} alt='' className='w-32.5 sm:w-auto '  />
<button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]  '>
    Get Started <Image src={asserts.arrow} alt='' />
</button>
        </div>
      {/* {params.id} */}
    </div>
  )
}

export default page
