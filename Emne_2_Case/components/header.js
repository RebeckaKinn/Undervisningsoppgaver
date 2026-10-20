function header() {
  return /*HTML*/ `
    <div class="flex gap-1rem">
            ${adminHeaderButton("Lagerbeholdning", "adminStorage")}
            ${adminHeaderButton("Ordre", "orderPage")}
            ${adminHeaderButton("Ordrehistorie", "orderHistoryPage")}
            ${adminHeaderButton("Registrer ny ansatt", "RegisterNewEmployeePage")}
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
