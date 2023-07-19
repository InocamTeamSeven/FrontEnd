import styled from 'styled-components';
// import LocalNav from '../features/LocalNav';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { onLoginAPI } from '../api/lists';

function Header() {
    console.log('Header');
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const check = localStorage.getItem('authorization');
        setIsLogin(check !== undefined ? true : false);
    }, []);

    const changeLogin = () => {
        navigate('login');
    };

    const homeLinkHandler = () => {
        navigate('/');
    };

    return (
        <HeaderContainer>
            <HeaderNav>
                <GoHome onClick={homeLinkHandler}>{`Test`}</GoHome>
                {isLogin ? (
                    <LoginButton onClick={changeLogin} children={'Log In'} />
                ) : (
                    <LoginButton onClick={changeLogin} children={'My Page'} />
                )}
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    background-color: #292826;
    height: 100px;
    /* border-bottom: 1px solid #434040; */
`;

const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem 0 3rem;
    max-width: 100%;
    height: 100%;
`;

const LoginButton = styled.button`
    width: 9rem;
    height: 4rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #90e2e2;
`;

const GoHome = styled.div`
    font-size: 4rem;
    color: white;
`;
