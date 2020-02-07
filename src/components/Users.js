import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    let users = this.props.users.map( (user, idx) => <li key={idx}>{user.username}</li> )

    return (
      <div>
        <ul>
          {this.props.usersLength} Users!
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    users: state.users,
    usersLength: state.users.length
   }
}

export default connect(mapStateToProps)(Users)
