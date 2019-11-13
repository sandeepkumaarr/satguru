import React from 'react';
import OrderedBusiness from '../orderedbusinessservices/orderedbusinessservices.component';
import './businesssetupservices.styles.css';


const BusinessSetupServices = () => {
    return (
            <div className="flex flex-col ml-12 ">

                <div className="flex flex-row mb-10">

                    <div className="relative mt-6" id="bussesimg">
                        <img src={"https://i.ibb.co/Q92p1YT/Layer-22.png"} alt="office"/>
                    </div>

                    <div id="buspara" className="flex flex-col absolute mt-12">
                        <h4 className="text-center text-lg font-medium">Business Setup Services</h4>
                        <OrderedBusiness/>
                    </div>
                    
                </div>
                
            </div>
    );
};

export default BusinessSetupServices;
