import { Box, Button, ListItem, ListItemText, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequestTodo } from "../store/request/requestAsynk";
import { editingId } from "../store/slice/todoSlice";

const TodoList = ({ onClose }) => {
	const { todo } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	const handelDelete = (id) => {
		dispatch(deleteRequestTodo(id));
	};
	const editHadnlerId = (id) => {
		dispatch(editingId(id));
		onClose();
	};
	return (
		<Box>
			{todo?.map((item) => (
				<StyledListItem key={item.id}>
					<ListItemText secondary={item.name} />
					<ListItemText secondary={item.surname} />
					<ListItemText secondary={item.date} />
					<Button color="error" onClick={() => handelDelete(item.id)}>
						Delete
					</Button>
					<Button onClick={() => editHadnlerId(item.id)}>Edit</Button>
				</StyledListItem>
			))}
		</Box>
	);
};

export default TodoList;
const StyledListItem = styled(ListItem)(() => {
	return {
		width: "60%",
		backgroundColor: "bisque",
		margin: "0 auto",
		transition: "all 0.3s",
		"&:hover": {
			backgroundColor: "whitesmoke",
		},
	};
});
