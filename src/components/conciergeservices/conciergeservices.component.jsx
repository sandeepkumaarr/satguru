import React from 'react';
import OrderedConcierge from '../orderedconcierge/orderedconcierge.component';
import './conciergeservices.styles.css';

const ConciergeServices = () => {
    return (
            <div className="">
                <div className="flex flex-row-reverse mb-16 mr-4">                    

                    <div className="relative self-end" id="concenimg">
                        <img src={"https://i.ibb.co/SPrn1mC/Layer-21.png"} alt="office"/>
                    </div>   

                    <div id="concoff" className="flex flex-col absolute mt-16">
                        <h4 className="text-center text-lg font-medium">Concierge Services</h4>
                        <OrderedConcierge/>
                    </div>                

                </div>
            </div>
    );
};

export default ConciergeServices;
