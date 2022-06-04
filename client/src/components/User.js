import React from "react";
import propTypes from "prop-types";

const User = ({
  username,
  firstName,
  lastName,
  email,
  avatar,
  description,
  createdAt,
}) => {
  return (
    <div>
      <h3>{firstName}</h3>
      <h4>{lastName}</h4>
      <h4>{username}</h4>
      <p>{email}</p>
      <p>{description}</p>
      <p>{createdAt}</p>
    </div>
  );
};
User.propTypes = {
  username: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string,
  email: propTypes.string.isRequired,
  avatar: propTypes.string,
  description: propTypes.string,
  createdAt: propTypes.string,
};

export default User;
