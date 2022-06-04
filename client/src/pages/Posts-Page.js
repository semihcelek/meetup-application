import React from "react";
import NewPost from "../components/New-Post";
import Post from "../components/Post";
import { useFetch } from "../services/useFetch";

const PostsPage = () => {
  const { data, isloading, error } = useFetch("/post/all");

  return (
    <div className="container-xl p-5">
      <NewPost />
      {isloading ? (
        <div>load...</div>
      ) : (
        data.map((story) => (
          <div className="row" key={story.id}>
            <Post
              title={story.title}
              content={story.content}
              author={story.author}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default PostsPage;
