import React,{ Component } from 'react';
import propTypes from 'prop-types';
import Inputs from './inputs/Inputs';
class Form extends Component{
    goodFormatToInputs = ()=>{
        const eachTagContaintes = [];
        const distractureState = { ...this.props.allInputs }; 
        console.log(distractureState+"distracurestate")           // distract input state
               for(let key in distractureState){
                   let distEachInput = { ...distractureState[key] };     // distr fname, lname...
                   let distFields = { ...distEachInput.fields };          //dist each tag fields (value, type, placeholder)
                   eachTagContaintes.push({
                       id:key,
                       type: distEachInput.type,
                       lable: distEachInput.lable,
                       fields: distFields
                   });
               }
               return eachTagContaintes;
    }
    render(){
         let inputTag = null;
         inputTag = this.goodFormatToInputs().map(obj=>{
             return (
                    <Inputs key={obj.id} type={obj.type}
                     lable={obj.lable} fields={obj.fields}
                     changed={this.props.changed}
                     fieldKey={obj.id}
                     />
                );
         });
        return (
            <form>
                {inputTag}
                <button type='submit' onClick={this.props.clicked}> {this.props.btn} </button>
            </form>
        );
    }
}
export default Form;