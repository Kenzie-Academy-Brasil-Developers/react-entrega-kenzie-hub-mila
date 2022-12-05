import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    
    :root {
        --font-title-1: 1.75rem;
        --font-title-2: 1.5rem;
        --font-title-3: 1.25rem;
        --font-title-4: 0.75rem;
        --font-headline: 1rem;
        --font-small: 0.7rem;

        --color-primary: #fd377e;
        --color-primary-2: #e34981;
        --color-primary-negative: #59323F;

        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
    }

    body{
        display: flex;
        justify-content: center;
        margin-top: 30px;
        background-color: var(--color-grey-4);
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
        color: var(--color-grey-0);
        padding: 8px 15px;
        border-radius: 4px;
    }

    input{
        padding: 8px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        border: none;
        outline: none;
        border-radius: 4px;
    }

    select{
        padding: 8px;
        color: var(--color-grey-1);
        background-color: var(--color-grey-2);
        border: none;
        outline: none;
        border-radius: 4px;
    }

    label{
        font-size: var(--font-small);
        color: var(--color-grey-0);
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .button-pink{
        background-color: var(--color-primary-2);
        margin-top: 25px;
    }

    .button-grey{
        background-color: var(--color-grey-1);
        margin-top: 20px;
    }

    .button-negative{
        background-color: var(--color-primary-negative);
        margin-top: 20px;
    }

    .button-dark{
        background-color: var(--color-grey-3);
    }

    h3{
        color: var(--color-grey-1);
    }

    p{
        color: var(--color-grey-0);
        font-size: 16px;
        font-weight: 600;
    }

    small{
        font-size: 11px;
        color: var(--color-grey-1);
    }
`;
