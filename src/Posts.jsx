import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/post/postSlice";

export default function Posts() {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (posts.length === 0) {
    return <div>No post</div>;
  }
  return <div>post :{posts.length} </div>;
}
