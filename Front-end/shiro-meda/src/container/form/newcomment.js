import React,{ Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxilary';
import Rate from '../../components/rating/Rating';
import Form from '../../components/inputs/Form';
class NewComment extends Component{

    state = {
        comment:{
            type:'textarea',
            lable: 'Comment',
            fields: {
                value:'',
                type:'text',
                placeholder:'comment'
            },
            valid:null
        }
    }

            inputEventHandler = (event,key)=>{    
                const copyState = { ...this.state }               // dist state
                const distStateKey = { ...copyState[key] };       // dist fname or lname or email....
                const distFields = { ...distStateKey.fields };     //dist fields
            
                distFields.value = event.target.value;
                distStateKey.fields = distFields;          
                copyState[key] = distStateKey;
                
                this.setState(copyState);
        }

        formSubmitHandler = (e)=>{
            e.preventDefault();
            const userObj = {};
            for(let key in this.state){
                userObj[key] = {data:this.state[key].fields.value};
            //  this.validation(key , this.state[key].fields.value);      localStorage.getItem("taken")
            }
            userObj['pid']=this.props.match.params.pid;
            
            let token = localStorage.getItem('taken');
          return axios.post('http://localhost:8081/cmt',userObj,{
                headers: {
                    'Authorization': `${token}`
                  }                
            })
            .then(obj=>{
               alert(obj.data.status);
              console.log(obj);
            }).catch(e=>console.log(e));
        }

        setRating = (rate)=>{
            let temp = {pid:this.props.match.params.pid, rate:rate};
            let token = localStorage.getItem('taken');
            return axios.post('http://localhost:8081/rate',temp,{
                  headers: {
                      'Authorization': `${token}`
                    }                
              })
              .then(obj=>{
                 alert(obj.data.status);
                console.log(obj);
              }).catch(e=>console.log(e));
        }

    render(){
     
        return (
               <Aux>
                   <Rate setRating={this.setRating}/>
                   <Form allInputs={this.state}
                   changed={this.inputEventHandler}
                   clicked={this.formSubmitHandler}
                   btn='Submit'
                   />
               </Aux>
        );
     
    }
}

export default NewComment;

// setComment = (pid,uid,comment)=>{
//     const copyprd = [ ...this.state.products ];
//     const index = copyprd.findIndex(p=> p.id === pid );
//     const prd = copyprd.filter(item=>item.id===pid)[0];
//           prd.comments.push({userId:uid, text:comment});
//           copyprd[index]=prd;
//       this.setState({products:copyprd});
//        console.log(copyprd);
// }





   // const btnStyle = { 
        //     backgroundColor: '#D3D3D3',
        //     border: 'none',
        //     color: 'red',
        //     padding: '20px',
        //     fontSize: '16px',
        //     cursor: 'pointer',
        //     borderRadius: '50px',
        //     marginLeft:'300px',
        //     marginTop:'2px'
        // }
        
        // return (
        //     <div style={{marginLeft:'35%', marginTop:'100px'}}>
        //         <Rate setRating={this.setRating}/>
        //         <textarea rows="4" cols="50" onChange={(e)=>this.setComment(e)}></textarea> <br/>
        //         <button style={btnStyle} onClick={()=>this.props.setComment('1',3,this.state.comment)}>Submit</button>              
        //     </div>
        // );