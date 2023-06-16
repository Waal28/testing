import { createContext, useState } from "react";
import usePostService from "../services/post";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const { getPosts, createPosts, deletePosts, updatePosts } = usePostService();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const _posts = await getPosts();
    setPosts(_posts);
  };
  const _createPosts = async (post, user) => {
    await createPosts(post, user);
    await fetchPosts();
  };
  const _deletePosts = async (id) => {
    await deletePosts(id);
    await fetchPosts();
  };
  const _updatePosts = async (id, post) => {
    await updatePosts(id, post);
    await fetchPosts();
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        fetchPosts,
        createPosts: _createPosts,
        deletePosts: _deletePosts,
        updatePosts: _updatePosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
