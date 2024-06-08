import React from "react";
import Forma from "./Forma";
import { useDispatch } from "react-redux";
import { postRequestTodo } from "../store/request/requestAsynk";
import { Box, styled } from "@mui/material";

const Create = ({ onClose }) => {
	const dispatch = useDispatch();

	const addTodo = (data) => {
		dispatch(postRequestTodo(data));
	};

	return (
		<BoxMuiContainer>
			<BoxMui>
				<Forma onClose={onClose} onSubmit={addTodo} />
			</BoxMui>
		</BoxMuiContainer>
	);
};

export default Create;
const BoxMuiContainer = styled(Box)(() => {
	return {
		margin: "30px auto",
		width: "100vw",
		height: "100vh",
		backgroundColor: "rgba(0,0,0,0.45)",
		position: "absolute",
		top: "-30px",
		zIndex: 10,
		left: 0,
	};
});
const BoxMui = styled(Box)(() => {
	return {
		position: "absolute",
		top: "30%",
		zIndex: 10,
		left: "34%",
	};
});
