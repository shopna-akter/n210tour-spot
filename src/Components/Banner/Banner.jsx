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
                    <img src="https://i.ibb.co/ys7p9n2/pexels-photo-24377.jpg" alt="" className="w-full h-[500px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Find Your Ideal Space</h1>
                        <p className="text-lg mt-4 text-center lg:text-left">Discover the perfect space for your business or personal needs. <span className='hidden lg:block'>From modern office spaces to versatile retail locations, we offer a variety of options tailored to your requirements. Let us help you find the ideal space to thrive.</span></p>
                    </div>
                    <img src="https://i.ibb.co/51V7Y93/paragliding-in-mountains.jpg" alt="" className="w-full h-[500px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Invest in Your Future</h1>
                        <p className="text-lg mt-4 text-center lg:text-left">Explore investment opportunities and grow your portfolio. <span className='hidden lg:block'>Whether you are a seasoned investor or new to real estate investing, we provide access to a diverse range of properties that offer excellent potential for long-term growth and profitability.</span></p>
                    </div>
                    <img src="https://i.ibb.co/gP6BHpc/lake-moraine.jpg" alt="" className="w-full h-[500px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold text-center lg:text-left">Invest in Your Future</h1>
                        <p className="text-lg mt-4 text-center lg:text-left">Explore investment opportunities and grow your portfolio. <span className='hidden lg:block'>Whether you are a seasoned investor or new to real estate investing, we provide access to a diverse range of properties that offer excellent potential for long-term growth and profitability.</span></p>
                    </div>
                    <img src="https://i.ibb.co/ykjFn22/Whats-App-Image-2024-04-26-at-22-02-01-866c03ad.jpg" alt="" className="w-full h-[500px]" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}