import styled from "styled-components";

const StyledHero = styled.div`
    padding: 1rem;
    text-align: center;

    h2 {
        color: #4361EE;
        margin-bottom: 1rem;
    }

    h3 {
        color: #F72585;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
        
    }

    a {
        text-decoration: none;
    }
    
    img {
        margin-top: 1rem;
        max-width: 100%;
        border-radius: 25px;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
    }

    @media screen and (min-width: 992px) {
        text-align: left;
        max-width: 1200px;
        margin: 0 auto;
        
        
        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        div {
            flex-basis: 60%;
        }
       
    }
`;

export default StyledHero;