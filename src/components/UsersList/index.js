import React from 'react';

import UserCard from '../UserCard';

import ListContainer from './styles';

const UsersList = () => (
  <ListContainer>
    <UserCard />
    <UserCard />
    <UserCard />
  </ListContainer>
);

export default UsersList;
