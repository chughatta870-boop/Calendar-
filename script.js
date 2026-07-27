// ==========================================
// Triple Calendar PWA
// script.js
// Main Controller
// ==========================================


// App Start

document.addEventListener(
"DOMContentLoaded",
()=>{


// Load Current Date

let today = new Date();


let year =
today.getFullYear();

let month =
today.getMonth();


// Default Calendar

if(typeof generateCalendar === "function"){

generateCalendar(
year,
month
);

}


// Load Year List

if(typeof loadYearList === "function"){

loadYearList();

}



// ================================
// Year Select
// ================================


const yearSelect =
document.getElementById(
"yearSelect"
);


if(yearSelect){


yearSelect.addEventListener(
"change",
()=>{


selectedYear =
parseInt(
yearSelect.value
);


generateCalendar(
selectedYear,
selectedMonth
);


});

}



// ================================
// Month Select
// ================================


const monthSelect =
document.getElementById(
"monthSelect"
);



if(monthSelect){


monthSelect.addEventListener(
"change",
()=>{


selectedMonth =
parseInt(
monthSelect.value
);


generateCalendar(
selectedYear,
selectedMonth
);


});

}



// ================================
// Navigation Buttons
// ================================


let nextMonth =
document.getElementById(
"nextMonth"
);


if(nextMonth){

nextMonth.onclick =
nextCalendarMonth;

}



let prevMonth =
document.getElementById(
"prevMonth"
);


if(prevMonth){

prevMonth.onclick =
previousCalendarMonth;

}




let nextYear =
document.getElementById(
"nextYear"
);


if(nextYear){

nextYear.onclick =
nextCalendarYear;

}




let prevYear =
document.getElementById(
"prevYear"
);


if(prevYear){

prevYear.onclick =
previousCalendarYear;

}




// ================================
// Today Button
// ================================


let todayBtn =
document.getElementById(
"todayBtn"
);



if(todayBtn){


todayBtn.onclick =
()=>{


let now =
new Date();


selectedYear =
now.getFullYear();


selectedMonth =
now.getMonth();


generateCalendar(
selectedYear,
selectedMonth
);


};


}



// ================================
// Date Picker
// ================================


let picker =
document.getElementById(
"datePicker"
);



if(picker){


picker.addEventListener(
"change",
()=>{


let date =
new Date(
picker.value
);


selectedYear =
date.getFullYear();


selectedMonth =
date.getMonth();


generateCalendar(
selectedYear,
selectedMonth
);



if(typeof showHijriInfo==="function"){

showHijriInfo(date);

}


if(typeof showPunjabiInfo==="function"){

showPunjabiInfo(date);

}


if(typeof showHolidayInfo==="function"){

showHolidayInfo(date);

}


if(typeof showEventInfo==="function"){

showEventInfo(date);

}


});


}



});
// ==========================================
// Triple Calendar PWA
// script.js
// Main Controller Part 2
// ==========================================


// ==========================================
// Update All Date Information
// ==========================================

function updateAllInformation(date){


// English

let englishBox =
document.getElementById("englishInfo");

if(englishBox){

englishBox.innerHTML =
"📅 English: " +
date.toDateString();

}


// Hijri

if(typeof showHijriInfo === "function"){

showHijriInfo(date);

}


// Punjabi

if(typeof showPunjabiInfo === "function"){

showPunjabiInfo(date);

}


// Holiday

if(typeof showHolidayInfo === "function"){

showHolidayInfo(date);

}


// Event

if(typeof showEventInfo === "function"){

showEventInfo(date);

}

}



// ==========================================
// Calendar Date Click Override
// ==========================================

document.addEventListener(
"click",
function(e){


if(
e.target.classList.contains("day")
&&
e.target.textContent
){

let date =
new Date(
selectedYear,
selectedMonth,
parseInt(e.target.textContent)
);


updateAllInformation(date);

}


});



// ==========================================
// Dark Mode
// ==========================================


function enableDarkMode(){


document.body.classList.toggle(
"dark"
);


localStorage.setItem(

"darkMode",

document.body.classList.contains("dark")

);


}



// Load Dark Mode

function loadDarkMode(){


let mode =
localStorage.getItem(
"darkMode"
);


if(mode==="true"){

document.body.classList.add(
"dark"
);

}

}



// ==========================================
// PWA Install
// ==========================================


let installPrompt;


window.addEventListener(
"beforeinstallprompt",
(e)=>{


e.preventDefault();

installPrompt=e;


});



async function installApp(){


if(installPrompt){


installPrompt.prompt();


let result =
await installPrompt.userChoice;


console.log(result.outcome);


installPrompt=null;


}

}



// ==========================================
// App Ready
// ==========================================


document.addEventListener(
"DOMContentLoaded",
()=>{


loadDarkMode();


let today =
new Date();


updateAllInformation(today);


});
// ==========================================
// Triple Calendar PWA
// script.js
// Main Controller Part 3 Final
// ==========================================


// ===============================
// Date Search
// ===============================

function searchDate(){

let picker =
document.getElementById("datePicker");


if(!picker.value){

alert("Please select a date");

return;

}


let date =
new Date(picker.value);



selectedYear =
date.getFullYear();


selectedMonth =
date.getMonth();



if(typeof generateCalendar==="function"){

generateCalendar(
selectedYear,
selectedMonth
);

}



updateAllInformation(date);


}



// ===============================
// Backup Button
// ===============================

function backupData(){

if(typeof exportCalendarData==="function"){

exportCalendarData();

}

}



// ===============================
// Clear Data
// ===============================

function deleteAllData(){

if(typeof clearAllData==="function"){

clearAllData();

}

}



// ===============================
// Language Settings
// ===============================


let language =
localStorage.getItem(
"language"
) || "en";



function changeLanguage(lang){

language=lang;


localStorage.setItem(
"language",
lang
);


location.reload();

}



// ===============================
// App Settings
// ===============================


const appSettings={

version:"1.0",

calendarStart:2025,

calendarEnd:2034,

language:language

};



function saveAppSettings(){

if(typeof saveSettings==="function"){

saveSettings(
appSettings
);

}

}



// ===============================
// Service Worker
// ===============================


if(
"serviceWorker" in navigator
){


window.addEventListener(
"load",
()=>{


navigator.serviceWorker.register(
"sw.js"
)
.then(()=>{

console.log(
"PWA Service Worker Ready"
);

})
.catch(error=>{

console.log(
"SW Error:",
error
);

});


});


}



// ===============================
// Final App Start
// ===============================


document.addEventListener(
"DOMContentLoaded",
()=>{


saveAppSettings();



console.log(
"Triple Calendar App Loaded"
);



});
