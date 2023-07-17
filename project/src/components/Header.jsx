import styled from 'styled-components';
import LocalNav from '../features/LocalNav';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo.png';
// 로고

function Header() {
    console.log('Header');
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <HeaderNav>
                <SiteTitle onClick={onClickButton}>
                    {'제목을 정해주세요!'}
                </SiteTitle>
                <div>test</div>
                <LogoImg onClick={() => navigate('/')} src={logo} />
                <Button color="green" size="medium" name="medium" />
            </HeaderNav>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    background-color: rgb(45, 207, 53);
    height: 100px;
    /* border-bottom: 1px solid #434040; */
`;

const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 1000px;
    height: 100%;
`;

const LogoImg = styled.img`
    width: 40%;
    max-width: 200px;
    height: auto;
    margin-top: 4px;
    cursor: pointer;
`;
