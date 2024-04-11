import React from 'react';
import { data } from "../content.js";

export default function Hero() {
    const { hero } = data;
    return (
        <section>
            <div>
                {hero.map((item, i) => (
                    <img className='w-[100%]' key={`hero-img-${i}`} src={item.hero_sec_img} alt="" />
                ))}
            </div>

            <div >
                {hero.map((item, i) => (
                    <div className='text-white  flex flex-col' key={`hero-title-${i} `}>
                        <h1 className='m-10 text-6xl w-[40%] text absolute top-[40%] left-20 bottom-0' >{item.title}</h1>
                        <p className='m-10 text-2xl w-[40%] absolute top-[60%] left-20 bottom-0 '>{item.subtitle}</p>
                    </div>
                ))}
            </div>
            <button class="m-10 bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded absolute left-20 bottom-10 ">
                Shopping Now
            </button>
        </section>
    )
}
