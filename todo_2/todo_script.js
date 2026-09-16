//Model
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
          ${displayDoneItems()}
        </table>
    `;
}

function displayList() {
  const list = model.data.list.filter((item) => item.isDone === false);
  let html = "";

  for (let item of list) {
    const originalIndex = model.data.list.indexOf(item); //NEW ---------------------------------------------
    if (item.isEdit) {
      html += /*HTML*/ `
        <tr>
          <td>
          <input 
            value="${item.title}"
            onchange="editItem(${originalIndex}, this.value)"
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
            ${item.title}
          </td>
          
          <td>
          <button onclick="startEdit(${originalIndex})">
            Endre
          </button>
          </td>
          
          <td>
          <button onclick="itemDone(${originalIndex})">
            Gjort
          </button>
          </td>
          
        </tr>
      `;
    }
  }

  return html;
}

function displayDoneItems() {
  //NEW ---------------------------------------------
  const list = model.data.list.filter((item) => item.isDone === true);
  let html = "";
  for (let item of list) {
    const originalIndex = model.data.list.indexOf(item);
    html += /*HTML*/ `
        <tr class="deleted">
          <td>
            ${item.title}
          </td>
          
          <td>
          <button onclick="itemNotDone(${originalIndex})">
            Angre
          </button>
          </td>
          
          <td>
          <button onclick="deleteItem(${originalIndex})">
            Slett
          </button>
          </td>
          
        </tr>
      `;
  }

  return html;
}

//Controller

function addItem(newTitle) {
  model.data.list.push({
    title: newTitle,
    isDone: false,
    isEdit: false,
  });
  updateView();
}

function startEdit(index) {
  model.data.list[index].isEdit = true;
  console.log(index);
  updateView();
}

function editItem(index, newtitle) {
  model.data.list[index].isEdit = false;
  model.data.list[index].title = newtitle;
  console.log(index);
  updateView();
}

function itemDone(index) {
  //NEW ---------------------------------------------
  model.data.list[index].isDone = true;
  console.log(index);
  updateView();
}
function itemNotDone(index) {
  //NEW ---------------------------------------------
  model.data.list[index].isDone = false;
  console.log(index);
  updateView();
}

function deleteItem(index) {
  model.data.list.splice(index, 1);
  console.log(index);
  updateView();
}
