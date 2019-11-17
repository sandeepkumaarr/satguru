import React from 'react';
import OrderedList from '../orderedlist/orderedlist.component';


const BusinessCenter = () => {
    return (
            <div className="flex flex-col m-2">

                <div className="text-center text-lg font-bold mb-3 mt-2 p-2 lg:text-2xl">
                    <h3>Satguru Business Centre for your Business</h3>
                </div>

                <div className="text-sm font-semibold text-center mb-4 p-2 text-secondary
                                md:p-3"
                >
                    <p>Satguru Business Center (SBC) is an exquisite solution provider for prestigious furnished offices, conference and meeting rooms 
                        along with the ultimate business packages, business setup services and concierge services.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row lg:relative">

                    <div className="m-2 md:m-3 lg:bc-imagectr lg:p-3">
                        <img src={"https://i.ibb.co/CQG77Hx/Layer-14.png"} alt="office"/>
                    </div>

                    <div className="lg:absolute lg:right-0 lg:mt-12 lg:mr-16">
                        <h4 className="text-center text-lg font-bold mt-2 lg:text-xl">Exclusive Offers</h4>
                        <OrderedList/>
                    </div>
                    
                </div>
                
            </div>
    );
};

export default BusinessCenter;
