import React from 'react';
import axios from 'axios';
//import Input from '../inputs/Inputs';
import Aux from '../../hoc/Auxilary'
import Form from '../../components/inputs/Form'
class SignUp extends React.Component{
   state = {
      firstname:{
             type:'input',
             lable: 'First Name',
             fields: {
                 value:'',
                 type:'text',
                 placeholder:'first name'
             },
             valid:null
      },

      lastname:{
          type:'input',
          lable: 'Last Name',
          fields: {
              value:'',
              type:'text',
              placeholder:'last name'
          },
          valid:null
      },

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
      },

      role:{
          type:'select',
          lable: 'Register as ',
          fields: {
              value:'',
              type:['admin','customer']
          }
      }
  }

  inputEventHandler = (event,key)=>{    
          const copyState = { ...this.state }               // dist state
          const distStateKey = { ...copyState[key] };       // dist fname or lname or email....
          const distFields = { ...distStateKey.fields };     //dist fields
        
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
          // this.validation(key , this.state[key].fields.value);
          // console.log(this.state[key].fields.value);
       }

      // let token = localStorage.getItem("taken");
       
       axios.post('http://localhost:8081/sign-up',userObj)
       .then(obj=>{
           console.log(obj);
       });
  }


//   validation = (tagname,value)=>{
//       let temp = null;
//          switch(tagname){
//                   case 'fname':
//                   value.trim() !== ''? temp={key:'fname',msg:'first name is required'} : temp=null;
//                   break;
//                   case 'lname':
//                   value.trim() == ''? temp={key:'lname',msg:'last name is required'} : temp=null;
//                   break;
//                   case 'email':
//                   !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)? temp={key:'email',msg:'invalid email'} : temp=null;
//                   break;
//                   case 'password':
//                   value.length <= 6? temp={key:'password',msg:'password is too short'} : temp=null;
//                   break;
//                   default:
//                   break;
//             }
//           //  console.log(value);
//      if(temp){
//       const copyState = { ...this.state };
//       const distStateKey = { ...copyState[temp.key] }; 
//       distStateKey.valid = temp;
//       copyState[temp.key] = distStateKey;
//       this.setState(copyState);
//      }
//   }
     
  render(){
      localStorage.setItem("taken", ''); 
      return (

          <Aux>                                 {/* all form containers have to pass allInputs={this.state} for form component*/}
              <Form allInputs={this.state}                                   
               changed={this.inputEventHandler}
               clicked={this.formSubmitHandler}
               btn='Signup'
               />    
         </Aux>
      );
  }
}
export default SignUp;