import Link from 'next/link';
import { defineOneEntry } from 'oneentry';
import React from 'react'


const { Menus } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const Footer = async () => {
    const value = await Menus.getMenusByMarker('footer');

    const menus:any = value.pages;
 
    

  return (
    <footer className="text-black py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-4">
            {
              menus && menus.map((menu:any) => <li key={menu.id}><Link href={`/${menu.pageUrl === "home" ? "/" : menu.pageUrl}`}>{menu.pageUrl.toUpperCase()}</Link></li>)
            }
          </ul>
        </div>
        <div className="text-center mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-4">
            <li><a href="#" >TWITTER</a></li>
            <li><a href="#" >FACEBOOK</a></li>
            <li><a href="#" >INSTAGRAM</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">LEGAL</h3>
          <ul className="mt-4">
            <li><a href="#" >PRIVACY POLICY</a></li>
            <li><a href="#" >TERMS OF USE</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer