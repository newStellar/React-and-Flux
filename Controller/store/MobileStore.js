import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import _ from "lodash";


class MobileStore extends EventEmitter{

	constructor(){

		super();

		this.mobiles = [ 
			{name:"nexus",brand: "google"},
			{name: "edge s7",brand:"Samsugn"},
			{name: "redmi note 3",brand: "xiamoi"},
			{name: "HTC one",brand: "HTC"}
		];
	}

	createMobile=(name)=>{

		this.mobiles.push({
			name: name,
			brand: "google"
		});
		this.emit("change");
	}

	deleteMobile=(text)=>{

		console.log("deleting mobile");
		var i=0;
		var removeItems = _.remove(this.mobiles, function(text){


			return this.mobiles[i++].name == "nexus";

		}.bind(this));

		i=0;

		console.log(this.mobiles+ "---- removed->"+ removeItems);
		this.emit("change");

	}

	getAll=()=>{

		return this.mobiles;
	}
	handleActions=(action)=>{
		switch(action.type){

			case "CREATE_MOBILE":{
				this.createMobile(action.text);
				break;
			}

			case "DELETE_MOBILE": {
				this.deleteMobile(action.text);
			}
		}	
	}

}

const mobileStore = new MobileStore;

//window.mobileStore = mobileStore;
dispatcher.register(mobileStore.handleActions.bind(mobileStore));

window.dispatcher = dispatcher;
export default mobileStore;