import styled from "styled-components";

const StyledGlobalSection = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #ffff;

    h2 {
        color: #06D6A0;
        margin-bottom: 1rem;
    }

    p {
        color: #118AB2; 
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;

        .global__container{
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        }
        
    }

    @media screen and (min-width: 992px) {
        max-width: 2560px;
    }
`;

export default StyledGlobalSection;