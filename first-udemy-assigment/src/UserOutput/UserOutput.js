import React, {Component} from 'react';
import UserInput from '../UserInput/UserInput';

class UserOutput extends Component{
	render(){
		return(
			<div className="userOutput">
				<p>paragrāfs 1</p>
				<p>{this.props.value}</p>
				<UserInput changed={this.props.changed}/>
			</div>
		)
	}
}

export default UserOutput;
