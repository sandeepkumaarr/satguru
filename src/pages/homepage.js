import React from 'react';
import HeaderComponent from '../components/header/header.component';
class HomePage extends React.Component {
 
    constructor(props){
        super(props)

        this.state = {

            firstname: null

        }
    }

render(){

    return (
        <div className="flex flex-col">
           <HeaderComponent/>
            
        </div>
    );
    
}
}

export default HomePage;