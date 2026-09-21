function usersView() {
  return /*HTML*/ `
        <div class="user-list">
            <h2>
                User List 
                <button class="plus-btn" onclick="setPage('addUser')">+</button>
            </h2>  
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${createUserRowsHtml()}
                </tbody>
            </table>
        </div>
    `;
}

function createUserRowsHtml() {
  let userListHtml = "";
  const hasSearchQuery = model.app.searchQuery != "";
  const users = hasSearchQuery ? getFilteredUsers() : model.users;
  for (const user of users) {
    userListHtml += /*HTML*/ `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="deleteUser(${user.id})">X</button>
                </td>            
            </tr>
        `;
  }

  return userListHtml;
}

function getFilteredUsers() {
  const filteredUsers = [];
  const searchQuery = model.app.searchQuery.toLowerCase();
  for (const user of model.users) {
    if (
      user.email.toLowerCase().includes(searchQuery) ||
      user.name.toLowerCase().includes(searchQuery) ||
      user.id === searchQuery
    ) {
      filteredUsers.push(user);
    }
  }

  return filteredUsers;
}
