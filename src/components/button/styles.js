import styled from "styled-components";

export const ButtonWrapper = styled.button`
    border: ${props => props.theme === "dark" ? "1px solid black" : "1px solid black"};
    background-color: ${props => props.theme === "dark" ? "#FFFFFF" : "#000000"};
    color: ${props => props.theme === "dark" ? "#000000" : "#FFFFFF"};
    width: auto;
    padding: 15px;
    margin-top: 15px;
    height: auto;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;

`