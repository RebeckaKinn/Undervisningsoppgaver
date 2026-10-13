function adminHeader() {
  return /*HTML*/ `
        <div class="flex gap-1rem">
            ${adminHeaderButton("Lagerbeholdning", "adminStorage")}
            ${adminHeaderButton("Ordre")}
            ${adminHeaderButton("Ordrehistorie")}
            ${adminHeaderButton("Registrer ny ansatt")}
        </div>

        <div class="flex gap-1rem align-items-center">
            <div class="headerText">
                <span>Du er logget inn som:</span>
                <h3>Anita</h3>
            </div>
            <button class="defaultButton">Logg ut</button>
        </div>
    `;
}

function adminHeaderButton(textContent, pageName) {
  let className = "";
  if (model.app.currentPage !== pageName) className = "defaultButton";
  return /*HTML*/ `
    <button class="adminButton ${className}">${textContent}</button>
    `;
}
