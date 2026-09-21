function searchView() {
    return /*HTML*/`
    <div class="controls">       
        <div class="search-container">
            <input 
                type="text" 
                class="search-box" 
                placeholder="Search users..." 
                oninput="model.inputs.search.query = this.value" 
                onkeydown="if(event.key === 'Enter') search()" 
                value="${model.app.searchQuery}">  
            
            ${model.app.searchQuery ? `
                <button class="clear-btn" onclick="clearSearch()">✕</button>
            ` : ''}
        </div>

        <button class="search-btn" onclick="search()">Search</button>       
    </div>  
    `;
}

function clearSearch() {
    model.inputs.search.query = '';
    mainView();
}
