//first req
let employeesPromise = fetch("http://localhost:3000/employees");

//tratando dados
employeesPromise.then((response) => {
  response.json().then((employees) => {
    let table = renderTable(employees);
    document.getElementById("app").innerHTML = table;
  });
});

function renderTable(employees) {
  let rows = employees.map((item) => {
    return `<tr> <td>${item.id} </td> 
    <td>${item.name} </td>
    </tr>`;
  });
  return `<table>  ${rows.join("")} </table> `;
}
