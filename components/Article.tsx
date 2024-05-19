import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Article = ({blog}:{blog:any}) => {
  
  const title = blog?.attributeValues?.blogtitle?.value?.header;
  const thumbnail = blog?.attributeValues?.blogthumbnail?.value?.downloadLink;
  return (
    <div className='flex flex-col gap-3 border border-gray-400 p-2'>
        <div className='cursor-pointer'>
            <Image
            src={thumbnail}
            alt="blog-image"
            width={300}
            height={300}
            className='w-full'
            />
        </div>
        <div className='text-xl font-bold border-t border-b border-black py-2'>
            <h1>{title}</h1>
        </div>
         <Button className='float-right my-2' variant={'secondary'}>Continue reading <ArrowRight/></Button>
    </div>
  )
}

export default Article