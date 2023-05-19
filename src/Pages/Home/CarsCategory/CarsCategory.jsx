import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CarsCategory = () => {

    const [toys,setToys]=useState([])
    const [activeTab,setActiveTab]=useState('')

    const handleClick=(categoryName)=>{
                  setActiveTab(categoryName)
    }
    return (
        <div className='text-center text-xl font-bold'>
            <Tabs>
                <TabList>
                    <Tab onClick={()=>handleClick('RegularCar')}>Regular car</Tab>
                    <Tab onClick={()=>handleClick('PuliceCar')}>Pulice Car</Tab>
                    <Tab onClick={()=>handleClick('Truck')}>Truck</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    {
                        console.log(activeTab)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CarsCategory;