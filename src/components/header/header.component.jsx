import React from 'react';
import FormComponent from '../form/form.component';
import HeaderDescription from '../headerdescription/headerdescription.component';
import SubHeader from '../subheader/subheader.component';
import { ReactComponent as Logo} from '../../Assets/logo.svg';
import "./header.styles.css";

const HeaderComponent = ({updateInput,stateemail,statename,statemobile,stateofficetype,addUser}) => {
    return (
            <div className="">
                    <div className="" id="headerImage">
                        <div className="bg-gray-200" id="logoc">
                            <Logo/>
                        </div>

                        <div id="headingbc">
                            <h2 className="text-3xl">REACH FOR THE SKIES</h2>
                            <hr className="w-16 mt-2 border-b-2"/>
                        </div>

                        <div className="" id="formc">
                            <FormComponent updateInput={updateInput} 
                                            stateemail={stateemail}
                                            statename={statename}
                                            statemobile={statemobile}
                                            stateofficetype={stateofficetype}
                                            addUser={addUser}
                            />
                        </div>

                        <div className="" id="desc">
                            <HeaderDescription/>
                        </div>
                        
                        <div className="flex flex-row" id="phonec">
                            <div className="w-6 h-6 mr-2" id="phonecimage">
                                <img src={"https://i.ibb.co/k4bNtwk/Layer-33.png"} alt="icon"/>
                            </div>
                            
                            <div id="phonecnum">
                                    <p>+917 56 989 1667</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 ml-16">
                        <SubHeader/>
                    </div>

                    

            </div>
    );
};

export default HeaderComponent;
