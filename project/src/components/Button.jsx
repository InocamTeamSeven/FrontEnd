import React from 'react';
import { styled } from 'styled-components';

const StButton = styled.button`
    margin-right: 10px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    color: ${({ color }) => color};
    /* background-color: ${({ bgcolor }) => bgcolor}; */
    border-radius: 8px;
    cursor: pointer;
    /* border: ${({ border }) => border}; */

    /* &:hover {
        background-color: ${({ hovercolor }) => hovercolor};
    } */
`;

function Button({ size, color, name, onClick }) {
    if (color === 'green') {
        if (size === 'large') {
            return (
                <StButton
                    width="200"
                    height="50"
                    color="yellow"
                    onClick={onClick}
                >
                    {name}
                </StButton>
            );
        } else if (size === 'medium') {
            return (
                <StButton
                    width="130"
                    height="45"
                    color="blue"
                    onClick={onClick}
                >
                    {name}
                </StButton>
            );
        } else if (size === 'smallMedium') {
            return (
                <StButton
                    width="110"
                    height="40"
                    color="black"
                    onClick={onClick}
                >
                    {name}
                </StButton>
            );
        } else if (size === 'small') {
            return (
                <StButton width="50" height="40" color="red" onClick={onClick}>
                    {name}
                </StButton>
            );
        }
    }
}
export default Button;
