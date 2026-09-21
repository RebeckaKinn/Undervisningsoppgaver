function updateView() {
  let currentPageView = "";
  switch (model.app.page) {
    case "users":
      currentPageView = usersView();
      break;
    case "addUser":
      currentPageView = addUserView();
      break;
  }

  document.getElementById("app").innerHTML = /*HTML*/ `
        <div class="container">
            <h1>User Management</h1>        
            ${searchView()}    
            ${currentPageView}
        </div>
    `;
}
