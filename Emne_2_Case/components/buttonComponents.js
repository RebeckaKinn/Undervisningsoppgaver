function adminHeaderButton(textContent, pageName) {
  let className = "";
  if (model.app.currentPage !== pageName) className = "defaultButton";
  return /*HTML*/ `
    <button onclick="changePage('${pageName}')" class="adminButton ${className}">${textContent}</button>
`;
}
