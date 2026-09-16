//Controller
init();
function init() {
  if (checkCurrentUser()) changePage("homepage");
  else changePage("login");
}

function checkLogIn() {
  let isUser = false;
  for (let user of model.data.users) {
    if (
      user.username === model.viewState.login.username &&
      user.password === model.viewState.login.password
    ) {
      model.app.currentUser = user;
      isUser = true;
    }
  }
  if (isUser) {
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
