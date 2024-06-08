import { Box, Button, TextField, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const Forma = ({ onSubmit, onClose, data }) => {
	const [name, setName] = useState("");
	const [surname, setSurName] = useState("");
	const [date, setDate] = useState("");
	const [id, setId] = useState("");

	useEffect(() => {
		if (data) {
			setDate(data.date);
			setId(data.id);
			setName(data.name);
			setSurName(data.surname);
		}
	}, [data]);

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			name,
			surname,
			date,
			id,
		};

		onSubmit(newValue);
		onClose();
		setDate("");
		setName("");
		setSurName("");
	};
	return (
		<StyledFormMui onSubmit={submitHandler} component={"form"}>
			<TextField
				value={name}
				onChange={(e) => setName(e.target.value)}
				label="Enter your name"
			/>
			<TextField
				value={surname}
				onChange={(e) => setSurName(e.target.value)}
				label="Enter your lasname"
			/>
			<TextField
				value={date}
				onChange={(e) => setDate(e.target.value)}
				type="date"
			/>
			<Button variant="contained" type="submit">
				Create
			</Button>
			<Button onClick={onClose} variant="outlined" type="button">
				Cansel
			</Button>
		</StyledFormMui>
	);
};

export default Forma;
const StyledFormMui = styled(Box)(() => {
	return {
		width: "450px",
		height: "350px",
		border: "1px solid black",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		gap: 20,
		padding: 10,
		borderRadius: 10,
	};
});
