import React from 'react';
import Star from './Star';

class Rating extends React.Component{

    state = {
        numOfRatedStar:-1,
        colors : ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3']
    }

    starClick = (num,click)=>{
        let updateColors = ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3'];
            updateColors = updateColors.map((item,i)=>{
                let color = '';
                    if(i <= num-1){
                        if(click === "click"){
                            color = 'red';
                        }else if(click === 'over'){
                            color = '#FFD700';
                        }
                        
                    }else{
                        color = item;
                    }
                    return color;
                });
        this.setState({numOfRatedStar:num, colors:updateColors});
    }

    render(){

      let stars = [1,2,3,4,5].map((val,index)=><Star key={val} 
        setRating={this.props.setRating} 
        rating={val} 
        starClick={this.starClick}
        color = {this.state.colors[index]}
        />);

        return (
            <div style={{marginLeft:'35%'}}>
               {stars}
            </div>
        );
    }
}

export default Rating;