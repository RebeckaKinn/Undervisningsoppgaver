function search() {
  debugger;
  model.app.searchQuery = model.viewState.search.query;
  model.viewState.search.query = "";
  model.app.page = "users";
  updateView();
}

function clearSearch() {
  model.app.searchQuery = "";
  updateView();
}
