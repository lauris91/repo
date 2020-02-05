import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {
  state = {
    userNames: [
      {id:'fsdf', value: 'randomUser'},
      {id:'sdfd', value: 'randomUser1'},
      {id:'dfet', value: 'randomUser2'}
    ]
  }

  userNameHandler = (event, id) =>{
    const updatedUserNames = [...this.state.userNames];



    // const userNames = [...this.state.userNames];
    this.setState({
      updatedUserNames: [
        {value: event.target.value},
        {value: 'randomUser1'},
        {value: 'randomUser2'}
      ]
    })
  }

  render(){
    return (
    <div className="App">
        {this.state.userNames.map((userName, index) => {
          return(
            <UserOutput
              key={userName.id}
              changed={(event) => this.userNameHandler(event, userName.id)}>
              {userName.value}
            </UserOutput>
          )
        })}
        
        
    </div>
  );  
  }
  
}

export default App;


// 

// <UserOutput changed={(event) => this.userNameHandler(event)}>
//           {this.state.userNames[1].value}
//         </UserOutput>
//         <UserOutput changed={(event) => this.userNameHandler(event)}>
//           {this.state.userNames[2].value}
//         </UserOutput>