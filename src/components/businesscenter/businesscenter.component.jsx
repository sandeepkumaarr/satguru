import React from 'react';
import OrderedList from '../orderedlist/orderedlist.component';
import './businesscenter.styles.css';


const BusinessCenter = () => {
    return (
            <div className="flex flex-col ml-12">

                <div className="text-2xl text-center mb-2 mt-4 font-bold">
                    <h3>Satguru Business Centre for your Business</h3>
                </div>

                <div className="text-sm text-center mb-3 mt-2 text-gray-600 font-normal">
                    <p>Satguru Business Center (SBC) is an exquisite solution provider for prestigious furnished offices, conference and meeting rooms <br/> 
                        along with the ultimate business packages, business setup services and concierge services.
                    </p>
                </div>

                <div className="flex flex-row mb-10">

                    <div className="relative" id="buscenimg">
                        <img src={"https://i.ibb.co/CQG77Hx/Layer-14.png"} alt="office"/>
                    </div>

                    <div id="excoff" className="flex flex-col absolute">
                        <h4 className="text-center text-lg font-medium">Exclusive Offers</h4>
                        <OrderedList/>
                    </div>
                    
                </div>
                
            </div>
    );
};

export default BusinessCenter;
