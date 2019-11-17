import React from 'react';
import OrderedBusiness from '../orderedbusinessservices/orderedbusinessservices.component';


const BusinessSetupServices = () => {
    return (
            <div className="flex flex-col lg:flex-row lg:relative">
                    <div className="m-2 md:m-3 lg:bc-imagectr lg:p-3">
                        <img className="md:w-full lg:bc-imagectr"  src={"https://i.ibb.co/Q92p1YT/Layer-22.png"} alt="office"/>
                    </div>

                    <div className="lg:absolute lg:right-0 lg:mt-16 lg:mr-16">
                        <h4 className="text-center text-lg font-bold mt-2 lg:text-xl">Business Setup Services</h4>
                        <OrderedBusiness/>
                    </div>               
            </div>
    );
};

export default BusinessSetupServices;
