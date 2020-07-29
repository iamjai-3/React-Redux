import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, delAction, subscribeAction } from '../App';  

export default function App1() {

	const value = useSelector(state => state); 
	const dispatch = useDispatch();
 
	return ( 
		<>
			<p>{value.isSubscribed ? "True" : "False"}</p>
			<h2>{value.data}</h2>
			<button disabled = {!value.isSubscribed} onClick={() => dispatch(addAction())}>Add</button> &nbsp;			
			<button disabled = {!value.isSubscribed} onClick={() => dispatch(delAction())}>Delete</button> &nbsp;	
			<button onClick={() => dispatch(subscribeAction())}>{!value.isSubscribed ? "Subscribe" : "Unsubscribe"}</button>	
		</>
	)
}
 