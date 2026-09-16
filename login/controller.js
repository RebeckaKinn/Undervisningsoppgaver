//Controller
init();
function init() {
  if (checkCurrentUser()) changePage("homepage");
  else changePage("login");
}

function checkLogIn() {
  if (
    model.data.user.username === model.viewState.login.username &&
    model.data.user.password === model.viewState.login.password
  ) {
    model.app.currentUser = model.data.user;
    saveCurrentUser();
    changePage("homepage");
  } else {
    model.viewState.loginMessage = "Wrong password or username";
    updateView();
  }
}

function changePage(newPage) {
  model.app.currentPage = newPage;
  updateView();
}

function checkCurrentUser() {
  model.app.currentUser = getCurrentUser();
  if (model.app.currentUser) return true;
  return false;
}

//LocalStorage
function saveCurrentUser() {
  localStorage.setItem("user", JSON.stringify(model.app.currentUser));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function logOut() {
  localStorage.removeItem("user");
  changePage("login");
}
