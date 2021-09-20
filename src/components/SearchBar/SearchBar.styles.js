import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: var(--darkBlue);
    padding: 0 20px;

    @media screen and (max-width: 768px){
            height: 60px;
        }
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 50px;
    background: var(--darkGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 30px;

        @media screen and (max-width: 768px){
            width: 25px;
            top: 8px;
        }
    }

    input {
        font-size: var(--fontMed);
        position: absolute;
        left: 0;
        margin: 5px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }

        @media screen and (max-width: 768px){
            height: 28px;
        }
    }

    @media screen and (max-width: 768px){
            height: 40px;
        }
`;