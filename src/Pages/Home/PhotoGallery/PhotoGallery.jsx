import React from 'react';

const PhotoGallery = () => {
    return (
        <div className='my-20'>
            <div className='text-center mt-8'>
            <h1 className='text-5xl font-bold text-orange-500 mb-3'>Gallery</h1>
            <p className='mt-3 mb-10'>Below are some of our interesting product pictures, hope you like it, enjoy shopping!</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 border p-5 '>
                <img className=' ' src="https://sc04.alicdn.com/kf/Hc98974d18a2c4e8295deb7644e193dc1K.jpg" alt="" />
                <img src="https://www.patoys.in/image/cache/catalog/productsimage/PABLF118P-01-1000x1000.jpg" alt="" />
                <img className='  ' src="https://www.patoys.in/image/cache/catalog/productsimage/fiorano-599-red-01-370x370.jpg" alt="" />
                <img className=' ' src="https://bettershopbd.com/uploads/product_image/product_3481_1.jpg" alt="" />
                <img className=' ' src="https://m.media-amazon.com/images/I/51Vc4XBRbrL.jpg" alt="" />
                <img src="https://i5.walmartimages.com/asr/8833dbc9-f743-43f6-9734-b32959379f8f.3e4ffdc32cbe97f8cdface411ff07199.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" alt="" />
                <img src="https://s.alicdn.com/@sc04/kf/H1481ff834e824b23928e32f511d8b6998.jpg" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0559/3910/4829/products/lva9abf9fuqlyleryvlr.jpg?v=1655917738" alt="" />
                <img src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg" alt="" />
            </div>
        </div>
    );
};

export default PhotoGallery;