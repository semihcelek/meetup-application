import React, { useEffect, useState } from "react";
import User from "../components/User";
import { useUserStore } from "../store/userStore";
import { removeSavedUser } from "../services/user-service";
import { userPosts } from "../services/post-service";
import NewPost from "../components/New-Post";

const UserHomePage = () => {
  const { user, setUser, removeUser } = useUserStore((state) => state);
  const [posts, setPosts] = useState({ data: {}, isloading: true });

  useEffect(() => {
    userPosts(user).then((posts) => {
      setPosts({ data: posts, isloading: false });
    });
  }, []);

  return (
    <div>
      {/* {isloading ? (
        <div>...loading</div>
      ) : (
        <User
          username={user.username}
          firstName={user.firstName}
          lastname={user.lastname}
          email={user.email}
          description={user.description}
          createdAt={user.createdAt}
        />
      )} */}
      <NewPost />

      {posts.isloading ? (
        <div>...loading</div>
      ) : (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <pre>{JSON.stringify(posts.data, null, 2)}</pre>
        </div>
      )}
      <button
        onClick={() => {
          removeUser();
          removeSavedUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserHomePage;
