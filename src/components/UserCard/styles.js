import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 8px;
  padding: 8px 0;
  align-items: center;

  .user-data {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  small {
    color: #888;
  }
`;

export default UserContainer;
