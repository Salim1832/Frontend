import styled from "styled-components";


const StyledFooter = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: white;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
    }
    
    li {
      margin-bottom: 1rem;
    }

    @media screen and (min-width: 992px) {
      footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }


      ul {
        display: flex;
        flex-direction: row;
      }

      li {
        margin: 0 1rem;
      }
    }


`;

export default StyledFooter;