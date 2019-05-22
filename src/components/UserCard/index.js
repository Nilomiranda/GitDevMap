import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import UserContainer from './styles';

const UserCard = () => (
  <UserContainer>
    <img src="https://avatars2.githubusercontent.com/u/25915040?v=4" alt="User avatar" />
    <div className="user-data">
      <strong>Danilo Miranda</strong>
      <small>nilomiranda</small>
    </div>
    <FontAwesomeIcon
      icon={faTimesCircle}
      style={{
        color: '#F00',
        width: '20px',
        height: '20px',
      }}
    />
    <FontAwesomeIcon
      icon={faChevronRight}
      style={{
        color: 'rgba(0,0,0,.2)',
        width: '20px',
        height: '20px',
      }}
    />
  </UserContainer>
);

export default UserCard;
