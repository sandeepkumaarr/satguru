import React from 'react';
import './subheader.styles.css';


const SubHeader = () => {
    return (
            <div className="flex flex-col" id="subHeader">
                <div className="text-lg pl-4 font-semibold">
                    <h4>Dubai - the perfect launch pad to take your business to a global level.</h4>
                </div>

                <div className="flex flex-row mt-4" id="subHeaderImages">
                        <div className="flex flex-row mr-4">
                            <img className="p-4" src={"https://i.ibb.co/02xJsx9/Layer-12.png"} alt="icons"/>
                            <p className="p-2 mt-3 text-xs text-gray-600">Business hotspot of <br/>global proportions.</p>
                        </div>

                        <div className="flex flex-row mr-4">
                            <img className="p-4" src={"https://i.ibb.co/xfdMyYW/Layer-26.png"} alt="icons"/>
                            <p className="p-2 mt-3 text-xs text-gray-600">Impressive infrastructure <br/>with future ready technology</p>
                        </div>

                        <div className="flex flex-row mt-2">
                                    <div>
                                        <img className="p-1 mt-1" src={"https://i.ibb.co/VtTh1cs/Layer-27.png"} alt="icons"/>
                                        <img className="p-2 -mt-1" src={"https://i.ibb.co/RgbHz7P/Layer-28.png"} alt="icons"/>                            
                                    </div>
                                    
                                    <div>
                                    <p className="p-2 mt-3 text-xs text-gray-600">Trade versatility</p>
                                    </div>
                        </div>    
                </div>
            </div>
    );
};

export default SubHeader;
