import { createSlice } from "@reduxjs/toolkit";

const name = "counter";

interface ICounterState {
	count: number;
}

const initialState: ICounterState = {
	count: 0,
};

const counterSlice = createSlice({
	name,
	initialState,
	reducers: {
		increase: (state) => {
			state.count += 1;
		},
		decrease: (state) => {
			state.count -= 1;
		},
	},
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
