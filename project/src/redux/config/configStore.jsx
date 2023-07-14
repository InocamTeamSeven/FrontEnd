import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../modules/listSlice";

const store = configureStore({
	reducer: {
		listSlice,
	},
});

export default store;
