import React from 'react';
import './fourimages.styles.css';

const FourImages = () => {
    return (
            <div className="flex flex-row">

                <div id="firsimage" className="flex flex-col border border-gray-500">
                        <div className="imges">
                            <img src={"https://i.ibb.co/ScNdZ3K/one.jpg"} alt="images"/>
                        </div>

                        <div id="firstcon" className="opacity-75 bg-black text-white text-center">
                            <p>Personal spaces to nurture your <br/>brainstorming</p>
                        </div>                    
                </div>

                <div id="seconimage" className="flex flex-col border border-gray-500">
                        <div className="imges">
                            <img src={"https://i.ibb.co/JrPCHWQ/two.png"} alt="images"/>
                        </div>

                        <div id="secondcon" className="opacity-75 bg-black text-white text-center">
                            <p>Compact rooms to drive your startup discussions</p>
                        </div>
                </div>

                <div id="thirimage" className="flex flex-col border border-gray-500">
                        <div className="imges">
                            <img src={"https://i.ibb.co/yNgWjZy/three.png"} alt="images"/>
                        </div>

                        <div id="thirdcon" className="opacity-75 bg-black text-white text-center">
                            <p>Conference facilities to <br/>accommodate exchange of ideas.</p>
                        </div>
                </div>

                <div id="fourimage" className="flex flex-col border border-gray-500">
                        <div className="imges">
                            <img src={"https://i.ibb.co/DRRHDTF/four.png"} alt="images"/>
                        </div>

                        <div id="fourthcon" className="opacity-75 bg-black text-white text-center">
                            <p>Startup cells for you to work <br/>collaboratively as a team</p>
                        </div>
                </div>
                
            </div>
    );
};

export default FourImages;
