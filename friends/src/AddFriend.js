import React, { Component } from 'react';
import Axios from 'axios';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }
  changeHandler = event => {
    event.preventDefault();
    // let name = event.target.name;
    // let value = event.target.value;

    this.setState({friend: { ...this.state.friend, 
      [event.target.name]: event.target.value}})
  }

  addFriend = (e) => {
    e.preventDefault();
    
    this.props.postFriend(this.state.friend)
    this.setState({friend: {name: "", age: "", email: ""}})
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.addFriend}>
          <fieldset>
            <legend>Add New Friend</legend>
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" id="name" value={this.state.friend.name} onChange={this.changeHandler}/>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" value={this.state.friend.age} onChange={this.changeHandler}/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={this.state.friend.email} onChange={this.changeHandler}/>
            <input type="submit" value="Add Friend"/>
            <input type="reset" value="Clear"/>
          </fieldset>
        </form>
      </div>
     );
  }
}
 
export default AddFriend;