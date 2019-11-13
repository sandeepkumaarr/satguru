import React from 'react';
import './orderedbusinessservices.styles.css';


const OrderedBusiness = () => {
    return (
            <div className="flex flex-col text-white rounded shadow-md" id="ordbulist">
                <div className="p-4 mt-2 font-semibold">
                    <p>Expert Assistance to setup your company in U.A.E</p>
                </div>

                <div className="flex flex-row ml-4 font-light">
                    <div className="p-4 text-sm">
                        <ul id="onebulist">
                            <li>Local Sponsor/<br/>Local Service Agent</li>
                            <li>Trade Name reservation</li>
                            <li>MOU Attestation in<br/>Dubai court</li>
                            <li>Trade license issuance</li>                            
                        </ul>
                    </div>

                    <div className="p-4 text-sm ml-4">
                        <ul id="twobulist">
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
