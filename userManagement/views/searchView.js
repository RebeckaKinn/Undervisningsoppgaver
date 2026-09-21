function searchView() {
  return /*HTML*/ `
    <div class="controls">       
        <div class="search-container">
            <input 
                type="text" 
                class="search-box" 
                placeholder="Search users..." 
                oninput="model.viewState.search.query = this.value" 
                onkeydown="if(event.key === 'Enter') search()" 
                value="${model.app.searchQuery}">  
            
            ${
              model.app.searchQuery
                ? /*HTML*/ `
                <button class="clear-btn" onclick="clearSearch()">✕</button>
            `
                : ""
            }
        </div>

        <button class="search-btn" onclick="search()">Search</button>       
    </div>  
    `;
}

function clearSearch() {
  model.viewState.search.query = "";
  updateView();
}
