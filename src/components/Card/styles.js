import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Card = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 250px;
    height: 150px;
    border-radius: 6px;
    background-color: #fff;
    padding: 0.5%;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 70%;
      width: 80%;

      input {
        height: 25px;
        padding-left: 7px;
        border-radius: 6px;
        border: 1px solid #caccce;
      }

      .buttons-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: fit-content;

        button {
          border: none;
          color: #fff;
          height: 25px;
          width: 50%;
          margin: 0 3px;
          border-radius: 6px;

          &:hover {
            cursor: pointer;
          }
        }

        button[type='button'] {
          background-color: #888;
        }

        button[type='submit'] {
          background-color: #6dc67f;
        }
      }
    }
  }
`;
