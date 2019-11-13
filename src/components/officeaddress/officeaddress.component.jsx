import React from 'react';

const OfficeAddress = () => {
    return (
            <div className="flex flex-row justify-around" id="contactinfo">

                <div className="flex flex-col">
                    <h3 className="text-2xl p-4 font-bold">A setup in this bustling city surrounded by <br/>your client hub can give your business the <br/>wings it needs to make an impact.</h3>
                    <p className="pl-4 -mt-2 text-sm">Move in and start working immediately <br/>No large upfront payments.</p>
                    <button className="self-end p-2 mb-4 rounded font-semibold border border-white hover:bg-gray-500">Book A Visit</button>
                </div>


                <div className="flex flex-col justify-around">
                    <h3 className="text-2xl font-bold mt-8">OFFICE ADDRESS</h3>
                    <p className="text-sm mb-16 p-2">Suite 1501 - 1508, XL Tower,<br/>Al Abraj Street,<br/>Business Bay, Dubai, UAE.</p>
                </div>
                
            </div>
    );
};

export default OfficeAddress;
