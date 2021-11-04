import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { decrease, increase } from "@/redux/slices/counter";

export default function Counter() {
	const { count } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			<p>Counter: {count}</p>
			<button onClick={() => dispatch(increase())}>+</button>
			<button onClick={() => dispatch(decrease())}>-</button>
		</div>
	);
}
