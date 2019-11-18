import React from 'react';
import FormComponent from '../form/form.component';
import HeaderDescription from '../headerdescription/headerdescription.component';
import SubHeader from '../subheader/subheader.component';
import { ReactComponent as Logo} from '../../Assets/logo.svg';
import BusinessCenter from '../businesscenter/businesscenter.component';
import ConciergeServices from '../conciergeservices/conciergeservices.component';
import BusinessSetupServices from '../businesssetupservices/businesssetupservices.component';
import OfficeAddress from '../officeaddress/officeaddress.component';
import FirImages from '../frimages/frimages.component';
import FooterComponent from '../footercomponent/footer.component';

const HeaderComponent = ({updateInput,stateemail,statename,statemobile,stateofficetype,addUser}) => {
    return (
            <div className="flex flex-col font-osans">
                    <div 
                        className="w-screen h-auto bg-cover bg-top 
                                    lg:bg-center lg:header-container lg:relative"
                        style ={ { backgroundImage: "url('https://i.ibb.co/6FxS1X4/burj-khalifa.png')" } }
                        id="headerImage"
                    >
                    
                            <div className="flex flex-row">
                                    
                                    <div className="bg-fifth p-2 rounded-b
                                                    md:ml-5">
                                        <Logo/>
                                    </div>
                                    

                                    <div className="flex flex-row self-center ml-auto p-2
                                                    lg:p-10"
                                                    
                                    >
                                        <img className="w-8 h-8" src={"https://i.ibb.co/k4bNtwk/Layer-33.png"} alt="icon"/>
                                        <p className="p-1 text-white">+917 56 989 1667</p>
                                    </div>
                                
                            </div>

                        <div className="flex flex-col
                                        lg:flex-row">

                            <div className="flex flex-col text-white items-center align-center font-semibold content-center mt-8">
                                    <h2 className="text-3xl font-raleway">REACH FOR THE SKIES</h2>
                                    <hr className="w-16 mt-2 border-white"/>

                                    <div className="mt-4 m-3 bg-secondary rounded opacity-75
                                                    lg:bg-transparent lg:opacity-100 lg:m-10">
                                        <HeaderDescription/>
                                    </div>
                            </div>

                            <div className="bg-white mt-10 z-50 mb-4
                                            md:mb-0
                                            lg:absolute lg:right-0 lg:m-10">
                                    <FormComponent updateInput={updateInput} 
                                                    stateemail={stateemail}
                                                    statename={statename}
                                                    statemobile={statemobile}
                                                    stateofficetype={stateofficetype}
                                                    addUser={addUser}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 z-30
                                    sm:mt-2
                                    md:mt:10 lg:mt-0">
                        <SubHeader/>
                    </div>

                    <div className="bg-sixth">
                        <BusinessCenter/>
                    </div>

                    <div className="xs:m-1">
                        <FirImages/>
                    </div>

                    <div className="mt-6 mb-6">
                        <ConciergeServices/>
                    </div>

                    <div className="mt-2">
                        <BusinessSetupServices/>
                    </div>
                    
                    <div className="bg-gray-900 text-white mt-4">
                        <OfficeAddress/>
                    </div>

                    <div className="">
                        <FooterComponent/>
                    </div>
            </div>
    );
};

export default HeaderComponent;
