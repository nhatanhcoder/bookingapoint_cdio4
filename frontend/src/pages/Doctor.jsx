import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctors } from "../assets/assets";

const Doctor = () => {

    const {speciality} = useParams()
    const [filterDoc, setFilterDoc] = useState([])

    const {doctors} = useContext(AppContext)

    const applyFilter = () =>{
      if(speciality){
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
      } else{
        setFilterDoc(doctors)
      }
    }

    useEffect(()=>{
      applyFilter()
    }, [doctors,speciality])
    return (
      <div>
        <p className="text-gray-600">z</p>
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 font-medium">
          <div className="flex flex-col whitespace-nowrap gap-4 text-sm text-gray-600">
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ đa khoa</div>
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ phụ khoa</div>
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ da liễu</div>
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ nhi khoa</div>
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ thần kinh</div>
              <div className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 boder boder-gray-300 rounded transition-all cursor-pointer`} >Bác sĩ tiêu hóa</div>
          </div>

          <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50 w-full h-60 object-cover object-top' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                    </div>
                </div>
               ))
            }
          </div>
        </div>
      </div> 
    )
};

export default Doctor;
