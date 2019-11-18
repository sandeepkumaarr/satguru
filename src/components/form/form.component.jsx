import React from 'react';

const FormComponent = ({updateInput,stateemail,statename,statemobile,stateofficetype,addUser,openModalHandler}) => {
    return (
            <div className="flex flex-col justify-between text-center w-screen h-screen
                            
                            lg:form-container lg:shadow">
                    <h1 
                        className="text-4xl bg-sixth p-4 font-bold
                                    md:text-5xl md:p-10
                                    lg:text-2xl lg:p-2"
                    >
                        Enquire <span className="text-primary">NOW</span>
                    </h1>

                    <h5 
                        className="text-2xl text-secondary p-8 -mt-4
                                    md:text-5xl md:p-4 md:-mb-6
                                    lg:text-xl lg:p-8 lg:-m-1"
                                
                    >
                        YOUR NEW OFFICE IN DUBAI IS JUST A CLICK AWAY
                    </h5>
                    <form onSubmit={addUser} className="">
                        <input onChange={updateInput}
                               value={statename}
                               className="border border-fifth rounded h-12 w-4/5 p-2 m-4
                                            focus:outline-none focus:bg-sixth
                                            focus:shadow-outline focus:border-secondary
                                            md:h-16 md:m-6
                                            lg:h-10 lg:m-1"
                               type="text" name="name" placeholder="Your Name"
                         />
                        <input onChange={updateInput}
                               value={stateemail}
                               className="border border-fifth rounded h-12 w-4/5 p-2 m-4
                                            focus:outline-none focus:bg-sixth
                                            focus:shadow-outline focus:border-secondary
                                            md:h-16 md:m-6
                                            lg:h-10 lg:m-1"
                               type="email" name="email" placeholder="Email Address"
                        />
                        <input onChange={updateInput}
                               value={statemobile}
                               className="border border-fifth rounded h-12 w-4/5 p-2 m-4
                                            focus:outline-none focus:bg-sixth
                                            focus:shadow-outline focus:border-secondary
                                            md:h-16 md:m-6
                                            lg:h-10 lg:m-1"
                               type="tel" name="mobile" placeholder="Phone Number"
                        />
                        <input onChange={updateInput}
                               value={stateofficetype}
                               className="border border-fifth rounded h-12 w-4/5 p-2 m-4
                                            focus:outline-none focus:bg-sixth
                                            focus:shadow-outline focus:border-secondary
                                            md:h-16 md:m-6
                                            lg:h-10 lg:m-1"
                               type="text" name="officetype" placeholder="Office Type"
                        />

                        <button onClick={openModalHandler}
                                type="submit"
                                className="bg-primary text-3xl text-white font-bold w-full h-12 mt-10
                                            hover:bg-green-500
                                            md:h-16 md:mt-32
                                            lg:h-10 lg:mt-2 lg:pb-2 lg:text-2xl"
                        >
                        SUBMIT
                        </button>
                    </form>
            </div>
    );
};

export default FormComponent;