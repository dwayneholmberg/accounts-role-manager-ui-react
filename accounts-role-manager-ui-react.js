import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Users from 'meteor/othermachines:accounts-role-manager';

class AccountsRoleManagerUIReact extends Component {
  constructor(props) {
    super(props);
    this.users = Users();
  }
  render() {
    return (
      <h1>AccountsRoleManagerUIReact ({this.users.count()})</h1>
    );
  }
}

export default AccountsRoleManagerUIReact;
