import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user =>{
            return <li>{user.username + " " + user.hometown}</li>
          })}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, usersLength: state.users.length}
}



export default connect(mapStateToProps)(Users)
