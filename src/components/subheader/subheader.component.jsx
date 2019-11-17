import React from 'react';


const SubHeader = () => {
    return (
            <div className="flex flex-col bg-gray-100"
            >
                    <div className="text-xl p-2 font-semibold
                                    lg:p-4"
                    >
                        <h4>Dubai - the perfect launch pad to take your business to a global level.</h4>
                    </div>

                <div className="flex flex-col text-lg
                                lg:flex-row lg:text-base"
                >
                        <div className="flex flex-row items-center m-4">
                            <img className="w-10 h-10" src={"https://i.ibb.co/02xJsx9/Layer-12.png"} alt="icons"/>
                            <p className="px-4">Business hotspot of <br/>global proportions.</p>
                        </div>

                        <div className="flex flex-row items-center m-4">
                            <img className="w-9 h-9" src={"https://i.ibb.co/xfdMyYW/Layer-26.png"} alt="icons"/>
                            <p className="px-4">Impressive infrastructure <br/>with future ready technology</p>
                        </div>

                        <div className="flex flex-row items-center m-4">
                                    <div className="lg:p-2 lg:mt-2">
                                        <img className="w-8 h-6" src={"https://i.ibb.co/VtTh1cs/Layer-27.png"} alt="icons"/>
                                        <img className="w-6 h-4 m-2" src={"https://i.ibb.co/RgbHz7P/Layer-28.png"} alt="icons"/>                            
                                    </div>
                                    
                                    <div>
                                    <p className="px-4 lg:px-2">Trade versatility</p>
                                    </div>
                        </div>    
                </div>
            </div>
    );
};

export default SubHeader;
