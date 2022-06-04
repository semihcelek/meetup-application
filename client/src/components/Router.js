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
          <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
              <h3 className="display-6 primary">Meetup Application</h3>
              <ul className="navbar-nav">
                <li className="nav-item m-4">
                  <Link to="/" className="navlink display-6" >Home</Link>
                </li>
                <li className="nav-item  m-4">
                  <Link to="/posts" className="navlink display-6">Posts</Link>
                </li>

                {user.token ? (
                  <li className="nav-item  m-4">
                    <Link to="/home" className="navlink display-6">{user.email}</Link>
                  </li>
                ) : (<>
                    <li className="nav-item  m-4">
                      <Link to="/login" className="navlink display-6">Login</Link>
                    </li>
                    <li className="nav-item  m-4">
                      <Link to="/register" className="navlink display-6">Register</Link>
                    </li>
                    </>
                )}
              </ul>
            </div>

          </div>

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
