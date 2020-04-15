import React from 'react';
import NewComment from '../../components/newcomment/newcomment';
import Aux from '../../hoc/Auxilary';
import Rating from '../../components/rating/Rating'
import CommentList from '../../components/commentlist/commentlist';
import { Link } from 'react-router-dom';

class Comment extends React.Component{

state={
     products:[
     { id: '1', type: 'Kemis', comments:[{userId:1, text: 'comment from the krmis'}], rates:[{userId:1, rate: 2}]},
	{ id: '2', type: 'shurt', comments:[{userId:1, text: 'comment from the array'}], rates:[{userId:3, rate: 4}]}
     ]
}

//    setComment = (pid,uid,comment)=>{
//         const copyprd = [ ...this.state.products ];
//         const index = copyprd.findIndex(p=> p.id === pid );
//         const prd = copyprd.filter(item=>item.id===pid)[0];
//               prd.comments.push({userId:uid, text:comment});
//               copyprd[index]=prd;
//           this.setState({products:copyprd});
//            console.log(copyprd);
//    }

//    setRating = (pid,uid,rate)=>{
//      const copyprd = [ ...this.state.products ];
//      const index = copyprd.findIndex(p=> p.id === pid );
//      const prd = copyprd.filter(item=>item.id===pid)[0];
//            prd.rates.push({userId:uid, rate:rate});
//            copyprd[index]=prd;
//            this.setState({products:copyprd});
//           //  console.log(copyprd);
//    }

render(){
     const prod=this.state.products.map((val)=>{
          return <CommentList rates={val.rates[0].rate} type={val.type} comment={val.comments[0].text} ></CommentList>
     })
return(

<Aux>
     <button style={{backgroundColor:'grey'}}>write Your Comment here</button>
     {/* <Rating setRating={this.setRating}/>
     <NewComment setComment={this.setComment}/> */}
     {prod}     
</Aux>
)
}
}
export default Comment;
