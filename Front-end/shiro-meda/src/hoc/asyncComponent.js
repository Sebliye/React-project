import React,{Component} from 'react';

//we have functional component
const AsyncComponent=(importComponent)=>{
     return  class extends Component{
          state={
               component:null
          };
          componentDidMount(){
               importComponent()
               .then(cmp=>{
                    this.setState({component:cmp.default})
               })
          }
          render(){
               const C=this.state.component;
               //if not nul return a component else return null
               return C ?<C {...this.props}/>:null;
          }
     }
}
export default AsyncComponent;
