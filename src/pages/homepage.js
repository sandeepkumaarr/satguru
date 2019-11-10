import React from 'react';
import FormComponent from '../components/form/form.component';
import SubHeader from '../components/subheader/subheader.component';

class HomePage extends React.Component {
 
    constructor(props){
        super(props)

        this.state = {

            firstname: null

        }
    }

render(){

    return (
        <div className="mx-24 my-24 ">
            <FormComponent/>
            <div className="mt-8">
                <SubHeader/>
            </div>
            
        </div>
    );
    
}
}

export default HomePage;