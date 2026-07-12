const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const department = document.querySelector('input[name="Department"]:checked').value;

    const studentTable = document.getElementById("studenttable");
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.textContent = name;
    row.append(nameTd);
    
    const idTd = document.createElement("td");
    idTd.textContent = id;
    row.appendChild(idTd);

    const departmentTd = document.createElement("td");
    departmentTd.textContent = department;
    row.appendChild(departmentTd);


    const actionTd = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", ()=>{
        row.remove();
    });

    
    actionTd.appendChild(deleteButton);

    row.appendChild(actionTd);

    studentTable.appendChild(row);
});