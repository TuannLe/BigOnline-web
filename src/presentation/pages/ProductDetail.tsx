import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IoAddOutline, IoRemoveSharp } from "react-icons/io5";
import { MdAddShoppingCart } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import ProductItem from '../components/ProductItem'
import Pagination from '../components/Pagination';

export default function ProductDetail() {
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const data = [
        {
            product_name: 'Apple iPhone 14 Pro Max Apple iPhone 14 Pro Max',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682071/vunejyv5tciiw8zgrkf4.webp',
            price: '2000'
        },
        {
            product_name: 'Apple iPhone 14 Pro',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678681703/idmlk0bskmocwgfy8bft.webp',
            price: '5000'
        },
        {
            product_name: 'Apple iPhone 11',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682613/tybqhjyu2h7jjs5aqcsp.webp',
            price: '1000'
        },
        {
            product_name: 'Apple iPhone 14 Pro Max',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682715/omspp9o0xiwa6qtvxyii.webp',
            price: '2000'
        },
        {
            product_name: 'Apple iPhone 14 Pro',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682316/vwoqcsv2byws0kiyuv4y.webp',
            price: '5000'
        },
        {
            product_name: 'Apple iPhone 11',
            product_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682253/ahv6lbz8rgmgz1hirznb.webp',
            price: '1000'
        },
    ]
    return (
        <div>
            <div className='flex space-x-3 bg-white p-3'>
                <div className='w-5/12 bg-yellow-300'>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1678682071/vunejyv5tciiw8zgrkf4.webp"
                        alt=""
                        className='w-full h-full'
                    />
                </div>
                <div className='w-7/12'>
                    <h1 className='text-2xl font-medium line-clamp-2'>Áo thun Local Brand RAGLAN IN CAO SU NỔI Hogoto shop , Áo thun unisex nam nữ form rộng oversize chất liệu 100% Cotton</h1>
                    <div className='flex text-base mt-1 mb-3 '>
                        <div className='flex items-center text-price border-gray-300 border-r pr-3'>
                            <span className='font-medium mr-1'>4.9</span>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className='flex items-center space-x-1 border-r px-3'>
                            <p className='font-medium'>1.6k</p>
                            <span className='text-gray-600'>Ratings</span>
                        </div>
                        <div className='flex items-center space-x-1 px-3'>
                            <p className='font-medium'>5.4k</p>
                            <span className='text-gray-600'>Sold</span>
                        </div>
                    </div>
                    <div className='bg-gray-1 p-3 space-y-2'>
                        <h1 className='text-4xl font-bold'>16.490.000</h1>
                        <div className='flex items-center text-base space-x-5'>
                            <p className='text-gray-500 line-through '>24.990.000</p>
                            <p className='bg-price text-white px-1 rounded'>-34%</p>
                        </div>
                    </div>
                    <div className='text-base my-3 space-y-1'>
                        <p className='font-medium'>Options:</p>
                        <div className='space-x-2'>
                            <button className='px-3 py-1.5 border border-gray-300 rounded '>
                                Black
                            </button>
                            <button className='px-3 py-1.5 border border-primary rounded'>
                                White
                            </button>
                        </div>
                    </div>
                    <div className='text-base space-y-1'>
                        <p className='font-medium'>Quantity:</p>
                        <div className='flex space-x-5 items-center'>
                            <div className='flex'>
                                <button
                                    className='text-white p-2 bg-primary rounded'
                                    onClick={() => {
                                        count > 1 && setCount(count - 1);
                                    }}
                                >
                                    <IoRemoveSharp />
                                </button>
                                <input
                                    type="text"
                                    className='bg-gray-1 w-10 text-center'
                                    onChange={(e) => setCount(Number(e.target.value))}
                                    value={count}
                                />
                                <button
                                    className='text-white p-2 bg-primary rounded'
                                    onClick={() => setCount(count + 1)}
                                >
                                    <IoAddOutline />
                                </button>
                            </div>
                            <p>481024 pieces available</p>
                        </div>
                    </div>
                    <div className="flex mt-8 space-x-3">
                        <button className='text-primary text-base flex items-center border border-primary bg-primary-100 px-7 py-3 rounded'>
                            <MdAddShoppingCart className='text-lg mr-2' />
                            Add to cart
                        </button>
                        <button className='text-white text-base bg-primary px-7 py-3 rounded'>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-white p-3 mt-3 space-y-2'>
                <h1 className='text-xl font-medium'>Related Products</h1>
                <div className='grid grid-cols-6 gap-3'>
                    {data.map((item, i) => {
                        return (
                            <ProductItem item={item} key={i} />
                        )
                    })}
                </div>
            </div>
            <div className='bg-white p-3 mt-3 space-y-2'>
                <h1 className='text-xl font-medium'>Product Ratings</h1>
                <div className='flex items-center text-base p-5 bg-[#fffbf8] border border-[#f9ede5] space-x-16'>
                    <div className='space-y-1 text-price'>
                        <p className='text-2xl font-medium'>
                            4.8
                            <span className='text-base font-normal'> out of 5</span>
                        </p>
                        <div className='flex text-xl'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="space-x-3">
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            All
                        </button>
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            5 Star (102)
                        </button>
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            4 Star (92)
                        </button>
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            3 Star (72)
                        </button>
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            2 Star (32)
                        </button>
                        <button
                            className='w-28 py-1 bg-white border border-gray-200 rounded'
                        >
                            1 Star (2)
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex space-x-2 border-b py-3 border-slate-100'>
                        <HiUserCircle className='text-6xl text-primary-100' />
                        <div>
                            <p className='font-medium'>UserName</p>
                            <div className='flex text-price my-1'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className="text-xs text-gray-400">2022-12-21</p>
                            <p className='mt-3'>Mất nước có thể do những nguyên nhân không liên quan đến bệnh lý có từ trước. Ví dụ như do nhiệt, hoạt động quá mức, uống không đủ nước, đổ mồ hôi quá mức hoặc tác dụng phụ của thuốc.</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 py-3 border-b border-slate-100'>
                        <HiUserCircle className='text-6xl text-primary-100' />
                        <div>
                            <p className='font-medium'>UserName</p>
                            <div className='flex text-price my-1'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className="text-xs text-gray-400">2022-12-21</p>
                            <p className='mt-3'>Mất nước có thể do những nguyên nhân không liên quan đến bệnh lý có từ trước. Ví dụ như do nhiệt, hoạt động quá mức, uống không đủ nước, đổ mồ hôi quá mức hoặc tác dụng phụ của thuốc.</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 py-3 border-b border-slate-100'>
                        <HiUserCircle className='text-6xl text-primary-100' />
                        <div>
                            <p className='font-medium'>UserName</p>
                            <div className='flex text-price my-1'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className="text-xs text-gray-400">2022-12-21</p>
                            <p className='mt-3'>Mất nước có thể do những nguyên nhân không liên quan đến bệnh lý có từ trước. Ví dụ như do nhiệt, hoạt động quá mức, uống không đủ nước, đổ mồ hôi quá mức hoặc tác dụng phụ của thuốc.</p>
                        </div>
                    </div>
                    <Pagination
                        totalProducts={10}
                        productsPerPage={5}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div >
    )
}
