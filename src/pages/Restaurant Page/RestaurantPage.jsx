import React from 'react'
import Restaurant from '../../components/Restaurant/Restaurant'

export default function RestaurantPage() {
    return (
        <div bg className='bg-[#FF5521]'>
            <div className='flex'>
                <img src="/cup1.svg" alt="cup1" className='ml-7 mr-60' />
                <img src="/cup2.svg" className='ml-96 mr-96 pb-5 -mt-7' alt="cup1" />
                <img src="/cup3.svg" alt="cup1" className='ml-10' />
            </div>

            <div className='font-archivo text-center text-white font-bold text-5xl  '>FEATURED RESTAURANTS</div>
            <img src="/line_2.svg" alt="line" className='mx-auto' />
            <Restaurant />

            <div className='flex '>
            <img src="/cup4.svg" alt="cup1" className='ml-10 mr-80 pb-14' />
            <img src="/cup5.svg" alt="cup1" className='mr-80' />
            <img src="/cup6.svg" alt="cup1" className='ml-96 pb-14' />
            </div>
            
        </div>
    )
}
