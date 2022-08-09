var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}
function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar Numero";
  addButton.type = "button";
  fs.appendChild(addButton);

  var firstinpt = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    var addDiv = document.createElement("div");
    var addInput = document.createElement("input");
    addInput.name = firstinpt.name;
    addInput.type = firstinpt.type;
    //Botao excluir
    var removeButton = document.createElement("button");
    removeButton.textContent = "Excluir";
    removeButton.type = "button";

    addDiv.appendChild(addInput);
    addDiv.appendChild(removeButton);

    removeButton.addEventListener("click", function () {
      addDiv.remove();
    });
    fs.insertBefore(addDiv, addButton);
  });
}
