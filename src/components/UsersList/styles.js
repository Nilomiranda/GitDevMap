import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #fff;
  height: 90%;
  width: 20%;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;

  > * {
    border-top: 1px solid #c9cacc;
  }

  div:first-child {
    border-top: none;
  }
`;

export default ListContainer;
