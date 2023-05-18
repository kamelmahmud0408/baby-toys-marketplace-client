import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CarsCategory = () => {
    return (
        <div>
            <Tabs>
                
                <div className='text-center list-style-none'>
                    <Tab className={`text-red-700 text-3xl font-bold  `} >Reguler Cars</Tab>
                    <Tab className={`text-red-700`}>Pulice cars</Tab>
                    <Tab className={`text-red-700`}>truck</Tab>
                </div>


                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CarsCategory;