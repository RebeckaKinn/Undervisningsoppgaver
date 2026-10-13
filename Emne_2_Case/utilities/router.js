function updateView() {
  let currentPageView = "";
  switch (model.app.currentPage) {
    case "adminStorage":
      currentPageView = adminStorageView();
      break;
  }

  document.getElementById("app").innerHTML = /*HTML*/ `
        <header class="gap-1rem">${adminHeader()}</header>
        <main>
            ${currentPageView}
        </main>
    `;
}
