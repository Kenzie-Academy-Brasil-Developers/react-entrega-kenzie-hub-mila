import styled from "styled-components";

export const StyleCard = styled.div`
  .headCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    height: 30px;
    margin-top: 20px;
  }

  img {
    width: 35px;
    cursor: pointer;
  }

  p {
    font-size: 16px;
  }

  .mainCard {
    background-color: var(--color-grey-3);
    height: 400px;
    margin-top: 20px;
    padding: 30px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .miniCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    background-color: var(--color-grey-4);
    padding: 0 20px 0 20px;
    margin-bottom: 20px;
  }

  .editCard {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .trash {
    width: 25px;
    cursor: pointer;
  }

  .title {
    font-size: 14px;
  }
`;
