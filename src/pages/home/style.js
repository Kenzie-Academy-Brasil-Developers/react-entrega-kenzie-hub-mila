import styled from "styled-components";

export const StyleHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 95px;
    width: 100%;
  }

  small {
    font-size: 12px;
  }

  .div-line {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: solid 1px var(--color-grey-2);
  }

  .text-dashboard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100px;
    gap: 25px;
    margin-top: 30px;
  }

  .p-text {
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: 1100px) {
    .container {
      max-width: 80%;
    }
  }
`;
