function addUser() {    
    const user = {};
    
    user.id = getNextUserId();
    user.name = model.inputs.addUser.name;
    user.email = model.inputs.addUser.email;
    model.users.push(user);    
    resetAndGoToUsers();
}

function resetAndGoToUsers() {
    model.inputs.addUser.name = '';
    model.inputs.addUser.email = '';
    model.app.page = 'users';
    updateView();
}

function cancelAddUser() {
    resetAndGoToUsers();
}