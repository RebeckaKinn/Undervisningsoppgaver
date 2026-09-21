function search() {
    debugger;
    model.app.searchQuery = model.inputs.search.query;
    model.inputs.search.query = '';
    model.app.page = 'users';    
    updateView();
}

function clearSearch() {
    model.app.searchQuery = '';
    updateView();
}