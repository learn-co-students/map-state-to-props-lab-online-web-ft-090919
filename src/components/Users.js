import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  displayUsers() {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>;
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.userCount}</p>

        <ul>
          Users!
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
