import { keyframes } from "styled-components";
import styled from "styled-components";


export const AppStyle = styled.div`
    text-align: center;
    color: ${props => props.theme === "dark" ? "white" : "black"};
    background-color: ${props => props.theme === "light" ? "white" : "black"};
`

export const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-float infinite 3s ease-in-out;
  }
`

export const AppHeader = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`

export const AppLink = styled.div`
    color: rgb(112, 76, 182);
`
export const AppLogoFloat = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0px);
    }
`

