import React,{ Component } from 'react';
import Rate from '../../components/rating/Rating';
class NewComment extends Component{

    state = {
        comment:""
    }

    // setComment = (e)=>{
    //    this.setState({comment:e.target.value});
    // }
    setComment = (pid,uid,comment)=>{
        const copyprd = [ ...this.state.products ];
        const index = copyprd.findIndex(p=> p.id === pid );
        const prd = copyprd.filter(item=>item.id===pid)[0];
              prd.comments.push({userId:uid, text:comment});
              copyprd[index]=prd;
          this.setState({products:copyprd});
           console.log(copyprd);
   }

   setRating = (pid,uid,rate)=>{
     const copyprd = [ ...this.state.products ];
     const index = copyprd.findIndex(p=> p.id === pid );
     const prd = copyprd.filter(item=>item.id===pid)[0];
           prd.rates.push({userId:uid, rate:rate});
           copyprd[index]=prd;
           this.setState({products:copyprd});
          //  console.log(copyprd);
   }

    render(){

        const btnStyle = { 
            backgroundColor: '#D3D3D3',
            border: 'none',
            color: 'red',
            padding: '20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '50px',
            marginLeft:'300px',
            marginTop:'2px'
        }
        
        return (
            <div style={{marginLeft:'35%', marginTop:'100px'}}>
                <Rate setRating={this.setRating}/>
                <textarea rows="4" cols="50" onChange={(e)=>this.setComment(e)}></textarea> <br/>
                <button style={btnStyle} onClick={()=>this.props.setComment('1',3,this.state.comment)}>Submit</button>              
            </div>
        );
    }
}

export default NewComment;