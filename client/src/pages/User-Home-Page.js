import React, { useEffect, useState } from "react";
import User from "../components/User";
import { useUserStore } from "../store/userStore";
import { removeSavedUser } from "../services/user-service";
import { userPosts } from "../services/post-service";

const UserHomePage = () => {
  const { user, setUser, removeUser } = useUserStore((state) => state);
  const [posts, setPosts] = useState({ data: {}, isloading: true });
  //   const userDetail. In future, fetch userDetail from protected route,
  //    then add a new state userDetail, then show it on user homepage
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
