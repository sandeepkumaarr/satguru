import React from 'react';
import './form.styles.css';

const FormComponent = () => {
    return (
            <div className="rounded flex flex-col text-center items-center shadow-lg" id="formcomponent">
                    <div className="bg-gray-200 pt-4" id="formcheading">
                        <h1 className="text-2xl font-black">Enquire <span style={{color: "#FF8B38"}}>NOW</span></h1>
                    </div>                    
                    <h5 className="pt-4 text-gray-600" id="formcsubheading">YOUR NEW OFFICE IN DUBAI IS JUST A CLICK AWAY</h5>
                    <form className="flex flex-col items-center">
                        <input className="border border-gray-400 m-2 p-4 rounded" type="text" placeholder="Your Name" />
                        <input className="border border-gray-400 m-2 p-4 rounded" type="email" placeholder="Email Address" />
                        <input className="border border-gray-400 m-2 p-4 rounded" type="tel" placeholder="Phone Number" />
                        <input className="border border-gray-400 m-2 p-4 rounded" type="text" placeholder="Office Type" />

                        <div className="mt-4 text-white text-2xl font-extrabold" id="formcbutton">
                            <input type="submit" value="SUBMIT"/>
                        </div>                        
                    </form>
            </div>
    );
};

export default FormComponent;