import React from 'react';

class DisRating extends React.Component{

    state = {
        numOfRatedStar:-1,
        colors : ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3']
    }

    componentDidMount(){
        let num = this.props.rate;
        let updateColors = ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3'];
        updateColors = updateColors.map((item,i)=>{
            let color = '';
                if(i <= num-1){
                    color = 'red';         
                }else{
                    color = item;
                }
                return color;
            });
    this.setState({numOfRatedStar:num, colors:updateColors});
    }

   

    render(){      
      let stars = [1,2,3,4,5].map((val,index)=><span  key={val} 
        style={{color:this.state.colors[index], fontSize:'xx-large'}} 
        >  {'\u2605'}  </span>);

        return (
            <div style={{marginLeft:'35%'}}>
                {stars} 
            </div>
        );
    }
}

export default DisRating;