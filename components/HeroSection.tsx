import Image from 'next/image'
import React from 'react'

const HeroSection = ({pages}:{pages:any}) => {
  const data = pages && pages.find((page:any)=> page.pageUrl === "home")?.attributeValues;
  
  return (
    <div className='flex md:flex-row flex-col items-center max-w-6xl mx-auto my-10 gap-8'>
      <div>
        <Image
          src={data?.bannerimage?.value[0]?.downloadLink}
          alt="image"
          width={600}
          height={600}
        />
      </div>
      <div className='flex-1 flex flex-col gap-5'>
        <h1 className='md:text-4xl text-2xl font-bold' dangerouslySetInnerHTML={{__html:data?.title?.value[0]?.htmlValue}}/> 
        <p dangerouslySetInnerHTML={{__html:data.description?.value[0]?.htmlValue}}/>
      </div>
    </div>
  )
}

export default HeroSection