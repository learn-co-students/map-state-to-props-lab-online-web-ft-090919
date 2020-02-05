import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    debugger;
    return (
      <div>
        <ul>
          Users!
          <p>{this.props.users[this.props.users - 1]}</p>
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
