import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function ProductItem({ item }) {
    return (
        <Link to='/product-detail'>
            <div className="bg-white relative drop-shadow-md">
                <img src={`${item.product_image}`} alt="" />
                <div className="absolute top-0 right-0 bg-red-600 px-1">
                    <p className="text-white text-sm">20%</p>
                </div>
                <div className="p-2">
                    <h1 className="font-medium line-clamp-2 h-[48px]">
                        {item.product_name}
                    </h1>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center text-yellow-400">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className="text-xs text-gray-500">(400)</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xl text-red-500 font-medium">400$</p>
                        <p className="text-xs text-gray-500">100 sold</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
