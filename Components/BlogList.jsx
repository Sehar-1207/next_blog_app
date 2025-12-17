'use client'
import { blog_data } from '@/Asserts/Asserts'
import React, { useState } from 'react'
import Link from 'next/link'
import BlogItem from './BlogItem'
const BlogList = () => {
    const[menu,setMenu]=useState("All")
  return (
    <div>
      <div className='flex justify-center gap-6 my-10 '>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-2 px-4 rounded-sm ':""}>All</button>
        <button  onClick={()=>setMenu('technology')} className={menu==="technology"?'bg-black text-white py-2 px-4 rounded-sm ':""} >Technology</button>   
        <button  onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-2 px-4 rounded-sm ':""} >StartUp</button>   
        <button  onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-2 px-4 rounded-sm ':""} >Lifestyle</button>   
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
               {blog_data.filter((item) => menu === "All" ? true : item.category.toLowerCase() === menu.toLowerCase()).map((item,index)=>{
                return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
               })}
      </div>


    </div>
  )
}

export default BlogList
