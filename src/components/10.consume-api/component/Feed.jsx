import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonGroup } from "@mui/material";
import { PostContext } from "../context/post-context";
import { PostFeed } from "./PostFeed";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Feed = () => {
  const { posts, fetchPosts, deletePosts } = useContext(PostContext);
  //
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);

  const handleDeleteModal = async (id) => {
    setId(id);
    setOpen(true);
  };
  const handleDelete = async () => {
    await deletePosts(id);
    setOpen(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action cannot be rolled back
          </Typography>
          <ButtonGroup>
            <Button onClick={handleDelete}>Yes</Button>
            <Button color="error" onClick={() => setOpen(false)}>
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>

      <Typography sx={{ m: 3 }} variant="h6">
        Feeds
      </Typography>

      {posts.map((post) => (
        <PostFeed
          key={post.created}
          post={post}
          handleDeleteModal={handleDeleteModal}
        />
      ))}
    </div>
  );
};

export default Feed;
