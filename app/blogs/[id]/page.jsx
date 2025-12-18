'use client'
import Image from 'next/image';
import { asserts, blog_data } from '@/Asserts/Asserts';
// 1. Import 'use' from React
import React, { useEffect, useState, use } from 'react';
import Footer from '@/Components/footer'

const Page = ({ params }) => {
  const resolvedParams = use(params);
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(resolvedParams.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [resolvedParams.id]); 
  if (!data) return null;

  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Image src={asserts.logo} width={100} alt='Logo' className='w-32 sm:w-auto' />
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000] bg-white'>
            Get Started <Image src={asserts.arrow} alt='' />
          </button>
        </div>
        
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-175 mx-auto'>
            {data.title}
          </h1>
          <Image src={data.author_img} width={60} height={60} alt='author' className='mx-auto mt-6 border border-white rounded-full' />
          <p className='mt-1 pb-2 text-lg max-w-185 mx-auto'>
            {data.author}
          </p>
        </div>
      </div>

      <div className='mx-5 max-w-200 md:mx-auto mt-25 mb-10'>
        <Image src={data.image} width={1280} height={720} alt='blog' className='border-4 border-white' />
        
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self Reflection and Goal Settings</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius molestiae dignissimos, hic recusandae perferendis beatae voluptatibus, officiis veritatis aspernatur maiores ratione. Fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 2: Execution and Strategy</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius molestiae dignissimos, hic recusandae perferendis beatae voluptatibus, officiis veritatis aspernatur maiores ratione. Fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 3: Final Review</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius molestiae dignissimos, hic recusandae perferendis beatae voluptatibus, officiis veritatis aspernatur maiores ratione. Fuga.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusions:</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius molestiae dignissimos, hic recusandae perferendis beatae voluptatibus, officiis veritatis aspernatur maiores ratione. Fuga.</p>

        <div className='my-24'>
          <p className='text-black font-semibold my-4'>Share this article on social media.</p>
          <div className='flex gap-3'>
            <Image src={asserts.facebook_icon} width={40} alt='Facebook' />
            <Image src={asserts.twitter_icon} width={40} alt='Twitter' />
            <Image src={asserts.googleplus_icon} width={40} alt='LinkedIn' />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;