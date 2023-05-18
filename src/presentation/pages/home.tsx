import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import ProductItem from '../components/ProductItem'
import CategoryItem from '../components/CategoryItem'

export default function Home() {
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
    const categories = [
        {
            category_name: 'Electronics & Computers  hihih ihi ihihi ihihih ihih',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678844828/rapoly9vfvutjsy93whg.png'
        },
        {
            category_name: 'Clothing & shoes',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522609/xlpqcmsgdgv114xqqpab.png'
        },
        {
            category_name: 'Foods and drinks',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522589/kur4rkcotplxeethbfsg.png'
        },
        {
            category_name: 'Deals By Pet',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522624/zidabvzdiaacuvldmpfg.png'
        },
        {
            category_name: 'Health & wellness',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522649/wrzhfjvx78eoibumzex3.png'
        },
        {
            category_name: 'Home Decor',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522673/mq5qtglxn8tnqjkbsetj.png'
        },
        {
            category_name: 'Electronics & Computers',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678844828/rapoly9vfvutjsy93whg.png'
        },
        {
            category_name: 'Clothing & shoes',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522609/xlpqcmsgdgv114xqqpab.png'
        },
        {
            category_name: 'Foods and drinks',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522589/kur4rkcotplxeethbfsg.png'
        },
        {
            category_name: 'Deals By Pet',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522624/zidabvzdiaacuvldmpfg.png'
        },
        {
            category_name: 'Health & wellness',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522649/wrzhfjvx78eoibumzex3.png'
        },
        {
            category_name: 'Home Decor',
            category_image: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678522673/mq5qtglxn8tnqjkbsetj.png'
        },
    ]
    return (
        <div className="w-full h-full">
            <HomeCarousel />
            <div className='mt-3.5 grid grid-cols-6 gap-3'>
                {data.map((item, i) => {
                    return (
                        <ProductItem item={item} key={i} />
                    )
                })}
            </div>
            <div className="bg-white mt-5 p-3">
                <h1 className="text-2xl text-center font-medium">Categories</h1>
                <div className='mt-3 grid grid-cols-6 gap-3'>
                    {categories.map((item, i) => {
                        return (
                            <CategoryItem item={item} key={i} />
                        )
                    })}
                </div>
            </div>
            <div className='mt-5 grid grid-cols-6 gap-3'>
                {data.map((item, i) => {
                    return (
                        <ProductItem item={item} key={i} />
                    )
                })}
            </div>
            <div className='mt-3 grid grid-cols-6 gap-3'>
                {data.map((item, i) => {
                    return (
                        <ProductItem item={item} key={i} />
                    )
                })}
            </div>
            <div
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780917/emwqpmbve5rhw7revnt2.jpg")`
                }}
                className='w-full h-80 bg-cover my-5'
            >
            </div>
            <div className='mt-5 grid grid-cols-6 gap-3'>
                {data.map((item, i) => {
                    return (
                        <ProductItem item={item} key={i} />
                    )
                })}
            </div>
            <div className='mt-3 grid grid-cols-6 gap-3'>
                {data.map((item, i) => {
                    return (
                        <ProductItem item={item} key={i} />
                    )
                })}
            </div>
        </div>
    )
}
