import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-5 h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://thumbs.dreamstime.com/b/lovely-blond-kid-boy-playing-lots-toy-cars-indoor-happy-healthy-child-having-fun-pandemic-coronavirus-quarantine-190645040.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mr-5">Discover more</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle text-blue-500">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://thumbs.dreamstime.com/b/kids-play-toy-cars-children-playing-car-toys-white-room-little-boy-truck-vehicle-transportation-game-kid-parking-147218185.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mr-5">Discover more</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/playing-with-toy-cars-and-trucks.jpg?h=370&w=660&la=en&hash=38E2F025E3A905B9C5CE1949DF08EE06" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mr-5">Discover more</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://previews.123rf.com/images/oksun70/oksun701412/oksun70141200201/34615889-enfant-gar%C3%A7on-bambin-de-jouer-avec-la-voiture-de-jouet-%C3%A0-l-int%C3%A9rieur.jpg"className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mr-5">Discover more</button>
                            <button className="btn btn-outline ">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;