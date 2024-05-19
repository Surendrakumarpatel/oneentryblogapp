import Link from 'next/link'
import React from 'react'
import Article from './Article'
import { defineOneEntry } from 'oneentry';

const { Products, Blocks } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const Articles = async () => {

  const blogs = await Products.getProducts('en_US');

  const value = await Blocks.getBlocks('en_US', 0, 1);
 

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-6xl my-10'> 
        <span className='font-bold underline my-5'>Recent Articles</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
               blogs && blogs.map((blog:any)=> <Link key={blog.id} href={`/blog/${blog.id}`}><Article blog={blog}/></Link>)
            }
        </div>
    </div>
  )
}

export default Articles