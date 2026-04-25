import users from "../modules/User";

let userList = [...users];

const delay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

export const getUsers = () => delay([...userList]);
