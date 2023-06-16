import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useLocalStorage } from "../../hooks/localStorage";
import { useNavigate } from "react-router-dom";
import PostForm from "../../component/PostForm";
import Feed from "../../component/Feed";

const HomePage = () => {
  const [credential] = useLocalStorage("credential");
  const navigate = useNavigate();
  useEffect(() => {
    !credential && navigate("/login");
  }, [credential]);
  return (
    <div>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}></Grid>
          <Grid item md={3} lg={3}>
            <h4>Feeds</h4>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}>
            <PostForm />
          </Grid>
          <Feed />
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
