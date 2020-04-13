import React from 'react';

const star = (props)=>{
   
   const clicked = ()=>{
         return ()=>{
            props.starClick(props.rating,'click');
            return props.setRating('1',2,props.rating)};
   }

   const mouseOver = ()=>{
    return ()=>props.starClick(props.rating,'over');
       
   }
    return (
    <span style={{color:props.color, fontSize:'xx-large'}} 
    onClick={clicked()}
    onMouseOver={mouseOver()}
    >{'\u2605'}</span>
    );
}

export default star;