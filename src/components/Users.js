import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() { 
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
          <br/>
          {this.props.number}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    number: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
