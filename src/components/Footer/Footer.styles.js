import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--darkBlue);
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    @media screen and (max-width: 820px) {
        height: 80px;
    }
`;

export const Content = styled.div`
    color: var(--white);
    text-align: center;
    font-size: var(--fontSmall);
    @media screen and (max-width: 820px) {
        font-size: 15px;
    }
`;