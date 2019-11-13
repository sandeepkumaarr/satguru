import React from 'react';
import './orderedlist.styles.css';


const OrderedList = () => {
    return (
            <div className="flex flex-col text-white rounded shadow-md" id="ordlist">
                <div className="p-6 mt-2 font-semibold">
                    <p>We provide an array of enhanced facilities for <br/>your business experience :</p>
                </div>

                <div className="flex flex-row ml-4 font-light">
                    <div className="p-4 text-sm">
                        <ul id="onelist">
                            <li>Cutting edge technology</li>
                            <li>Stylish visitors reception</li>
                            <li>IT support in-house</li>
                            <li>High-speed Wi-Fi</li>
                            <li>Parking facility</li>
                        </ul>
                    </div>

                    <div className="p-4 text-sm ml-4">
                        <ul id="twolist">
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
