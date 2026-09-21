function search() {
  model.app.searchQuery = model.viewState.search.query;
  model.app.page = "users";
  updateView();
}

function clearSearch() {
  model.app.searchQuery = "";
  model.viewState.search.query = "";
  updateView();
}
