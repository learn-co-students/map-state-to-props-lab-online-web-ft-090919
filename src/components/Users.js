import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}>{user.username}</li>
    ));

    let count = this.props.users.length;

    return (
      <div>
        <ul>
          Users!
          <p>{users}</p>
          <p>{count}</p>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
