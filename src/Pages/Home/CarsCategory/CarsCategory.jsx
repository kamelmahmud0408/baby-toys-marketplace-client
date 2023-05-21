import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarsCategoryCard from './CarsCategoryCard';

const CarsCategory = () => {

    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState('RegularCar')

    useEffect(() => {
        fetch(`https://baby-toys-marketplace-server.vercel.app/toysByCategory/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    const handleClick = (categoryName) => {
        setActiveTab(categoryName)
    }
    return (
        <div>
            <div className='text-center my-20'>
                <h1 className='text-4xl text-orange-500 font-bold'>Shop By Category </h1>
                <p className='mt-3'>Here are our products sorted by sub-category, have a nice shopping day</p>
            </div>
            <div className='text-center text-xl font-bold'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleClick('RegularCar')}>Regular car</Tab>
                        <Tab onClick={() => handleClick('PuliceCar')}>Pulice Car</Tab>
                        <Tab onClick={() => handleClick('Truck')}>Truck</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='my-8 text-xl font-bold'>Regular Car</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='my-8 text-xl font-bold'>Pulice Car</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='my-8 text-xl font-bold'>Truck</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CarsCategory;