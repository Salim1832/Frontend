import styled from "styled-components";
const StyledHello = styled.div`
    padding: 1rem;
    text-align: center;
    h2 {
      color: #06D6A0;
      margin-bottom: 1rem;
    }
    .hello__info {
      color: #118AB2; 
      margin-bottom: 1rem;
    }

    .hello__description {
        margin-bottom: 1rem;
    }

    img {
      max-width: 100%;
      width: 600px;
      height: 400px;
      border-radius: 25px;
    }
    @media screen and (min-width: 768px) {
        text-align: left;
        max-width: 1200px;
        margin: 0 auto;

        .hello {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        }

      .hello__left {
          flex-basis: 60%;
        }

      .hello__right {
          flex-basis: 40%;
       }
        
    }

    @media screen and (min-width: 992px) {
        max-width: 2560px;
    }

  `;

  export default StyledHello;