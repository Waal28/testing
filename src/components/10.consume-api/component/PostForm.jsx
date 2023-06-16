import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import usePostService from "../services/post";
import { useJwt } from "react-jwt";
import { useLocalStorage } from "../hooks/localStorage";
import { PostContext } from "../context/post-context";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "./store/post";

const PostForm = () => {
  const { post } = useSelector((state) => state.postSlice);
  const dispatch = useDispatch();

  const { createPosts } = useContext(PostContext);
  //
  const [credential] = useLocalStorage("credential");
  const { decodedToken, isExpired } = useJwt(credential);
  // const [post, setPost] = useState();
  const { loading } = usePostService();

  const handleCreatePosts = async () => {
    await createPosts(post, decodedToken);
    dispatch(setPost(""));
  };
  return (
    <div>
      <Typography sx={{ m: 3 }} variant="h6">
        Post New Feed
      </Typography>

      <Card>
        <CardContent>
          <TextField
            multiline
            placeholder="post"
            value={post}
            onChange={(e) => dispatch(setPost(e.target.value))}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleCreatePosts}>
            {loading && <CircularProgress />}Post
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostForm;
