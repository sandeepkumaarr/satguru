import React from 'react';


const OrderedList = () => {
    return (
            <div className="flex flex-col bg-primary border rounded m-3 text-white shadow
                            
                            lg:lister-container"
            >
                <div className="text-center text-lg font-semibold mt-2
                                md:text-2xl md:text-left md:mx-3
                                lg:text-xl"
                >
                    <p>We provide an array of enhanced facilities for <br/>your business experience :</p>
                </div>

                <div className="flex flex-col text-base leading-normal mx-auto mt-6
                                md:flex-row md:text-lg
                                lg:text-base lg:font-medium"
                >
                    <div className="" >
                        <ul style={{listStyleImage: "url('https://i.ibb.co/fnGCSJ5/Shape-2-copy-4.png')"}}>
                            <li>Cutting edge technology</li>
                            <li>Stylish visitors reception</li>
                            <li>IT support in-house</li>
                            <li>High-speed Wi-Fi</li>
                            <li>Parking facility</li>
                        </ul>
                    </div>

                    <div className="mt-4 mb-2
                                    md:mt-0 md:ml-16
                                    lg:ml-20" 
                    
                    >
                        <ul style={{listStyleImage: "url('https://i.ibb.co/fnGCSJ5/Shape-2-copy-4.png')"}}>
                                <li>Maintenance and Management</li>
                                <li>Dedicated P.O.Box and Mail</li>
                                <li>Management & <br/>Housekeeping Support</li>
                                <li>Kitchen Amenities</li>
                                <li>Printing & Stationery</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default OrderedList;
