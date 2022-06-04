// make a page that shows a single story, then maybe make a modal page.
import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { useFetch } from "../services/useFetch";
const PostPage = () => {
  const { id } = useParams();
  const { data, isloading, error } = useFetch(`/post/${id}/json`);

  return (
    <div>
      {isloading ? (
        <div>...loading</div>
      ) : (
        <Post title={data.title} content={data.content} author={data.author} />
      )}
    </div>
  );
};

export default PostPage;
