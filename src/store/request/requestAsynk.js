import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

export const getRequestTodo = createAsyncThunk(
	"todo/getRequestTodo",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/todo.json`);
			const data = await response.json();
			const transform = [];
			for (let key in data) {
				transform.push({
					id: key,
					name: data[key].name,
					surname: data[key].surname,
					date: data[key].date,
				});
			}
			return transform;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const postRequestTodo = createAsyncThunk(
	"todo/postRequestTodo",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await fetch(`${BASE_URL}/todo.json`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteRequestTodo = createAsyncThunk(
	"todo/deleteRequestTodo",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await fetch(`${BASE_URL}/todo/${id}.json`, {
				method: "DELETE",
			});
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const putRequestTodo = createAsyncThunk(
	"todo/putRequestTodo",
	async (param, { rejectWithValue, dispatch }) => {
		const { id, ...rest } = param;
		try {
			await fetch(`${BASE_URL}/todo/${id}.json`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(rest),
			});
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
