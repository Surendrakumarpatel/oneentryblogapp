import React from 'react'
import Link from 'next/link'
import ContactButton from './ContactButton'
import { defineOneEntry } from 'oneentry';

const { Pages } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const Navbar = async () => {

    const pages = await Pages.getPages('en_US');
 

    return (
        <div className='flex items-center justify-between max-w-6xl mx-auto h-20'>
             <div className='md:mx-0 mx-2'>
                <h1 className='text-2xl font-bold'>Blog App</h1>
             </div>
              {/* menu items */}
             <div className='md:block hidden'>
                    <div className='flex items-center gap-8'>
                        {
                            pages && pages.map((page:any)=> <Link key={page.id} href={`/${page.pageUrl === "home" ? "/" : page.pageUrl}`}>{page?.localizeInfos?.menuTitle}</Link>)
                        }
                    </div>
             </div>
             <ContactButton/>
        </div>
    )
}

export default Navbar