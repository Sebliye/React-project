import React from 'react';
import './commentlist.css';
import ErrorBoundary from '../../container/error/errorboundary'
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
     <ErrorBoundary>
       <div>
          <div className='comment'>
          <h3 style={{color:'red'}}>{props.fname+" "}{props.lname}</h3>
          <p>{props.rates}</p> 
          {disComments()}
     </div>
     </div>
     </ErrorBoundary>
)
}
export default CommentList;




