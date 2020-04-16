import React,{ Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxilary';
import Form from '../../components/inputs/Form';

class Login extends Component{

    state=  {
        email:{
            type:'input',
            lable: 'Email',
            fields: {
                value:'',
                type:'email',
                placeholder:'email'
            },
            valid:null
        },

        password:{
            type:'input',
            lable: 'password',
            fields: {
                value:'',
                type:'password',
                placeholder:'password'
            },
            valid:null
        }
    }

    //event handler
    inputEventHandler = (event,key)=>{    
        const copyState = { ...this.state }               // dist state
        const distStateKey = { ...copyState[key] };       // dist fname or lname or email....
        const distFields = { ...distStateKey.fields }; 
        console.log(distFields)    //dist fields
         distFields.value = event.target.value;
         distStateKey.fields = distFields;          
         copyState[key] = distStateKey;
          this.setState(copyState);
}

formSubmitHandler = (e)=>{
    e.preventDefault();
    const userObj = {};
    for(let key in this.state){
        userObj[key] = this.state[key].fields.value;
      //  this.validation(key , this.state[key].fields.value);      localStorage.getItem("taken")
    }
    
    axios.post('http://localhost:8081/login',userObj)
    .then(obj=>{
        localStorage.setItem("taken", obj.data.data);
    });
}

    render(){

        return (
            <Aux>
                <Form allInputs={this.state}
                changed={this.inputEventHandler}
                clicked={this.formSubmitHandler}
                btn='Login'/>
            </Aux>
        )
    }


}

export default Login;