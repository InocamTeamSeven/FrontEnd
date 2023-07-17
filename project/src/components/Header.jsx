import styled from 'styled-components';
import { useNavigate } from 'react-router';
import LocalNav from '../features/Header/LocalNav';
import Button from './Button';
import logo from '../assets/logo.png';

function Header() {
    console.log('Header');
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <HeaderNav>
                <LogoImg onClick={() => navigate('/')} src={logo} />
                <Button color="green" size="medium" name="medium" />
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    height: 60px;
    border-bottom: 1px solid #434040;
`;

const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 1000px;
    height: 100%;
`;

// const SiteTitle = styled.div`
//     font-size: 30px;
//     font-weight: bold;
// `;

const LogoImg = styled.img`
    width: 40%;
    max-width: 200px;
    height: auto;
    margin-top: 4px;
    cursor: pointer;
`;
