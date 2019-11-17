import React from 'react';


const OrderedConcierge = () => {
    return (
            <div className="flex flex-col m-2 bg-gray-800 text-white rounded shadow lg:lister-container">
                <div className="text-lg text-center font-semibold mt-2 p-2
                                md:text-xl lg:text-lg lg:text-left lg:m-2"
                >
                    <p>Your clients will appreciate Hospitality. <br/>We make your Business more premium with concierge services.</p>
                </div>

                <div className="mt-4 pl-8 font-medium
                                md:text-xl md:font-medium md:mx-auto
                                lg:text-base lg:mx-8 lg:font-semibold"
                >
                    <p>An in-house team to assist with:</p>
                </div>

                <div className="text-base leading-normal mx-auto mt-4 mb-2
                                lg:mt-1"
                >
                        <ul style={{listStyleImage: "url('https://i.ibb.co/VQvBr7S/Shape-2-copy.png')"}}>
                            <li>Receptionist</li>
                            <li>Secretarial service</li>
                            <li>Personalized telephone answering <br/>in English & Arabic</li>
                            <li>Access to Business Lounge</li>
                        </ul>
                    </div>
            </div>
    );
};

export default OrderedConcierge;
