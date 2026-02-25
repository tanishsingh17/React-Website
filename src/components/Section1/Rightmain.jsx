import React from 'react'

const Rightmain = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
            <h2 className='bg-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-2xl'>{props.id +1}</h2>
            <div>
                <p className='text-shadow-10xs text-lg leading-normal text-white mb-10'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita doloremque dolore nisi!
                </p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium py-2 px-6 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.arrowcolor}} className='text-white font-medium py-2 px-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Rightmain