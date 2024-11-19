import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'></h1>
        <p className='sm:w1/3 text-center text-sm'></p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm:py-0'>
            {doctors.slice(0,10).map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50 w-full h-60 object-cover' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button>more</button>
    </div>
  )
}

export default TopDoctors