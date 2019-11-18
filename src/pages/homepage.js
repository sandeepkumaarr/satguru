import React from 'react';
import firebase from '../firebase/firebase'
import 'firebase/firestore';
import HeaderComponent from '../components/header/header.component';
class HomePage extends React.Component {
 
    constructor(props){
        super(props)

        this.state = {

            name: "",
            email:"",
            mobile:"",
            officetype:"",
        }
    }

    updateInput = e => {

      
        this.setState({
          [e.target.name]: e.target.value.toLowerCase(),
          [e.target.email]: e.target.value.toLowerCase(),
          [e.target.mobile]: e.target.value,
          [e.target.officetype]: e.target.value.toLowerCase(),
        });
      
        
      
        
      }

     
      addUser = e => {
        e.preventDefault();

            const firestore = firebase.firestore();
            const userRef = firestore.collection("users").add({
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            officetype: this.state.officetype,
          });
          
        this.setState({
            name: "",
            email:"",
            mobile:"",
            officetype:"",
        });
        console.log(userRef);
        
      };

     

render(){

    return (
        <div className="">
           <HeaderComponent 
           updateInput={this.updateInput}
           stateemail={this.state.email}
           statename={this.state.name}   
           statemobile={this.state.mobile}   
           stateofficetype={this.state.officetype}
           addUser={this.addUser}
           openModalHandler={this.openModalHandler}
           
           />
               
            
        </div>
    );
    
}
}

export default HomePage;