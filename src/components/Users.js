import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => 
      <li key={index}>{user.username}</li>)
    return (
      <div>
        
          Users!
          {users}
          {this.props.users.length}
        
      </div>
    )
  }
}

//add mapStateToProps herem  

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
