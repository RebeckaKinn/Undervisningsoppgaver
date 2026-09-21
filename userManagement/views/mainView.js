function mainView() {        
    let page = model.app.page;
    let currentPageView = '';
    switch (page) {
        case 'users':
            currentPageView = usersView();
            break;
        case 'addUser':
            currentPageView = addUserView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="container">
            <h1>User Management</h1>        
            ${searchView()}    
            ${currentPageView}
            <br>            
            <div>
                Todo:
                <ul>
                    <li><s>Søke brukere</s></li>
                    <li><s>Legge til brukere</s></li>
                    <li>Forbedre routing?</li>
                    <li>Øke gjenbrukbarhet?</li>
                    <li><s>Slette brukere</s></li>                    
                </ul>
            </div>
        </div>
    `;
}