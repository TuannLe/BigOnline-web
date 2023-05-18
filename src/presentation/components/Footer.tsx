import React from 'react'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className={`w-full h-50 bg-primary mt-3`}>
            <div className="flex flex-row w-[1200px] space-x-3 m-auto py-5">
                <div className="flex-1 text-white">
                    <h1 className="text-2xl font-medium mb-1">Big Online</h1>
                    <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                    <div className='mt-3 space-y-1.5'>
                        <div className='flex flex-row items-center'>
                            <span className='min-w-[30px] text-xl'><IoLocationSharp /></span>
                            <p>470 Trần Đại Nghĩa, Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <span className='min-w-[30px] text-xl'><IoMail /></span>
                            <p>big_online@gmail.com</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <span className='min-w-[30px] text-xl'><BsTelephoneFill /></span>
                            <p>+84968604438</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-white">
                    <h1 className="text-2xl font-medium mb-1">About Big Online</h1>
                    <div className="flex flex-col justify-start space-y-1">
                        <p>About us</p>
                        <p>BigOnline blog</p>
                        <p>Privacy Policy</p>
                        <p>Seller centre</p>
                        <p>Flash deal</p>
                        <p>Media contract</p>
                    </div>
                </div>
                <div className="flex-1 text-white">
                    <h1 className="text-2xl font-medium mb-1">Payment</h1>
                    <div className="grid grid-cols-4 gap-2">
                        <img
                            src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                        <img
                            src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                        <img
                            src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                        <img
                            src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                        <img
                            src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                        <img
                            src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
                            alt=""
                            className='w-13 h-7 bg-white p-1 rounded'
                        />
                    </div>
                </div>
                <div className="flex-1 text-white">
                    <h1 className="text-2xl font-medium mb-1">Follow us</h1>
                    <div className="flex">
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                            alt=""
                            className='w-20 h-20'
                        />
                        <div className='ml-1 space-y-0.5'>
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                                alt=""
                                className='w-25 h-10'
                            />
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                                alt=""
                                className='w-25 h-10'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
