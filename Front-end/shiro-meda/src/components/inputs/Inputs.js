import React from 'react';

import Aux from '../../hoc/Auxilary';

const inputs = (props)=>{
    let inputTag = null;
    switch(props.type){
        case ('input'):
            inputTag = (
                <div>
                    <label> {props.lable} </label>
                    <input { ...props.fields } onChange={(e)=>props.changed(e,props.fieldKey)}/>
                </div>
            )
         break;
         case('textarea'):
            inputTag = (
                <div>
                    <label> {props.lable} </label>
                    <textarea cols='50' rows='10' { ...props.fields } onChange={(e)=>props.changed(e,props.fieldKey)}></textarea>
                </div>
            )
        break;
        case ('select'):
            let option = null; const opArr= [...props.fields.type ];
            option = opArr.map(val=>{
                return (
                     <option value={val} key={val}>  {val.toUpperCase()} </option>
                );
            });
            inputTag = (
                <div>
                    <label> {props.lable} </label>
                    <select { ...props.fields } onChange={(e)=>props.changed(e,props.fieldKey)}>
                        {option}
                    </select>
                </div>
            )
         break;
         default:
             inputTag = <p> no input fields </p>
    }
    return (
        <Aux>           
            {inputTag}
        </Aux>
    );
}
export default inputs;