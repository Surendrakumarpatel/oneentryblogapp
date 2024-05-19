import Image from 'next/image'
import { defineOneEntry } from 'oneentry';
import React from 'react'


const { Products } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const SingleArticle = async ({params}:any) => {
    const blogId = params.id;
    const value = await Products.getProductById(blogId, 'en_US');
 
    const title = value?.attributeValues?.blogtitle?.value?.header;
    const thumbnail = value?.attributeValues?.blogthumbnail?.value?.downloadLink;
    const blogContent =  value?.attributeValues?.blogcontent?.value?.htmlValue;

    return (
        <div className='w-full border-b mb-5'>
            <div className='md:w-[50%] w-full m-auto'>
                <Image
                    src={thumbnail}
                    alt="blog-image"
                    width={500}
                    height={500}
                    className='w-full object-contain my-5'
                />
                <h1 className='text-3xl font-medium text-center'>{title}</h1>
                <br />
                <div className='my-5'>
                        <p className='m-0' dangerouslySetInnerHTML={{__html:blogContent}}/>
                </div>
            </div>
        </div>
    )
}

export default SingleArticle