import styled from "styled-components";

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 897px;
  }

  .mainCard {
    background-color: var(--color-grey-3);
    height: 400px;
    margin-top: 20px;
    padding: 30px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
  }

  .miniCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
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

  @media (max-width: 1100px) {
    .container {
      max-width: 80%;
    }

    .li {
      width: 150%;
    }

    .headCard {
      width: 150%;
    }

    .mainCard {
      width: 100%;
    }
  }
`;
