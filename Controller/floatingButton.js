import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';

class FloatingActionButtonExampleSimple  extends React.Component{

	constructor(){

		super();
		this.state={

			style: {

				marginLeft: 20,
  				color: 'black',
  			
			},
			bg: "red"
		};
	}
	changeColor=()=>{

		this.setState({

			style: {

				marginLeft: 23,
  				color: "white",
  		
			}

		
		});

	    console.log("-->mouse enter ");

	}
	previousPosition =()=>{

		this.setState({

			style: {

				marginLeft: 20,
  				color: 'black',
  				
			}
	
			
		});

	    console.log("-->mouse leave ");

	}	
	render(){

		var contentNode;	
		if(this.props.flag == true)	contentNode = <ContentSend/>;
		else {
			contentNode = <ContentAdd />
		}
		return (

			<div onClick= {this.props.deleteMob}>
			    <FloatingActionButton   backgroundColor = {this.state.bg}
			    						style = {this.state.style} 
			    						zDepth ={1} 
			    						onMouseEnter= {this.changeColor}
			    						onMouseLeave = {this.previousPosition}>
			      {contentNode}
			    </FloatingActionButton>
		    </div>
		);
	}
  
};

export default FloatingActionButtonExampleSimple;