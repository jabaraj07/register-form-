function change() {
    let register = document.getElementById("register");
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Age = document.getElementById("age").value;
    let Country = document.getElementById("country").value;
    let Button = document.getElementById("button").value;

    if (Name && Email && Age && Country) {
      const table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
      const NewRow = table.insertRow();

      const cell1 = NewRow.insertCell(0);
      const cell2 = NewRow.insertCell(1);
      const cell3 = NewRow.insertCell(2);
      const cell4 = NewRow.insertCell(3);

      cell1.textContent = Name;
      cell2.textContent = Email;
      cell3.textContent = Age;
      cell4.textContent = Country;

      document.getElementById("register").reset();
    } else {
      alert("PLEASE FILL ALL INPUT AREA");
    }
  }