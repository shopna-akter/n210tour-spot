// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper z-10"
            >
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Discover Your Dream Home</h1>
                        <p className="text-lg mt-4 text-center lg:text-left ">Explore a wide range of properties and find your perfect home today. <span className='hidden lg:block'> Whether you are searching for a cozy apartment, a spacious house, or a luxurious villa, we have options to suit every lifestyle and budget.</span></p>
                    </div>
                    <img src="https://i.ibb.co/8Y1xLK0/slider-1.jpg" alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Find Your Ideal Space</h1>
                        <p className="text-lg mt-4 text-center lg:text-left">Discover the perfect space for your business or personal needs. <span className='hidden lg:block'>From modern office spaces to versatile retail locations, we offer a variety of options tailored to your requirements. Let us help you find the ideal space to thrive.</span></p>
                    </div>
                    <img src="https://i.ibb.co/hf1dFjg/slider-2.jpg" alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Invest in Your Future</h1>
                        <p className="text-lg mt-4 text-center lg:text-left">Explore investment opportunities and grow your portfolio. <span className='hidden lg:block'>Whether you are a seasoned investor or new to real estate investing, we provide access to a diverse range of properties that offer excellent potential for long-term growth and profitability.</span></p>
                    </div>
                    <img src="https://i.ibb.co/1fjSj9h/slider-3.jpg" alt="" className="w-full" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}