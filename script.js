var currentDayEl = document.getElementById('currentDay');
var currentTimeEl = document.getElementById('currentTime');
var timer = document.getElementById("hour");
var times = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700" ];
var mainEl = document.getElementById('main');
var tasks = [];
var childText = '';
var scheduleTimeId = '';


// Sets Today's Date
let DateTime = luxon.DateTime;
let today = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
let today2 = DateTime.local();
let f = {month: 'long', day: '2-digit', year: 'numeric'};
let z = {hour: 'numeric', minute: 'numeric'};
let y = {hour: 'numeric'};
let timeNumber = parseInt(today.toLocaleString(y)); //sets time to a number for comparison
let hourOfTheDay = parseInt(timer);

// Displays the current Date and Time in the header
currentDayEl.textContent = today2.toLocaleString(f);
currentTimeEl.textContent = today.toLocaleString(z);

// FXN to build the Schedule El
var timeTable = function() {
    var sectionEl = document.createElement('section');
    sectionEl.className = 'time-block col m-1 row justify-content-between';
    sectionEl.setAttribute('name', 'hourly')
    sectionEl.setAttribute("scheduleTimeId", times[i]);
  
    var hourEl = document.createElement('div');
    hourEl.className = 'col-2 hour';
    hourEl.id = 'hour';
    hourEl.textContent = times[i].toString();
  
    var inputEl = document.createElement('input');
    inputEl.className = 'col-8 textarea text-dark';
    inputEl.id = 'textbox';
    inputEl.setAttribute('name', 'taskbox');
    inputEl.setAttribute('type', 'text');
    
    if (times[i] == timeNumber*100) {
      //textboxElcolor red if current hour
      console.log("Current hour");
      inputEl.classList.add("present");
    }
    else if (times[i] < timeNumber*100) {
      //textboxEl color grey if earlier in the day
      console.log("Past");
      inputEl.classList.add("past");
    }
    else {
      //textboxEl color green
      console.log("Future")
      inputEl.classList.add("future");
    }
  
    var buttonEl = document.createElement('div');
    buttonEl.className = 'col-2 saveBtn'
    buttonEl.id = 'saveBtn'
    buttonEl.textContent = "UPDATE";
    buttonEl.setAttribute("onclick", 'taskUpdate(this)');

    sectionEl.appendChild(hourEl);
    sectionEl.appendChild(inputEl);
    sectionEl.appendChild(buttonEl);
    mainEl.appendChild(sectionEl);
}

// FXN to select the text that needs to be updated
var taskUpdate = function(elem) {
    var buttonEl = elem;

    var taskNameInput = buttonEl.closest('section[name="hourly"]');
    var scheduleTimeId = taskNameInput.attributes.scheduleTimeId.value;
    var child = taskNameInput.querySelector("input[name='taskbox']");

    var childText = child.value;
    console.log(scheduleTimeId);
    console.log(childText);
    localStorage.setItem("schedule-time-item-" + scheduleTimeId, JSON.stringify(childText));
}

// FXN to update text
var loadTasks = function() {
  for (var i = 0; i < times.length; i++) {
      var taskNameInput = document.querySelector("section[scheduleTimeId='" + times[i] +"']");
      var taskybox = taskNameInput.querySelector("input[id='textbox']");

      var text = localStorage.getItem("schedule-time-item-" + times[i], JSON.stringify(childText));

      taskybox.setAttribute('placeholder', text);
      console.log(taskybox.attributes.placeholder.textContent);
  }
}    

// FXN that calls each hour
for (var i = 0; i < times.length; i++) {
  console.log(times[i]);
  timeTable();
}

loadTasks();