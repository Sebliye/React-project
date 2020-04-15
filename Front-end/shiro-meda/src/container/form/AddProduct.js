import React from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxilary';
import Form from '../../components/inputs/Form';

class AddProduct extends React.Component{

    state = {
        name:{
            type:'input',
            lable: 'Product Name',
            fields: {
                value:'',
                type:'text',
                placeholder:'product name'
            },
            valid:null
     },

     price:{
         type:'input',
         lable: 'Price',
         fields: {
             value:'',
             type:'number',
             placeholder:'Price'
         },
         valid:null
     },

     image:{
         type:'input',
         lable: 'Image',
         fields: {
             value:'',
             type:'file',
             name:'file',
             placeholder:'Image'
         },
         valid:null
     }
    }

    inputEventHandler = (event,key)=>{    
        const copyState = { ...this.state }               // dist state
        const distStateKey = { ...copyState[key] };       // dist fname or lname or email....
        const distFields = { ...distStateKey.fields };     //dist fields
       
        if(distFields.type == 'file'){
             let file = event.target.files;      
             let reader = new FileReader();   
             reader.readAsDataURL(file[0]);     
             reader.onload = (event) => {        
             distFields.value = event.target.result;
            //  console.log(distFields.value);
             }
        }else{
            distFields.value = event.target.value;
        }

         distStateKey.fields = distFields;          
         copyState[key] = distStateKey;
        // console.log(copyState[key]);
          this.setState(copyState);
         // console.log(this.state);
}

       formSubmitHandler = (e)=>{
            e.preventDefault();
            const userObj = {};
            for(let key in this.state){
                userObj[key] = this.state[key].fields.value;
                }
           // console.log(userObj);
           axios.post('http://localhost:8081/prd',userObj)
           .then(obj=>{
               alert('successfull');
           });
        }


    render(){    

        return (
            <Form allInputs={this.state}
            changed={this.inputEventHandler}
            clicked={this.formSubmitHandler}
            btn='Add Product'
            />
        );
    }
}

export default AddProduct;