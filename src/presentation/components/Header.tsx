import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import Logo from '../../assets/BigOnline.png'

export default function Header() {
    return (
        <div className={`w-full h-20 bg-primary flex justify-center fixed top-0 left-0 right-0 z-50`}>
            <div className="flex flex-row w-[1200px] justify-between items-center m-auto">
                <button>
                    <img
                        className='w-20 h-20'
                        src={Logo}
                    />
                </button>
                <div className="flex flex-row flex-1 items-center p-0.5 bg-white rounded-sm mx-10">
                    <input
                        placeholder='Search...'
                        className='flex-1 px-3 text-base outline-none'
                    />
                    <button className="text-white bg-primary px-4 py-2 text-xl rounded-sm"><AiOutlineSearch /></button>
                </div>
                <button className="text-base text-white p-3.5">
                    Account
                </button>
                <div className="w-[0.5px] h-6 bg-slate-500" />
                <button className="text-white text-3xl p-3">
                    <IoCartOutline />
                </button>
            </div>
        </div>
    )
}
