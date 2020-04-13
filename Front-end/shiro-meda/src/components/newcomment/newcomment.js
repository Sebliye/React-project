import React,{ Component } from 'react';

class NewComment extends Component{

    state = {
        comment:""
    }

    setComment = (e)=>{
       this.setState({comment:e.target.value});
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
                
                <textarea rows="4" cols="50" onChange={(e)=>this.setComment(e)}></textarea> <br/>
                <button style={btnStyle} onClick={()=>this.props.setComment('1',3,this.state.comment)}>Submit</button>              
            </div>
        );
    }
}

export default NewComment;