import React from 'react';
import './headerdescription.styles.css'

const HeaderDescription = () => {
    return (
            <div className="flex flex-col justify-around" id="headDesc">
                <div className="p-3 text-center" id="headsubtxt">
                        <h3 className="">
                            Bringing you exclusive serviced office spaces in the <br/>
                            hotspot of Dubai, to take your business to the next level
                        </h3>
                </div>

                <div className="flex flex-row justify-between mt-5 p-8" id="headsubimg">
                        <div className="flex flex-row items-center">
                            <div className="w-12 h-12 p-1 mr-2">
                                <img src={"https://i.ibb.co/6PT8KF8/image.png"} alt="icon"/>
                            </div>
                            <div>
                                <p>Move in and start<br/> working immediately</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center">
                            <div className="w-12 h-12 p-2 mr-2 rounded-full bg-white">
                            <img src={"https://i.ibb.co/k4bNtwk/Layer-33.png"} alt="icon"/>
                            </div>
                            <div>
                                <p>No large<br/> upfront payments</p>
                            </div>
                        </div>
                </div>
            </div>
    );
};

export default HeaderDescription;
