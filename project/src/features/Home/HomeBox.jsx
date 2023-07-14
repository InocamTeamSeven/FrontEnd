import React from "react";
import styled from "styled-components";

function HomeBox() {
	console.log("HomeBox");
	return (
		<HomeBoxStyle>
			<HomeBoxImage>d</HomeBoxImage>
			<HomeBoxTitle>제목</HomeBoxTitle>
		</HomeBoxStyle>
	);
}

export default HomeBox;

const HomeBoxStyle = styled.div`
	border: 1px solid black;
	width: 240px;
	height: 320px;
`;

const HomeBoxImage = styled.div`
	border: 1px solid black;
	width: 100%;
	height: 80%;
`;

const HomeBoxTitle = styled.div`
	border: 1px solid black;
	width: 100%;
	height: 19%;
`;
