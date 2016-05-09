import dispatcher from "../dispatcher";

export function createMobile(text){
	console.log("action working");
	dispatcher.dispatch({
		type: "CREATE_MOBILE",
		text: text
	});
}

export function deleteMobile(text){
	dispatcher.dispatch({
		type: "DELETE_MOBILE",
		text: text
	});
}