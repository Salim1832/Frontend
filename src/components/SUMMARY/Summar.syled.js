import styled from "styled-components"

const StyledSummary = styled.div`

    padding: 1rem;
    text-align: center;
    h1 {
        color: #06D6A0;
        margin-bottom: 1rem;
    }
    p{
        color: #118AB2; 
        margin-bottom: 1rem;
    }
    img {
        width: 800px;
        height: 400px;
        max-width: 100%;
    }

    @media screen and (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;
        img {
            flex-basis: 100%;
        }
        
    }

    @media screen and (min-width: 992px) {
        max-width: 2560px;
    }
`;

export default StyledSummary;