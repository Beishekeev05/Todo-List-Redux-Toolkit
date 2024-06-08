import React from "react";
import Forma from "./Forma";
import { useDispatch, useSelector } from "react-redux";
import { putRequestTodo } from "../store/request/requestAsynk";
import { Box, styled } from "@mui/material";

const Update = ({ onClose }) => {
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.todo);
	console.log(data, "param");
	const editValue = (param) => {
		dispatch(putRequestTodo(param));
	};
	return (
		<BoxMuiContainer>
			<Forma onClose={onClose} onSubmit={editValue} data={data} />
		</BoxMuiContainer>
	);
};

export default Update;
const BoxMuiContainer = styled(Box)(() => {
	return {
		width: "100vw",
		height: "100vh",
		backgroundColor: "rgba(0,0,0,0.45)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: "-1px",
		left: "",
	};
});
