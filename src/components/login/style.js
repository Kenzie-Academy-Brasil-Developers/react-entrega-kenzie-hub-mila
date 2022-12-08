import styled from "styled-components";

export const StyleLogin = styled.div`
  margin-top: 90px;
  width: 300px;
  height: 800px;

  .head {
    display: flex;
    justify-content: center;
  }

  .title {
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    margin-top: 30px;
  }

  img {
    width: 110px;
    margin-left: 5px;
  }

  small {
    text-align: center;
    margin-top: 20px;
  }
`;
