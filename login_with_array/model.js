//Model
const model = {
  app: {
    display: document.getElementById("app"),
    currentPage: "homepage",
    currentUser: null,
  },
  viewState: {
    login: {
      username: null,
      password: null,
    },
    loginMessage: "",
  },
  data: {
    users: [
      {
        username: "kari",
        password: "kari123",
        name: "Kari Normal",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        username: "ola",
        password: "ola123",
        name: "Ola Olavsen",
        bio: "Hei og velkommen - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};
