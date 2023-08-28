const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const addNewColumnBtn = document.getElementById("addNewColumnBtn");
const addNewRowBtn = document.getElementById("addNewRowBtn");
const removeBtn = document.getElementById("removeBtn");

const LOCAL_STORAGE_TABLE_KEY = "tableStateData";

addNewRowBtn.addEventListener("click", () => addNewRow());

addNewColumnBtn.addEventListener("click", () => addNewColumn());

removeBtn.addEventListener("click", () => {
  localStorage.clear();
  clearUI();
});

let tableState = {
  header: [],
  body: [],
};

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
  tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

function updateTableData(tableState) {
  // clearUI();
  // console.log(tableState);
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
  // createTableUI(tableState);
}
function clearUI() {
  tbody.innerHTML = "";
  thead.innerHTML = "";
}

const saveTextInput = (e) => {
  const id = e.target.id;
  const [row, column] = id.split("-");
  tableState.body[row].cellDetails[column].cellValue = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
};
const saveSearchInput = (e) => {
  const id = e.target.id;
  const [row, column] = id.split("-");
  tableState.header[column].columnName = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));

};

function createInput(columnNumber) {
  const input = Object.assign(document.createElement("input"), {
    id: `header-${columnNumber}`,
    type: "search",
    placeholder: "Search here",
    onkeyup: saveSearchInput,
  });
  // console.log(input);
  return input;
}

function createTextArea(rowNumber, columnNumber) {
  // console.log(`body-${rowNumber}-${columnNumber}`);
  const input = Object.assign(document.createElement("textarea"), {
    id: `${rowNumber}-${columnNumber}`,
    row: "10",
    column: "10",
    placeholder: "Text here",
    onkeyup: saveTextInput,
  });

  return input;
}

function createTableUI(tableState) {
  const { header, body } = tableState;
  clearUI();
  // console.log({ header, body });

  header.forEach((tableColumn) => {
    const th = document.createElement(tableColumn.elementType);
    const columnNumber = tableColumn.columnNum;
    const columnInput = createInput(columnNumber);
    columnInput.value = tableColumn.columnName;
    th.appendChild(columnInput);
    thead.append(th);
  });

  body.forEach((tableRow) => {
    const { elementType, cellDetails } = tableRow;
    const tr = document.createElement(elementType);

    cellDetails?.forEach((rowData) => {
      const rowNumber = rowData.rowNumber;
      const columnNumber = rowData.columnNumber;
      const td = document.createElement(rowData.elementType);
      const textArea = createTextArea(rowNumber, columnNumber);
      textArea.value = rowData.cellValue;
      td.append(textArea);
      tr.append(td);
    });
    tbody.append(tr);
  });
  updateTableData(tableState);
}

createTableUI(tableState);

function addNewColumn() {
  const rowObj = {
    elementType: "th",
    columnNum: tableState.header.length,
    columnName: "",
    sort: "",
  };

  tableState.body.forEach((rowObj, idx) => {
    rowObj.cellDetails.push({
      elementType: "td",
      columnNumber: tableState.header.length,
      rowNumber: idx,
      cellValue: "",
    });
  });
  tableState.header.push(rowObj);
  updateTableData(tableState);
  createTableUI(tableState);
}

function addNewRow() {
  const bodyObj = {
    elementType: "tr",
    rowNumber: tableState.body.length + 1,
    cellDetails: [],
  };

  const { header } = tableState;
  header.map((val, idx) => {
    bodyObj.cellDetails.push({
      elementType: "td",
      columnNumber: idx,
      rowNumber: tableState.body.length,
      cellValue: "",
    });
  });
  tableState.body.push(bodyObj);
  updateTableData(tableState);
  createTableUI(tableState);
}

console.log(tableState);
