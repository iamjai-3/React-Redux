import { addAction, delAction, subscribeAction } from '../App';  
import React from 'react'
import {connect} from 'react-redux';

class CombinedReducer extends React.Component {
	// constructor(props) {
	// 	super(props)	
		
	// }	
	render() {
		return (
			<>
				<p>{this.props.isSubscribed ? "True" : "False"}</p>
				<h2>{this.props.data}</h2>
				<button disabled = {!this.props.isSubscribed} onClick={() => this.props.add()}>Add</button> &nbsp;			
				<button disabled = {!this.props.isSubscribed} onClick={() => this.props.del()}>Delete</button> &nbsp;	
				<button onClick={() => this.props.sub()}>{!this.props.isSubscribed ? "Subscribe" : "Unsubscribe"}</button>	
			</>
		)
	}
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
export default connect(mapStateToProps, mapDispatchToProps) (CombinedReducer);

