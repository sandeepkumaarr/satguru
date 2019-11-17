import React from 'react';
import OrderedConcierge from '../orderedconcierge/orderedconcierge.component';

const ConciergeServices = () => {
    return (
            <div className="flex flex-col-reverse
                            lg:flex-row-reverse lg:relative"
            >
                    <div className="lg:absolute lg:left-0 lg:mt-20 lg:m-16">
                        <h4 className="text-center text-lg font-bold mt-2 lg:text-xl">Concierge Services</h4>
                        <OrderedConcierge/>
                    </div>          

                    <div className="m-2 md:m-3 lg:bc-imagectr lg:p-3" >
                        <img className="md:w-full lg:bc-imagectr" src={"https://i.ibb.co/SPrn1mC/Layer-21.png"} alt="office"/>
                    </div>           

            </div>
    );
};

export default ConciergeServices;
