import React from "react";
import propTypes from "prop-types";

const Post = ({ title, content, author }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <h6>{author}</h6>
    </div>
  );
};
Post.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  author: propTypes.string,
};

export default Post;
