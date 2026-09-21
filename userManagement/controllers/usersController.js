function deleteUser(id) {
    let index = 0;
    for(const user of model.users) {
        if(user.id === id) {
            model.users.splice(index, 1); 
            break;           
        }

        index++;
    }

    updateView();
}