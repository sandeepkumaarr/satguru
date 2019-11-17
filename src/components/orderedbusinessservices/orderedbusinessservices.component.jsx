import React from 'react';


const OrderedBusiness = () => {
    return (
            <div className="flex flex-col bg-primary border rounded m-3 text-white shadow lg:lister-container">
                <div className="text-center text-lg font-semibold mt-2
                                md:text-2xl md:text-left md:mx-3
                                lg:text-xl">
                    <p>Expert Assistance to setup your company in U.A.E</p>
                </div>

                <div className="flex flex-col text-base leading-normal mx-auto mt-6
                                md:flex-row md:text-lg md:mb-2
                                lg:text-base lg:font-medium">
                    <div className="">
                        <ul style={{listStyleImage: "url('https://i.ibb.co/fnGCSJ5/Shape-2-copy-4.png')"}} >
                            <li>Local Sponsor/<br/>Local Service Agent</li>
                            <li>Trade Name reservation</li>
                            <li>MOU Attestation in<br/>Dubai court</li>
                            <li>Trade license issuance</li>                            
                        </ul>
                    </div>

                    <div className="mt-4 mb-2
                                    md:mt-0 md:ml-16
                                    lg:ml-20">
                        <ul style={{listStyleImage: "url('https://i.ibb.co/fnGCSJ5/Shape-2-copy-4.png')"}}>
                                <li>Establishment card</li>
                                <li>Immigration card</li>
                                <li>Medical & FingerPrinting</li>
                                <li>Visa Stamping</li>                                
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default OrderedBusiness;
