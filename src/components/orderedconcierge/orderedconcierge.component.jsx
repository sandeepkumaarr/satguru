import React from 'react';
import './orderedconcierge.styles.css';


const OrderedConcierge = () => {
    return (
            <div className="flex flex-col text-white rounded shadow-md bg-gray-800" id="utdlist">
                <div className="p-6 mt-2 font-semibold">
                    <p>Your clients will appreciate Hospitality. <br/>We make your Business more premium with concierge services.</p>
                </div>

                <div className="ml-6">
                    <p>An in-house team to assist with:</p>
                </div>

                <div className="flex flex-row ml-10 font-light">
                    <div className="p-2 text-sm">
                        <ul id="utlist">
                            <li>Receptionist</li>
                            <li>Secretarial service</li>
                            <li>Personalized telephone answering <br/>in English & Arabic</li>
                            <li>Access to Business Lounge</li>
                        </ul>
                    </div>                   
                </div>
            </div>
    );
};

export default OrderedConcierge;
