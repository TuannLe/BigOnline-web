import React from 'react'
import Slider from "react-slick";

export default function HomeCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: '30px' }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780767/buonxaz1xpy1udyn6gsy.jpg"
                        alt="carousel-image"
                        className='w-full h-full bg-cover'
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780806/jniwjxytr2yif72cu4mw.jpg"
                        alt="carousel-image"
                        className='w-full h-full'
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1681177966/cjidvddsja3pw6xpiddr.jpg"
                        alt="carousel-image"
                        className='w-full h-full'
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780851/yvdrnoav7353rv23jcqy.jpg"
                        alt="carousel-image"
                        className='w-full h-full'
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780868/vdnklaytsnex2jpam3df.jpg"
                        alt="carousel-image"
                        className='w-full h-full'
                    />
                </div>
            </Slider>
        </div>
    )
}
