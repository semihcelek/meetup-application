import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LoginPage from "../pages/Login-Page";
import RegisterPage from "../pages/Register-Page";
import PostsPage from "../pages/Posts-Page";
import PostPage from "../pages/Post-Page";
import { useUserStore } from "../store/userStore";
import ProfilePage from "../pages/Profile-Page";
import UserHomePage from "../pages/User-Home-Page";

const Router = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <BrowserRouter>
        <div>
          <h3>olur gibi</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>

            {user.token ? (
              <li>
                <Link to="/home">{user.username}</Link>
              </li>
            ) : (
              <div>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            )}
          </ul>

          <Switch>
            <Route path="/posts/:id">
              <PostPage />
            </Route>
            <Route path="/user/:username">
              <ProfilePage />
            </Route>
            <Route path="/home">
              <UserHomePage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <PostsPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
