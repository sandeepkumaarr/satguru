import React from 'react';

const HeaderDescription = () => {
    return (
            <div className="p-2 flex flex-col flex-wrap mt-5
                            md:text-center
                            lg:descri-container lg:justify-around"
             >
                <div className="">
                        <h3 className="text-base text-center 
                                        md:text-2xl
                                        lg:text-xl lg:text-left"
                        >
                            Bringing you exclusive serviced office spaces in the 
                            hotspot of Dubai, to take your business to the next level
                        </h3>
                </div>

                <div className="flex flex-col text-base
                                md:flex-row md:justify-around md:text-lg
                                lg:flex-row lg:justify-between lg:text-lg"
                >
                        <div className="flex flex-row justify-center mb-4
                                        md:mt-2"
                        >                            
                                <img className="w-10 h-10 rounded-full mr-4 self-center
                                                lg:w-12 lg:h-12" 
                                        src={"https://i.ibb.co/6PT8KF8/image.png"} alt="icon"/>
                                <p className="p-1 
                                                lg:p-2 lg:text-left"
                                >                                    
                                Move in and start<br/> working immediately
                                </p>                            
                        </div>

                        <div className="flex flex-row justify-center mr-3">
                            <img className="w-10 h-10 rounded-full mr-4 self-center
                                            lg:w-12 lg:h-12 lg:mb-4" 
                                            src={"https://i.ibb.co/k4bNtwk/Layer-33.png"} alt="icon"/>
                            <p className="p-1 
                                            md:mt-2 
                                            lg:p-2 lg:text-left"
                            >
                            No large<br/> upfront payments</p>
                        </div>
                </div>
            </div>
    );
};

export default HeaderDescription;
