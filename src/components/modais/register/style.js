import styled from "styled-components";

export const StyleModalRegister = styled.div`
  display: flex;
  justify-content: center;
  img {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    opacity: 60%;
  }

  .modalCard {
    position: fixed;
    top: 160px;
    width: 300px;
    height: 250px;
  }

  .modalTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-2);
    height: 45px;
    border-radius: 4px 4px 0 0;
  }

  .modalInfo {
    padding: 12px 25px 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--color-grey-3);
    height: 100%;
    text-align: left;
  }
`;
