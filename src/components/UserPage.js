import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UserPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <UserInfo />
      </div>);
  }
}

export default UserPage;