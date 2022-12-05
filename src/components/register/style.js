import styled from "styled-components";

export const StyleRegister = styled.div`
  width: 300px;
  height: 800px;

  .head {
    display: flex;
    justify-content: space-between;
  }

  .title {
    height: 50px;
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
    margin-top: 20px;
  }

  img {
    width: 110px;
    margin-left: 5px;
  }
`;
