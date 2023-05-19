import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarsCategoryCard from './CarsCategoryCard';

const CarsCategory = () => {

    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState('RegularCar')

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    const handleClick = (categoryName) => {
        setActiveTab(categoryName)
    }
    return (
        <div className='text-center text-xl font-bold'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleClick('RegularCar')}>Regular car</Tab>
                    <Tab onClick={() => handleClick('PuliceCar')}>Pulice Car</Tab>
                    <Tab onClick={() => handleClick('Truck')}>Truck</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <CarsCategoryCard key={toy._id} toy={toy}></CarsCategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CarsCategory;