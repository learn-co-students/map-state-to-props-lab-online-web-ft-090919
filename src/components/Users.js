import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users ? this.props.users.map(user => <li>{user.username} - {user.hometown}</li>) : null}
        </ul>
        Total Users: {this.props.users.length}
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
