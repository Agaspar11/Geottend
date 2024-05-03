// script.js
// Dummy data for timesheets
const timesheetData = [
    { employeeID: 101, name: "John Doe", date: "2024-04-01", hoursWorked: 8 },
    { employeeID: 102, name: "Jane Smith", date: "2024-04-01", hoursWorked: 7 },
    // Add more timesheet data as needed
  ];
  
  // Function to populate timesheets table
  function populateTimesheets() {
    const timesheetBody = document.getElementById("timesheetBody");
    timesheetBody.innerHTML = "";
    timesheetData.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.employeeID}</td>
        <td>${entry.name}</td>
        <td>${entry.date}</td>
        <td>${entry.hoursWorked}</td>
      `;
      timesheetBody.appendChild(row);
    });
  }
  
  // Function to handle form submission for payroll processing
  function processPayment(event) {
    event.preventDefault();
    const employeeID = document.getElementById("employeeID").value;
    const paymentAmount = document.getElementById("paymentAmount").value;
    // Process payment logic goes here
    console.log(`Payment processed for Employee ID ${employeeID}: $${paymentAmount}`);
    // Clear form fields
    document.getElementById("payrollForm").reset();
  }
  
  // Event listener for form submission
  document.getElementById("payrollForm").addEventListener("submit", processPayment);
  
  // Populate timesheets table on page load
  window.addEventListener("load", populateTimesheets);
  