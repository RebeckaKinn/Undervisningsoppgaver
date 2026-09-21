//Model

const model = {
  app: document.getElementById("app"),
  viewState: {},
  data: {
    list: [], // NEW ------------------------------------------
  },
};

// LocalStorage

function saveList() {
  // NEW ------------------------------------------
  localStorage.setItem("todoList", JSON.stringify(model.data.list));
}

function loadList() {
  // NEW ------------------------------------------
  const savedList = localStorage.getItem("todoList");

  if (savedList) {
    model.data.list = JSON.parse(savedList);
  } else {
    model.data.list = [
      {
        title: "Handle middag",
        isEdit: false,
      },
      {
        title: "Gå tur med barna",
        isEdit: false,
      },
      {
        title: "Hente svigermor fra mentalsykehuset",
        isEdit: false,
      },
    ];
  }
}

//View
loadList(); // NEW ------------------------------------------
updateView();
function updateView() {
  model.app.innerHTML = /*HTML*/ `
        <h1>ToDo</h1>
        <input
            type="text"
            placeholder="Legg til"
            onchange="addItem(this.value)">

        <table>${displayList()}</table>
    `;
}

function displayList() {
  let html = "";
  for (let i = 0; i < model.data.list.length; i++) {
    if (model.data.list[i].isEdit) {
      html += /*HTML*/ `
            <tr>
                <td>
                    <input
                        value="${model.data.list[i].title}"
                        onchange="editItem(${i}, this.value)">
                </td>
                <td>
                   
                </td>
                <td>
                    <button onclick="deleteItem(${i})">Slett</button>
                </td>
            </tr>
            `;
    } else {
      html += /*HTML*/ `
            <tr>
                <td>${model.data.list[i].title}</td>
                <td>
                    <button onclick="startEdit(${i})">Endre</button>
                </td>
                <td>
                    <button onclick="deleteItem(${i})">Slett</button>
                </td>
            </tr>
            `;
    }
  }
  return html;
}

//Controller

function addItem(newItem) {
  model.data.list.push({
    title: newItem,
    isEdit: false,
  });
  saveList(); // NEW ------------------------------------------
  updateView();
}

function startEdit(index) {
  model.data.list[index].isEdit = true;
  updateView();
}

function editItem(index, newValue) {
  model.data.list[index].title = newValue;
  model.data.list[index].isEdit = false;
  saveList(); // NEW ------------------------------------------
  updateView();
}

function deleteItem(index) {
  model.data.list.splice(index, 1);
  saveList(); // NEW ------------------------------------------
  updateView();
}
