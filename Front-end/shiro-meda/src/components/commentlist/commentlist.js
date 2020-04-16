import React from 'react';
import './commentlist.css';
import DisRating from '../rating/DisplayRating';
const CommentList=(props)=>{

    let  disComments = ()=>{
          let comments = null;
          comments = props.comment.map((c,i)=>{
               if(i%2==0){
                    return (<div key={i} style={{backgroundColor:'lightred', color:"Black",fontSize:'xx-large'}}>  
                               <p> created At :- {c.createdAt}</p>
                               <p>{c.data}</p>
                           </div>);
               }else{
                    return (<div key={i} style={{backgroundColor:'lightgrey', color:"black",fontSize:'xx-large'}}>
                         <p> created At :- {c.createdAt}</p>
                         <p>{c.data}</p>
                     </div>);
               }
          })
          return comments;
     }
return(
     <div className='comment'>
          {/* <p>{props.rates}</p>  */}
          <DisRating rate={props.rates}/>
          <h3 style={{color:'Black',fontSize:'xx-large'}}>Comment BY: {props.fname+" "}{props.lname}</h3>
          {disComments()}
     </div>
    
)
}
export default CommentList;




