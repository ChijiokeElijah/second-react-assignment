import React from "react";
import User from "./user.js";


const perPage = 10;

const Profiles = ({ users, page }) => {
  const startIndex = (page - 1) * perPage;
  const selectedUsers = users.slice(startIndex, startIndex + perPage);
  return selectedUsers.map((user) => <User user={user} key={user.login.uuid}/>);
};

export default Profiles;
