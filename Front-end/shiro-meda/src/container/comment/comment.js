import React from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxilary';
import Rating from '../../components/rating/Rating'
import CommentList from '../../components/commentlist/commentlist';
import { Link } from 'react-router-dom';

class Comment extends React.Component{

state={
     products: []
}

    componentDidMount(){
         let pid = this.props.match.params.pid;
     axios.get(`http://localhost:8081/cmt/`+pid).then((response) => {
         // console.log(response.data);
         this.setState({ products: response.data});
       })
    }



render(){
     const prod=this.state.products.map((val,i)=>{
          return <CommentList key={i} rates={val.rate} fname={val.firstname} lname={val.lastname} comment={val.comment} ></CommentList>
     })

return(

<Aux>  
     <Link to={'/new-cmt/'+this.props.match.params.pid} style={{backgroundColor:'grey'}}>write Your Comment here</Link>
     {/* <Rating setRating={this.setRating}/> */}
     {prod}      
</Aux>
)
}
}
export default Comment;



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