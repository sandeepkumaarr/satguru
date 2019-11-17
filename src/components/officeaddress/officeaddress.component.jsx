import React from 'react';

const OfficeAddress = () => {
    return (
            <div className="flex flex-row justify-around">

                <div className="flex flex-col">
                    <h3 className="text-lg p-4 font-bold
                                    md:text-xl lg:text-2xl"
                    >                       
                    A setup in this bustling city surrounded by <br/>your client hub can give your business the <br/>wings it needs to make an impact.</h3>
                    <p className="m-4 text-sm
                                    md:text-lg"
                    >
                    Move in and start working immediately <br/>No large upfront payments.</p>
                    <button className="self-start m-4 p-2 rounded font-semibold border border-white lg:self-end hover:bg-gray-500">Book A Visit</button>
                </div>


                <div className="flex flex-col justify-around">
                    <h3 className="text-lg font-bold mt-12 m-1">OFFICE ADDRESS</h3>
                    <p className="text-sm mb-24 p-2">Suite 1501 - 1508, XL Tower,<br/>Al Abraj Street,<br/>Business Bay, Dubai, UAE.</p>
                </div>
                
            </div>
    );
};

export default OfficeAddress;
