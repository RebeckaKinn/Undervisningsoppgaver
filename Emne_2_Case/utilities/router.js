function updateView() {
  let currentPageView = "";
  switch (model.app.currentPage) {
    case "adminStorage":
      currentPageView = adminStorageView();
      break;
  }

  document.getElementById("app").innerHTML = /*HTML*/ `
        <main>
            ${currentPageView}
        </main>
    `;
}
