import { createSlice } from "@reduxjs/toolkit";
import usePostService from "../../services/post";

const initialState = {
  post: "",
};

const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;

export async function FetchPosts() {
  const postService = usePostService();
  const _posts = await postService.getPosts();

  return (dispatch, getState) => {
    dispatch(setPost(_posts));
  };
}
