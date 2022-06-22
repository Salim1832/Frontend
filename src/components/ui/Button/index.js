import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    color: white;
    background-color: #06D6A0;
    cursor: pointer;
    border-radius: 10px;

    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    /* Props FULL */
    ${(props) => 
        props.full &&
        css`
        display: black;
        width: 100%;    
    `}
`;

export default Button;