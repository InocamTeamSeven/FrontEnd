import styled from 'styled-components';
import LocalNav from '../features/LocalNav';
import { useNavigate } from 'react-router-dom';

function Header() {
    console.log('Header');

    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/');
    };

    return (
        <HeaderContainer>
            <HeaderNav>
                <SiteTitle onClick={onClickButton}>
                    {'제목을 정해주세요!'}
                </SiteTitle>
                <div>test</div>
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

const SiteTitle = styled.div`
    cursor: default;
    font-size: 30px;
    font-weight: bold;
`;
