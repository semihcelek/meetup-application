import React from "react";
import propTypes from "prop-types";
import { deletePost } from "../services/post-service";

const Post = ({ id, title, content, author }) => {
  return (
    <div className="container-sm" >
      <div className="card col">
        <h3 className="card-title" >{title}</h3>
        <p className="card-text" > {content}</p>
        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        <button className="btn btn-danger " onClick={() => handleDeleteButtonClick(id)}>delete Post</button>
      </div>
    </div>
  );
};

const handleDeleteButtonClick = async (id) => {
  await deletePost(id);
}

Post.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  content: propTypes.string,
  author: propTypes.string,
};

export default Post;
