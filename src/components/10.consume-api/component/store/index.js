import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post";

export default configureStore({
  reducer: {
    postSlice: postSlice,
  },
});
