import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--darkBlue);
    width: 25%;
    min-width: 200px;
    height: 50px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontMed);
    margin: 20px auto;
    transition: all .3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;