import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";
import { useFetch } from "../services/useFetch";

const ProfilePage = () => {
  const { username } = useParams();
  const { data, isloading, error } = useFetch(`/user/${username}/json`);
  return (
    <div>
      <h3>{username}</h3>

      {isloading ? (
        <div>...loading</div>
      ) : (
        <User
          username={data.username}
          firstName={data.firstName}
          lastname={data.lastname}
          email={data.email}
          description={data.description}
          createdAt={data.createdAt}
        />
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default ProfilePage;
