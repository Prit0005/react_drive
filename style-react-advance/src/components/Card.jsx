import React from 'react'
import { data } from "../content.js";

export default function Card() {
    const { card } = data;
    return (
        <div className=' w-[100%] flex justify-around' >
            {card.map((item, i) => {
                return (
                    <div className=''>
                        <img src={item.card_img} alt="" />
                        <p className='w-[60%] font-light'>{item.card_name}</p>
                        <p>{item.card_price}</p>
                    </div>
                )
            })}


        </div>
    )
}
