import axios from "axios";

export const setToken = (userObj) => {
  const token = `Bearer ${userObj.token}`;
  return token;
};
export const loginUser = async (values) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/login`,
    values
  );
  console.log(response.data);
  if (response.data) {
    return response.data;
  } else {
    return null;
  }
};
export const registerUser = async (values) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/register`,
    values
  );
  return response.data;
};
export const getLocalUser = () => {
  const getLocalSavedUser = window.localStorage.getItem("social-app-user");
  if (getLocalSavedUser) {
    const user = JSON.parse(getLocalSavedUser);
    console.log(user);
    return user;
  } else {
    return {};
  }
};
export const saveLocalUser = (userObj) => {
  const saveUser = window.localStorage.setItem(
    "social-app-user",
    JSON.stringify(userObj)
  );
  console.log(saveUser);
};
export const removeSavedUser = () => {
  window.localStorage.removeItem("social-app-user");
};
