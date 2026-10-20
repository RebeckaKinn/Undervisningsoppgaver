function updateView() {
  let currentPageView = "";
  switch (model.app.currentPage) {
    case "adminStorage":
      currentPageView = adminStorageView();
      break;
    default:
      currentPageView = "Error";
      break;
  }

  document.getElementById("app").innerHTML = /*HTML*/ `
        <header class="gap-1rem">${header()}</header>
        <main>
            ${currentPageView}
        </main>
    `;
}
