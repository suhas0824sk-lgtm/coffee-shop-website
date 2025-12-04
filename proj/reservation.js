const bookedTables = JSON.parse(localStorage.getItem("bookedTables")) || [];

const tableGrid = document.querySelector(".table-grid");
const form = document.getElementById("reservationForm");
const selectedTableInput = document.getElementById("selectedTable");

let selectedTable = null;

// Generate 5 tables dynamically
for (let i = 1; i <= 5; i++) {
  const tableDiv = document.createElement("div");
  tableDiv.className = "table";
  tableDiv.textContent = "Table " + i;

  if (bookedTables.includes(i)) {
    tableDiv.classList.add("booked");
  }

  tableDiv.addEventListener("click", () => {
    if (bookedTables.includes(i)) {
      alert("Table " + i + " is already booked.");
    } else {
      document.querySelectorAll(".table").forEach(t => t.classList.remove("selected"));
      tableDiv.classList.add("selected");
      selectedTable = i;
      selectedTableInput.value = i;
    }
  });

  tableGrid.appendChild(tableDiv);
}

// On form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const table = parseInt(selectedTableInput.value);

  if (!table || bookedTables.includes(table)) {
    alert("Please select a valid, available table.");
    return;
  }

  // Simulate saving reservation
  bookedTables.push(table);
  localStorage.setItem("bookedTables", JSON.stringify(bookedTables));

  alert(
    `Reservation Confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}\nTable: ${table}`
  );

  form.reset();
  window.location.reload();
});

// Function to reset all bookings
function resetBookings() {
  if (confirm("Are you sure you want to reset all table bookings?")) {
    localStorage.removeItem("bookedTables");
    alert("All bookings have been cleared.");
    window.location.reload();
  }
}
