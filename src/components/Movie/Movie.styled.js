import styled from "styled-components";


const StyledMovie = styled.div`
    margin-bottom: 1rem;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 2rem;
    }

    h3 {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    p{
        margin-bottom: 1rem;
        color: black;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
    }

    @media screen and (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`;

export default StyledMovie;