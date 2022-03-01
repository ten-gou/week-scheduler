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