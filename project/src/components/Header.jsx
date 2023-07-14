import styled from "styled-components";
import LocalNav from "../features/Header/LocalNav";

function Header() {
	console.log("Header");

	return (
		<HeaderContainer>
			<HeaderNav>
				<SiteTitle>{"제목을 정해주세요!"}</SiteTitle>
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

const SiteTitle = styled.div`
	font-size: 30px;
	font-weight: bold;
`;
