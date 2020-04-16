class ErrorBoundary  extends React.Component{
state={
 hasError:false,
 message:'something went wrong.Please try again later.Thank you.'
}

componentDidCatch=(error,info)=>{
     this.setState({hasError:true})
}
render() {
 if (this.state.hasError) {
 return <h2>{this.state.message}</h2>
 }   
 else{
     return this.props.children;
   }
 }
}
export default ErrorBoundary;