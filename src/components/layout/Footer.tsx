import React from 'react'
import { MapPin } from 'lucide-react';

import { Phone } from 'lucide-react';
import { Printer } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';



const Footer = () => {
  return (
    <div className='p-10'>
     <div className='p-10 flex items-center justify-center border-y border-[#CDCDE0]'>
    <div className='w-full flex  items-center'>
        <img src="/logo.png" alt=""  height={50} width={150}/>
    </div>  
    <div className='w-full flex flex-col gap-2 text-xs text-[#CDCDE0]'>
        <p className='flex  gap-2 items-center'>
            <span>
                <MapPin className='text-[#CDCDE0] h-5 w-5 font-bold'/>
            </span>
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </p>
            <div className='flex gap-20'>
            <p className='flex  gap-2 items-center'>
            <span>
                <Phone className='text-[#CDCDE0] h-5 w-5 font-bold'/>
            </span>
            (123) 456-7890
            </p>

            <p className='flex gap-2 items-center'>
            <span>
                <Printer className='text-[#CDCDE0] h-5 w-5 font-bold'/>
            </span>
            (123) 456-7890
            </p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
                <span className='text-[#CDCDE0] opacity-70'>Social Media</span>
                < Facebook className='h-5 w-5 font-bold'/>
                <Twitter className='h-5 w-5 font-bold'/>
                <Linkedin className='h-5 w-5 font-bold'/>
                <Youtube className='h-5 w-5 font-bold'/>
                <Instagram className='h-5 w-5 font-bold'/>

            </div>
   </div>  
    </div> 
   <div className='flex justify-between  py-3'>
   <div className='flex gap-4 text-xs text-white font-semibold'>
<a href="#" className='hover:text-primary'>ABOUT US</a>
<a href="#" className='hover:text-primary'>CONTACT US</a>
<a href="#" className='hover:text-primary'>EVENTS</a>
<a href="#" className='hover:text-primary'>PRIVACY POLICY</a>
    </div>
    <p className='text-white text-sm'>Copyright &copy; {new Date().getFullYear()}. AguraEvents.com</p>
   </div>
    </div>
  )
}

export default Footer
