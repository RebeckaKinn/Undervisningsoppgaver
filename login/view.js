//View

function updateView() {
  let page = "";
  if (model.app.currentPage == "homepage") page = homePage();
  if (model.app.currentPage == "login") page = logInPage();

  model.app.display.innerHTML = /*HTML*/ `
    <h1>Fjesboka</h1>
    <main>${page}</main>
  `;
}

function homePage() {
  const user = model.app.currentUser;
  return /*HTML*/ `
    <button onclick="logOut()">Log out</button>
    <h2>Welcome ${user.username}</h2>
    <p>${user.bio}</p>
    `;
}

function logInPage() {
  return /*HTML*/ `
    <h2>Log In</h2>
      <form>
        <input type="text" placeholder="username" oninput="model.viewState.login.username = this.value">
        <input type="text" placeholder="password" oninput="model.viewState.login.password = this.value">
    </form>
    <button onclick="checkLogIn()">Log in</button>
    <p>${model.viewState.loginMessage}</p>
    `;
}
