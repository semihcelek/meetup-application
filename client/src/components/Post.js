import React from "react";
import propTypes from "prop-types";

const Post = ({ title, content, author }) => {
  return (
    <div className="card col align-self-start">
      <h3 className="card-title" >{title}</h3>
      <p  className="card-text" > {content}</p>
      <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
    </div>
  );
};
Post.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  author: propTypes.string,
};

export default Post;
