import React from 'react';
import styled from 'styled-components';
import footerlogo from '../assets/footerlogo.png';

import github from '../assets/github.png';

const Footer = () => {
    return (
        <Container>
            <Left>
                <LeftOne>
                    <Logoimg src={footerlogo} alt=" " />
                    <div className="food">맛보고</div>
                </LeftOne>
                <LeftTwo>
                    <Logoimgone src={github} />
                    <div className="git">Repository</div>
                </LeftTwo>
            </Left>
            <Right>
                {/* &nbsp; */}
                <FE>Front-end: 박경덕</FE>
                <BE>Back-end: 안종현,박영준,최도영</BE>
            </Right>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #e9e9e9;
    border-top: 1px solid #fd8e0d;
    justify-content: space-between;
    margin-top: 40px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 200px;
    margin-bottom: 40px;
`;
const LeftOne = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-start;
    margin-top: 40px;
    margin-left: 44px;
    > div {
        font-size: 16px;
        margin-bottom: 15px;
        padding-top: 6px;
        font-weight: bold;
        margin-left: 10px;
    }
`;

const Logoimg = styled.img`
    width: 28px;
    height: 28px;
`;

const LeftTwo = styled.div`
    display: flex;
    justify-content: space-between;
    > div {
        font-size: 16px;
        margin-left: 10px;
        margin-bottom: 12px;
        padding-top: 4px;
        margin-right: 22px;
    }
`;

const Logoimgone = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 44px;
`;

const Right = styled.div`
    display: flex;
    min-width: 30%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const FE = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
`;

const BE = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-top: 12px;
`;
