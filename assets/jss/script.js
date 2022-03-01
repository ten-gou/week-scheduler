var currentDayEl = document.getElementById('currentDay');
var saveBtnEl = document.getElementById('saveBtn');
var currentTimeEl = document.getElementById('currentTime');
var textBoxEl = document.getElementById('textbox');

// Sets Today's Date
let DateTime = luxon.DateTime;
let today = DateTime.local();
let f = {month: 'long', day: '2-digit', year: 'numeric'};
let z = {hour: 'numeric', minute: 'numeric'};


// shows the methods that the date is displayed
//currentDayEl.textContent = JSON.stringify(luxon.DateTime.DATETIME_FULL);

// Displays the current Date and Time in the header
currentDayEl.textContent = today.toLocaleString(f);

// Displays Current Time in the header
currentTimeEl.textContent = today.toLocaleString(z);

// Fxn to make the textbox an input
var taskUpdate = function(event) {
  // stops the webpage from completing default behaviors- in this case, reloading the page with every form submission
  event.preventDefault();

  // allows the user to update tasks per hour
  var taskNameInput = document.querySelector("input[name='taskBox']").value;
  
  // JUST A CONSOLE LOG TO MAKE SURE IT CAN READ
  console.log(taskNameInput);
}

// Fxn to make the Update Button log the text
saveBtnEl.addEventListener("click", taskUpdate);