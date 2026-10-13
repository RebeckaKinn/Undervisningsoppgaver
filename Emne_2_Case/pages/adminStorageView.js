function adminStorageView() {
  return /*HTML*/ `
    <div>${adminStorageHeader()}</div>
    <table>
        ${generateProductTableLabels()}
        ${generateProductTable()}
    </table>
    `;
}

function adminStorageHeader() {
  return /*HTML*/ `
    <button class="defaultButton">Filter</button>
    <input type="text" placeholder="Søk" onchange="model.viewState.adminStorage.search = this.value">
    ${adminHeaderButton("Legg til ny vare", "addNewItemPage")}
    `;
}
function generateProductTableLabels() {
  return /*HTML*/ `
        <tr>
            <th>Kategori</th>
            <th>Bilde</th>
            <th>Tittel</th>
            <th>Innhold</th>
            <th>Antall</th>
            <th>Pris per</th>
            <th>Oppdatert</th>
            <th>Handling</th>
        </tr>
    `;
}
function generateProductTable() {
  let html = "";
  for (const item of model.productsData) {
    html += /*HTML*/ `
        <tr>
            <td>${findCategory(item.category)}</td>
            <td class="previewImage">
                <img src=${item.image} alt="">
            </td>
            <td>${item.title}</td>
            <td>${item.content.join(", ")}</td>
            <td>${item.amount}</td>
            <td>${item.price}</td>
            <td>${item.updated}</td>
            <td>
                <button class="defaultButton">Rediger</button>
            </td>
        </tr>
    `;
  }
  return html;
}

function findCategory(categoryId) {
  return model.categories.find((item) => item.id === categoryId).name;
}
