// import styled
import styled from "styled-components";
import { css } from "styled-components";

// buat component button
const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #ffff;
cursor: pointer;

/* akses props variant */
background-color: ${({variant, theme}) => theme.colors[variant] || theme.colors.primary};

/* Props FULL */
${(props) => props.full && 
    css`
    display: block;
    width: 100%;
    `}
`;

// eksport button
export default Button;