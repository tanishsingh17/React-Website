import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Leftside = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
        <div className='p-6'>
            <h3 className='text-6xl font-bold mb-6'>
                Prospective <br/> <span className='text-gray-600'>Customers</span> <br />Segmentation
            </h3>
            <p className='text-xl w-[90%] font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae esse error molestias omnis, modi vel itaque id tempora numquam vitae!</p>
        </div>
        <div className='text-8xl'>
            <i class="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default Leftside