function solution1() {
  //first req
  let employeesPromise = fetch("http://localhost:3000/employees");

  //tratando dados
  employeesPromise.then((response) => {
    response.json().then((employees) => {
      let employeesRoles = fetch("http://localhost:3000/roles");

      let roles = employeesRoles.then((r2) =>
        r2.json().then((i) => {
          let table = renderTable(employees, i);
          document.getElementById("app").innerHTML = table;
        })
      );
    });
  });
}
solution1();

function fetchJson(url) {
  fetch(url).then((r) => {
    return r.json();
  });
}
function solution2() {
  //first req
  fetchJson("http://localhost:3000/employees").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((i) => {
      let table = renderTable(employees, i);
      document.getElementById("app").innerHTML = table;
    });
  });
}
solution2();
function renderTable(employees, roles) {
  let rows = employees.map((item) => {
    let role = roles.find((role) => role.id == item.role_id);
    return `<tr> <td>${item.id} </td> 
    <td>${item.name} </td>
       <td>${role.name} </td>
    </tr>`;
  });
  return `<table>  ${rows.join("")} </table> `;
}
