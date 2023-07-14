import React from "react";
import Layout from "../components/Layout";
import HomeBox from "../features/Home/HomeBox";
import LocalNav from "../features/Header/LocalNav";
import styled from "styled-components";

function Home() {
	return (
		<Layout>
			<HomeContainer>
				<LocalNav />
			</HomeContainer>
			<HomeBox />
		</Layout>
	);
}

export default Home;

const HomeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`;
