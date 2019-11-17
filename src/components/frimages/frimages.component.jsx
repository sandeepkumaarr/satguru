import React from 'react';
import './frimages.component';

const FirImages = () => {
    return (
            <div className="flex flex-col lg:flex-row">

                <div className="flex flex-col w-screen h-2/6 relative text-center  lg:w2/6">                        
                        <img className="z-10 lg:fourmages" src={"https://i.ibb.co/ScNdZ3K/one.jpg"} alt="images"/>                        
                        <p className="bg-black text-white font-semibold absolute p-2 z-20 bottom-0 opacity-75 w-full">Personal spaces to nurture your discussions brainstorming</p>
                </div>

                <div className="flex flex-col w-screen h-2/6 relative text-center lg:w2/6">                        
                      <img className="z-10 lg:fourmages" src={"https://i.ibb.co/JrPCHWQ/two.png"} alt="images"/>                      
                       <p className="bg-black text-white font-semibold absolute p-2 z-20 bottom-0 opacity-75 w-full">Compact rooms to drive your startup discussions to exchange</p>                       
                </div>

                <div className="flex flex-col w-screen h-2/6 relative text-center lg:w2/6">
                    <img className="z-10 lg:fourmages" src={"https://i.ibb.co/yNgWjZy/three.png"} alt="images"/>
                       <p className="bg-black text-white font-semibold absolute p-2 z-20 bottom-0 opacity-75 w-full">Conference facilities to accommodate exchange of ideas.</p>
                </div>

                <div className="flex flex-col w-screen h-2/6 relative text-center lg:w2/6">                        
                    <img className="z-10 lg:fourmages" src={"https://i.ibb.co/DRRHDTF/four.png"} alt="images"/>
                       <p className="bg-black text-white font-semibold absolute p-2 z-20 bottom-0 opacity-75 w-full">Startup cells for you to work collaboratively as a team to nurture</p>
                </div>
                
            </div>
    );
};

export default FirImages;
