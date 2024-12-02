export const getUsers = () => {
  const db = localStorage.getItem("db");

  return (db) ? Object.values(JSON.parse(db)) : [];
}

export const getUserByEmail = (email) => {
  const users = getUsers();
  return users.filter((user) => user.email === email);
}

export const userEmailExist = (email) => {
  return getUserByEmail(email).length > 0 ? true : false;
}

export const saveUser = (user) => {
  let users = getUsers();

  if(userEmailExist(user.email)) {
    console.log("mail encontrado")
    return false;
  }
  
  console.log("push")
  users.push(user);

  localStorage.setItem("db", JSON.stringify(users));
  return true;
}

// export const addToFavorites = (card) = {

// }