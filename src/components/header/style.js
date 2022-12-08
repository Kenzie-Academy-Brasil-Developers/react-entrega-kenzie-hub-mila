import styled from "styled-components";

export const StyleHeader = styled.div`
  border-bottom: solid 1px var(--color-grey-2);

  img {
    width: 130px;
  }

  .header {
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    .container {
      max-width: 80%;
    }
  }
`;
