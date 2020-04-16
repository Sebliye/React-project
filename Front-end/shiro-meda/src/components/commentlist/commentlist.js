import React from 'react';
import './commentlist.css';
import DisRating from '../rating/DisplayRating';
const CommentList=(props)=>{

    let  disComments = ()=>{
          let comments = null;
          comments = props.comment.map((c,i)=>{
               if(i%2==0){
                    return (<div key={i} style={{backgroundColor:'lightblue', color:"red"}}>  
                               <p> created At :- {c.createdAt}</p>
                               <p>{c.data}</p>
                           </div>);
               }else{
                    return (<div key={i} style={{backgroundColor:'lightslategrey', color:"red"}}>
                         <p> created At :- {c.createdAt}</p>
                         <p>{c.data}</p>
                     </div>);
               }
          })
          return comments;
     }

return(
     <div>
      
     <div className='comment'>
          {/* <p>{props.rates}</p>  */}
          <DisRating rate={props.rates}/>
          <h3 style={{color:'red'}}>{props.fname+" "}{props.lname}</h3>
          {disComments()}
     </div>
     </div>
)
}
export default CommentList;




