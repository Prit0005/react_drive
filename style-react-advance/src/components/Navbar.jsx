import React from 'react';
import { data } from "../content.js";

export default function Navbar() {
    const { nav } = data;
    return (
        <nav className='w-100% flex justify-between items-center p-5'>

            <div className=' '>
                {nav.map((item, i) => (
                    <img key={i} src={item.img} alt="" />
                ))}
            </div>


            <div className=' '>
                {nav.map((item, i) => (
                    <a key={i} href="#" className='mx-2 hover:text-blue-600'>{item.link}</a>
                ))}
            </div>


            <div className=''>
                {nav.map((item, i) => (
                    <img key={i} src={item.icons} alt="" />
                ))}
            </div>
        </nav>
    );
}
