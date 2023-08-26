const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const addNewColumnBtn = document.getElementById("addNewColumnBtn");
const addNewRowBtn = document.getElementById("addNewRowBtn");

const tableData = JSON.parse(localStorage.getItem("tableData"));
console.log({ tableData });
//  {
//   header: [{ elementType: "th", columnName: "A", order: 1, sort: null }],
//   body: [
//     {
//       elementType: "tr",
//       rowOrder: 1,
//       columnElems: [
//         {
//           elementType: "td",
//           columnName: "column",
//           rowOrder: 1,
//           value: "kuch kuch he abhi tho",
//         },
//       ],
//     },
//   ],
// };
 localStorage.setItem("tableData", JSON.stringify(tableData))

const addNewRow = () => {
  table.header.push();
};
const columHeaderObject = {
  element: "",
  columnName: "",
  order: 0,
  sort: undefined,
};
// const populateUI = (tableData) => {
//   const { header, body } = tableData;
//   tbody.innerHTML = "";
//   thead.innerHTML = "";
//   header.forEach((tableColumn) => {
//     const th = document.createElement(data.elementType);
//     th.innerText = data.columnName;
//     thead.append(th);
//   });
//   body.forEach((tableRow) => {
//     const { elementType, columnElems } = tableRow;
//     const tr = document.createElement(elementType);
//     columnElems.forEach((cellElem) => {
//       const td = document.createElement(cellElem.elementType);
//       tr.append(td);
//       td.append(cellElem.value);
//     });
//     tr.innerText = data.rowName;
//     tbody.append(tr);
//   });
// };
// populateUI(table);

const createInput = (type, placeholder) => {
  const input = document.createElement("input");
  input.setAttribute(type, "text");
  input.setAttribute("placeholder", placeholder);
  return input;
};

const createColumnElement = () => {
  const th = document.createElement("th");
  th.append(createInput("search", "search"));
  thead.appendChild(th);
  if (tbody.childElementCount) {
    for (const elem of tbody.children) {
      const td = document.createElement("td");
      elem.appendChild(td);
      td.appendChild(createInput("type", "text here"));
    }
  }
};

addNewColumnBtn.addEventListener("click", () => createColumnElement());

const createRowElement = () => {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let i = 0; i < thead.children.length; i++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(createInput("type", "text here"));
  }
};

addNewRowBtn.addEventListener("click", () => createRowElement());
