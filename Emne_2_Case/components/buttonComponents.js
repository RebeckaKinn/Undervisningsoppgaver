function adminHeaderButton(textContent, pageName) {
  let className = "";
  if (model.app.currentPage !== pageName) className = "defaultButton";
  return /*HTML*/ `
    <button class="adminButton ${className}">${textContent}</button>
    `;
}
