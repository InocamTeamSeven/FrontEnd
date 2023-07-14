import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function AddPostForm() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [content, setContent] = useState("");

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
		console.log(title);
	};

	const onChangeName = (event) => {
		setName(event.target.value);
		console.log(name);
	};

	const onChangePassword = (event) => {
		setPassword(event.target.value);
		console.log(password);
	};

	const onChangeContent = (event) => {
		setContent(event.target.value);
		console.log(content);
	};

	const onClickCancelButton = () => {
		navigate(-1);
	};

	const onClickConfirmButton = () => {
		navigate("/detail");
	};

	return (
		<PostContainer>
			<InputContainer>
				<TitleInput value={title} onChange={onChangeTitle} />
				<InputPersonal>
					<InputName value={name} onChange={onChangeName} />
					<InputPassword value={password} onChange={onChangePassword} />
				</InputPersonal>
				<InputContent value={content} onChange={onChangeContent} />
			</InputContainer>
			<PostButtonContainer>
				<button onClick={onClickCancelButton}>{"취소"}</button>
				<button onClick={onClickConfirmButton}>{"작성"}</button>
			</PostButtonContainer>
		</PostContainer>
	);
}

export default AddPostForm;

const PostContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const InputContainer = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: left;
	flex-direction: column;
	gap: 20px;
`;

const TitleInput = styled.input`
	border: none;
	border-bottom: 1px solid black;
	width: 100%;
`;

const InputPersonal = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

const InputName = styled.input`
	margin-right: auto;
`;

const InputPassword = styled.input`
	margin-right: auto;
`;

const InputContent = styled.textarea``;

const PostButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;
