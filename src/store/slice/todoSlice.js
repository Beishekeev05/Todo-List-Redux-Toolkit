import { createSlice } from "@reduxjs/toolkit";
import {
	deleteRequestTodo,
	getRequestTodo,
	putRequestTodo,
} from "../request/requestAsynk";

const initialState = {
	todo: [],
	data: {},
	isLoading: false,
	error: null,
};
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		editingId(state, { payload }) {
			state.data = state.todo.find((item) => item.id === payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRequestTodo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.todo = payload;
			})
			.addCase(getRequestTodo.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteRequestTodo.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(deleteRequestTodo.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(putRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(putRequestTodo.fulfilled, (state, { payload }) => {
				state.todo = payload;
				state.isLoading = false;
			})
			.addCase(putRequestTodo.rejected, (state, { payload }) => {
				(state.error = payload), (state.isLoading = false);
			});
	},
});
export const { editingId } = todoSlice.actions;
export default todoSlice.reducer;
