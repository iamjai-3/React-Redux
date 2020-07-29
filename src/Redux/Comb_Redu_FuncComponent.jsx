import React from 'react';
import {connect} from 'react-redux';
import { addAction, delAction, subscribeAction } from '../App';  

function CombreduFuncComponent(props) { 
	
	return ( 
		<>
			<p>{props.isSubscribed ? "True" : "False"}</p>
			<h2>{props.data}</h2>
			<button disabled = {!props.isSubscribed} onClick={() => props.add()}>Add</button> &nbsp;			
			<button disabled = {!props.isSubscribed} onClick={() => props.del()}>Delete</button> &nbsp;	
			<button onClick={() => props.sub()}>{!props.isSubscribed ? "Subscribe" : "Unsubscribe"}</button>	
		</>
	)
}

const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = (dispatch) => { 
	return {
		add: () => dispatch(addAction()),
		del: () => dispatch(delAction()),
		sub: () => dispatch(subscribeAction())
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (CombreduFuncComponent);