import React from 'react'
import {connect} from 'react-redux';

class Thunk1 extends React.Component {
	// constructor(props) {
	// 	super(props)	
	 	
	// }	
	render() {
		return (
			<>
				<h3>** Redux Thunk <span role="img" aria-label="rocket">🚀</span> **</h3>
				<p>Loading: {this.props.loading ? 'True' : 'False'}</p>
				<p>Data: {JSON.stringify(this.props.data)}</p>
				<p>Error: {this.props.error}</p>
				<button onClick={() => this.props.login()}>Submit</button>
			</>
		)
	}
}

const middlware = () => {
	console.log("pressed");
	return dispatch => {
		dispatch({type: 'LOGIN_START'});

		fetch('https://typicode.com/todos/1')
		.then(response => response.json())
		.then(json => dispatch({type: 'LOGIN_SUCCESS', payload: json}))
		.catch(err => dispatch({type: 'LOGIN_FAIL', error: "Error"}))

	}
}
const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = (dispatch) => { 
	return {
		login: () => dispatch(middlware())		
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Thunk1);

