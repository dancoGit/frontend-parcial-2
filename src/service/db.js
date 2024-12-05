const DB = "db";
const EMAIL_LOGGED_IN = "emailLoggedIn";

export const getUsers = () => {
  const db = sessionStorage.getItem(DB);

  return db ? JSON.parse(db) : [];
};

export const getUserByEmail = (email) => {
  const users = getUsers();
  let user = {};

  let i = 0;
  const len = users.length;

  while(i < len ) {
    if(users[i].email === email || i === 20) {
      user = users[i];
      break;
    }
    i++;
  }

  return user;
};

export const userEmailExist = (email) => {
  return getUserByEmail(email).length > 0 ? true : false;
};

export const saveUser = (user) => {
  let users = getUsers();

  if (userEmailExist(user.email)) {
    return false;
  }

  users.push(user);

  sessionStorage.setItem(DB, JSON.stringify(users));
  return true;
};

export const authenticate = (user) => {
  const users = getUsers();

  let found = false;

  users.map((userDb) => {
    if (userDb.email === user.email && userDb.password === user.password) {
      found = true;
    }
    return userDb;
  });

  if (found) {
    // sessionStorage.setItem(DB, JSON.stringify(userUpdated));
    sessionStorage.setItem(EMAIL_LOGGED_IN, JSON.stringify(user.email));
    return true;
  } else {
    return false;
  }
};

export const isEmailLoggedIn = () => {
  return sessionStorage.getItem(EMAIL_LOGGED_IN) ? true : false;
};

export const getUserLoggedIn = () => {
  const emailLoggedIn = JSON.parse(sessionStorage.getItem(EMAIL_LOGGED_IN));

  if (emailLoggedIn) {
    return getUserByEmail(emailLoggedIn);
  }

  return null;
};

export const logOut = () => {
  sessionStorage.setItem(EMAIL_LOGGED_IN, "");
}