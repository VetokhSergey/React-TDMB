import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width:  720px;
    transition: all .3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb .5s;

    :hover {
        opacity: 0.8;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
export const MovieTitle = styled.div`
    display: flex;
    justify-content: center;
    color: var(--darkGrey);
    text-decoration: transparent;
    font-size: var(--fontMed);
    font-weight: 600;
`;
