import React from 'react';
import './frimages.component';

const FirImages = () => {
    return (
            <div className="flex flex-col border border-orange-300 sm:flex-col md:flex-row lg:flex-row">

                <div id="firsimage" className="border-orange-300">                        
                        <img className="w-full" src={"https://i.ibb.co/ScNdZ3K/one.jpg"} alt="images"/>                        
                        <p className="bg-gray-800 text-white text-center">Personal spaces to nurture your <br/>discussions brainstorming</p>
                </div>

                <div id="seconimage" className="border-orange-300">                        
                      <img className="w-full" src={"https://i.ibb.co/JrPCHWQ/two.png"} alt="images"/>                      
                       <p className="bg-gray-800 text-white text-center">Compact rooms to drive your<br/>discussions</p>                       
                </div>

                <div id="thirimage" className="border-orange-300">
                    <img className="w-full" src={"https://i.ibb.co/yNgWjZy/three.png"} alt="images"/>
                       <p className="bg-gray-800 text-white text-center">Conference facilities to <br/>accommodate exchange of</p>
                </div>

                <div id="fourimage" className="border-orange-300">                        
                        <img className="w-full" src={"https://i.ibb.co/DRRHDTF/four.png"} alt="images"/>
                       <p className="bg-gray-800 text-white text-center">Startup cells for you to work <br/>collaboratively as a team</p>
                </div>
                
            </div>
    );
};

export default FirImages;
