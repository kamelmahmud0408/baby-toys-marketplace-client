import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center mb-4 text-4xl text-orange-500 font-bold '>About Us</h1>
            <div className="hero  ">

                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY=" className=" rounded-lg shadow " />
                    <div className='p-10'>
                        <p className='text-xl p-5'>Launched in 2014, Toys Murt was founded with the goal of revolutionizing Hawaii’s foodservice industry. Harnessing the buying power of our parent company  and our partnership with the International Marketing Alliance (IMA), Toys Murt offers thousands of unique local and national products many of which are available nowhere else in Hawaii.
                         Our wholesale club contains over 5,000 product and outlet supply essentials in our 45,000-square-foot facility. Members also have access to our demonstration outlet and catering concepts showroom.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;