//Model
//NEW ---------------------------------------------
const model = {
  app: document.getElementById("app"),
  viewState: {},
  data: {
    list: [
      {
        title: "Handle melk",
        isDone: false,
        isEdit: false,
      },
      {
        title: "Gjøre lekser",
        isDone: false,
        isEdit: false,
      },
      {
        title: "Trene",
        isDone: false,
        isEdit: false,
      },
    ],
  },
};

//View
updateView();
//CHANGED ---------------------------------------------
function updateView() {
  model.app.innerHTML = /*HTML*/ `
        <h1>ToDo</h1>

        <input 
          type="text" 
          placeholder="Legg til" 
          onchange="addItem(this.value)"
        >

        <table>
          ${displayList()}
        </table>
    `;
}

function displayList() {
  let html = "";
  //CHANGED ---------------------------------------------
  for (let i = 0; i < model.data.list.length; i++) {
    if (model.data.list[i].isEdit) {
      html += /*HTML*/ `
        <tr>
          <td>
          <input 
            value="${model.data.list[i].title}"
            onchange="editItem(${i}, this.value)"
          >
          </td>
          <td></td>
          <td></td>
        </tr>
      `;
    } else {
      html += /*HTML*/ `
        <tr>
          <td>
            ${model.data.list[i].title}
          </td>
          
          <td>
          <button onclick="startEdit(${i})">
            Endre
          </button>
          </td>
          
          <td>
          <button onclick="deleteItem(${i})">
            Slett
          </button>
          </td>
          
        </tr>
      `;
    }
  }

  return html;
}

//Controller

//CHANGED ---------------------------------------------
function addItem(newTitle) {
  model.data.list.push({
    title: newTitle,
    isDone: false,
    isEdit: false,
  });
  updateView();
}

//CHANGED ---------------------------------------------
function startEdit(index) {
  model.data.list[index].isEdit = true;
  updateView();
}

//CHANGED ---------------------------------------------
function editItem(index, newtitle) {
  model.data.list[index].isEdit = false;
  model.data.list[index].title = newtitle;
  updateView();
}

//CHANGED ---------------------------------------------
function deleteItem(index) {
  model.data.list.splice(index, 1);
  updateView();
}
