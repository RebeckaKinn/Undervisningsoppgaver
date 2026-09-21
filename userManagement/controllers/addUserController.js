function addUser() {
  const user = {};

  user.id = getNextUserId();
  user.name = model.viewState.addUser.name;
  user.email = model.viewState.addUser.email;
  model.users.push(user);
  resetAndGoToUsers();
}

function resetAndGoToUsers() {
  model.viewState.addUser.name = "";
  model.viewState.addUser.email = "";
  model.app.page = "users";
  updateView();
}

function cancelAddUser() {
  resetAndGoToUsers();
}
