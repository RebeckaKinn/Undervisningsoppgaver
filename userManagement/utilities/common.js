function setPage(pageName) {
  model.app.page = pageName;
  updateView();
}

function getNextUserId() {
  let maxId = 0;
  for (const user of model.users) {
    if (user.id > maxId) {
      maxId = user.id;
    }
  }

  return maxId + 1;
}
