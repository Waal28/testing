import {
  Avatar,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import TimeAgo from "timeago-react";
import { PostContext } from "../context/post-context";

export const PostFeed = ({ post, handleDeleteModal }) => {
  const { updatePosts } = useContext(PostContext);
  //
  const [_post, setPost] = useState(post);
  const [editStatus, setEditStatus] = useState(false);

  const handleEditChange = (e) => {
    setPost(e.target.value);
  };
  const handleSubmitUpdate = async () => {
    await updatePosts(post.id, {
      ...post,
      post: _post,
    });
    setEditStatus(false);
    console.log(_post);
  };
  return (
    <Card sx={{ paddingBottom: 2, marginBottom: 1 }}>
      <CardContent style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item sm={1}>
            <Avatar alt={post.user.name} src={post.user.picture} />
          </Grid>
          <Grid item sm={7} style={{ padding: 10 }}>
            <Typography>{post.user.name}</Typography>
          </Grid>
          <Grid item sm={4} style={{ textAlign: "right" }}>
            <Typography>
              <TimeAgo datetime={post.created} locale="id_ID" />
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ p: 2, borderBottom: 1, borderColor: "grey.500" }}>
          <Typography>{!editStatus && post.post}</Typography>
          {editStatus && (
            <>
              <TextField
                value={_post.post}
                multiline
                onChange={handleEditChange}
              />
              <Button onClick={handleSubmitUpdate}>Submit</Button>
            </>
          )}
        </Grid>
      </CardContent>
      <ButtonGroup>
        <Button onClick={() => setEditStatus(!editStatus)}>Edit</Button>
        <Button color="error" onClick={() => handleDeleteModal(post.id)}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
};
