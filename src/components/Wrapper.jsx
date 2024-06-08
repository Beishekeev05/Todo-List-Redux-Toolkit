import React, { useState } from "react";
import Create from "./Create";
import TodoList from "./TodoList";
import { Box, Button, styled } from "@mui/material";
import Update from "./Update";
import { useSelector } from "react-redux";

const Wrapper = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const { isLoading } = useSelector((state) => state.todo);
	const onClose = () => {
		setOpenModal((prev) => !prev);
	};
	const onEdit = () => {
		setOpenEdit((prev) => !prev);
	};
	return (
		<>
			{!isLoading ? (
				<Box>
					<MuiButton variant="outlined" onClick={onClose}>
						{openModal ? "Close" : "Open"}
					</MuiButton>
					{openModal ? (
						<Create onClose={onClose} />
					) : (
						<TodoList onClose={onEdit} />
					)}
					{openEdit && <Update onClose={onEdit} />}
				</Box>
			) : (
				<div className="spinnerBlock">
					<div className="spinner"></div>
				</div>
			)}
		</>
	);
};

export default Wrapper;
const MuiButton = styled(Button)(() => {
	return {
		margin: 5,
	};
});
