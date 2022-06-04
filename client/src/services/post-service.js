import axios from "axios";
import { setToken } from "./user-service";

export const createPost = async (values, userObj) => {
  const userToken = setToken(userObj);
  const payload = { title: values.title, content: values.content };

  const config = {
    headers: { Authorization: userToken },
  };

  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/post`,
    payload,
    config
  );

  return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/post/delete/${id}`)
    return response.data;
}

export const userPosts = async (userObj) => {
  const userToken = setToken(userObj);
  const userId = userObj.id;
  const config = {
    headers: { Authorization: userToken },
  };

  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/${userId}/posts`,
    config
  );

  return response.data;
};
