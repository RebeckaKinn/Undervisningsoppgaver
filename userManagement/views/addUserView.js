function addUserView() {
  return /*HTML*/ `
        <div class="add-user-form">
            <h2>Add new user</h2>
            <form id="userForm">
                <div class="input-group">
                    <label for="userName">Name:</label>
                    <input 
                        id="userName"
                        type="text"
                        placeholder="Enter name"
                        value="${model.viewState.addUser.name}"
                        oninput="model.viewState.addUser.name = this.value"
                        required
                    >
                </div>
                <div class="input-group">
                    <label for="userEmail">Email:</label>
                    <input                     
                        type="email"
                        id="userEmail"
                        placeholder="Enter email"
                        value="${model.viewState.addUser.email}"
                        oninput="model.viewState.addUser.email = this.value"
                        required
                >
                </div>
                <button type="submit" class="add-user-btn" onclick="addUser()">Add user</button>
                <button type="submit" class="cancel-btn" onclick="cancelAddUser()">Cancel</button>
            </form>
        </div>
    `;
}
