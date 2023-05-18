import React from 'react'

export default function CategoryItem({ item }) {
    return (
        <div className='flex flex-col items-center'>
            <img
                src={`${item.category_image}`}
                alt=""
                className='w-20 h-20'
            />
            <p>{item.category_name}</p>
        </div>
    )
}
