export const getUsers = () => {
  const db = sessionStorage.getItem("db");

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
    return false;
  }
  
  users.push(user);
  
  sessionStorage.setItem("db", JSON.stringify(users));
  return true;
}

export const authenticate = (user) => {
  const users = getUsers();

  let found = false;
  
  const usersUpdated = users.map((userDb) => {
    if(userDb.email === user.email && userDb.password === user.password) {
      userDb.token = crypto.randomUUID();
      found = true;
    }
    return userDb
  });

  if(found) {
    sessionStorage.setItem("db", JSON.stringify(usersUpdated));
    return true;
  } else {
    return false;
  }
}