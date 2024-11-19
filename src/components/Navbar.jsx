import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 pb-2 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='' ></img>
        <ul className='hidden md:flex items-start gap-5 front-medium font-medium'>
            <NavLink to='/'>
                <li className='py-1'>TRANG CHỦ</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='doctors'>
                <li className='py-1'>BÁC SĨ</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>GIỚI THIỆU</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>LIÊN HỆ</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
                    <img className='w-8 rounded-full' src={assets.profile_pic}  alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                        <div className='min-w-44 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=> navigate('myprofile')} className='hover:text-black cursor-poiter'>Thông tin</p>
                            <p onClick={()=> navigate('myapointments')} className='hover:text-black cursor-poiter'>Lịch khám của tôi</p>
                            <p onClick={()=> setToken(false)} className='hover:text-black cursor-poiter'>Đăng xuất</p>
                        </div>
                    </div>
                </div>
                :            
                <button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light md:block'>
                    TẠO TÀI KHOẢN
                </button>
            }

        </div>
    </div>
  )
}

export default Navbar