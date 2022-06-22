import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: white;

    h1  {
      margin-bottom: 1rem;
      width: 100%;
    }
    ul {
      list-style: none;
    }

    li {
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: white;
    }

    @media screen and (min-width: 768px) {
      .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      h1 {
        margin: 0;
      }

      ul {
        display: flex;
        flex-direction: row;
      }

      li{
        margin: 0 1rem;
      }
        
    }

    @media screen and (min-width: 992px) {
        max-width: 2560px;
    }
`;

export default StyledNavbar;