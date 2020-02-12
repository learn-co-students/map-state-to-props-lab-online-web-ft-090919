import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        
          Users!
          {this.props.users.map(users => (users.username))}
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
