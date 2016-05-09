
import React from 'react';
import ReactDom from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatButton from './floatingButton';
import MobileStore from './store/MobileStore';
import * as MobileActions from './action/MobileAction'

const style = {
  margin: 12,
};



class Sections extends React.Component{

	constructor(){
		super();
		this.state = {
			mobiles : MobileStore.getAll()
		}
	}

	getChildContext() {
	    return { muiTheme: getMuiTheme(baseTheme) };
	}

	componentWillMount(){

		MobileStore.on("change",()=>{

		 	console.log(" it is a change !");
		 	this.setState({
		 		mobiles: MobileStore.getAll()
		 	});
		 });
		
		 
	}

	createMobile =()=>{

		MobileActions.createMobile("nexus 6p");
	}

	deleteMobile(){

		MobileActions.deleteMobile("nexus");
	}

	render(){

		var mobileNodes = this.state.mobiles.map(function(ob,index){
			 return (

			 		<div key = {index}>
			 			{ob.name }  ---- {ob.brand};
			 		</div>
			 	);
		})
		return(
			
				<div className = "jumbotron" >
					<div clasName ="container">
						
						<h2>hello webpack and react .. </h2>
						<div className ="row">
							<div className = "col-sm-1">
								<RaisedButton label="Create"
											secondary={true} style ={style} 
											onClick = {this.createMobile}/>
							</div>
							<div className = "col-sm-1">
								<FloatButton flag={true} deleteMob= {this.deleteMobile}/>
							</div>	
							

						</div>
					</div>
					<div className ="container">
						{mobileNodes} 
					</div>		
				</div>
			
		);
	}
}

Sections.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
ReactDom.render(<Sections/>, document.getElementById("App"));