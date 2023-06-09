import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full  h-[400px] lg:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://st2.depositphotos.com/3243153/11614/i/950/depositphotos_116145368-stock-photo-little-kids-playing-with-toy.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                        <h2 className=' text-xl lg:text-6xl  font-bold'>We make your children happier with the <span className='text-orange-500'>best toys</span></h2>
                        <p>Toys Murt shop is a store that specializes in selling toys and games designed specifically for children.</p>

                        <div>
                            <button className="btn btn-error px-8 mr-5">Shop Now</button> 
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle text-orange-500">❮</a>
                    <a href="#slide2" className="btn btn-circle text-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/646044526/photo/cute-little-blond-kid-boy-playing-with-lots-toy-cars.jpg?s=170667a&w=0&k=20&c=YzOsslexkH2UkO-nTk6fyXAMNtQToo3zF3UNZkq5iBM=" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                    <h2 className='text-xl lg:text-6xl  font-bold'>We make your children happier with the <span className='text-orange-500'>best toys</span></h2>
                        <p>Toys Murt shop is a store that specializes in selling toys and games designed specifically for children.</p>

                        <div>
                            <button className="btn btn-error px-8 mr-5">Shop Now</button> 
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle text-orange-500">❮</a>
                    <a href="#slide3" className="btn btn-circle text-orange-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/playing-with-toy-cars-and-trucks.jpg?h=370&w=660&la=en&hash=38E2F025E3A905B9C5CE1949DF08EE06" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                    <h2 className='text-xl lg:text-6xl  font-bold'>We make your children happier with the <span className='text-orange-500'>best toys</span></h2>
                        <p>Toys Murt shop is a store that specializes in selling toys and games designed specifically for children.</p>

                        <div>
                            <button className="btn btn-error px-8 mr-5">Shop Now</button> 
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle text-orange-500">❮</a>
                    <a href="#slide4" className="btn btn-circle text-orange-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://previews.123rf.com/images/oksun70/oksun701412/oksun70141200201/34615889-enfant-gar%C3%A7on-bambin-de-jouer-avec-la-voiture-de-jouet-%C3%A0-l-int%C3%A9rieur.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                    <h2 className='text-xl lg:text-6xl  font-bold'>We make your children happier with the <span className='text-orange-500'>best toys</span></h2>
                        <p>Toys Murt shop is a store that specializes in selling toys and games designed specifically for children.</p>

                        <div>
                            <button className="btn btn-error px-8 mr-5">Shop Now</button> 
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle text-orange-500">❮</a>
                    <a href="#slide1" className="btn btn-circle text-orange-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;