import React from 'react';
import Button from './Button';
// import styled from 'styled-components';

// const StButtonContainer = styled.div`
// margin: 10px;
// `;

function Buttons() {
    return (
        <div>
            <Button color="green" size="large" name="large" />
            <Button color="green" size="medium" name="medium" />
            <Button color="green" size="smallMedium" name="smallMedium" />
            <Button color="green" size="small" name="small" />
        </div>
    );
}

export default Buttons;
