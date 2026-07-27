// ==========================================
// Triple Calendar PWA
// calendar.js
// English Calendar Engine
// Year 2025 - 2034
// ==========================================

const MIN_YEAR = 2025;
const MAX_YEAR = 2034;

let selectedYear = new Date().getFullYear();
let selectedMonth = new Date().getMonth();


// Month Names

const monthNames = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];


// Week Days

const weekDays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];


// Load Years

function loadYearList(){

const yearBox =
document.getElementById("yearSelect");

if(!yearBox) return;


yearBox.innerHTML="";


for(let year=MIN_YEAR; year<=MAX_YEAR; year++){

let option=document.createElement("option");

option.value=year;

option.textContent=year;


if(year===selectedYear){

option.selected=true;

}


yearBox.appendChild(option);

}

}


// Create Calendar

function generateCalendar(year,month){

const calendar =
document.getElementById("calendar");

const title =
document.getElementById("calendarTitle");


if(!calendar) return;


calendar.innerHTML="";


// Title

title.textContent =
monthNames[month]+" "+year;


// Day Headers

weekDays.forEach(day=>{

let box=document.createElement("div");

box.className="day-name";

box.textContent=day.substring(0,3);

calendar.appendChild(box);

});


// First Day

let firstDay =
new Date(year,month,1).getDay();


// Total Days

let totalDays =
new Date(year,month+1,0).getDate();


// Empty Boxes

for(let i=0;i<firstDay;i++){

let empty =
document.createElement("div");

empty.className="day empty";

calendar.appendChild(empty);

}


// Date Boxes

for(let date=1; date<=totalDays; date++){


let dayBox =
document.createElement("div");


dayBox.className="day";


dayBox.textContent=date;


// Today Highlight

let today=new Date();


if(
year===today.getFullYear() &&
month===today.getMonth() &&
date===today.getDate()

){

dayBox.classList.add("today");

}


// Click Date

dayBox.onclick=function(){

showDateDetails(year,month,date);

};


calendar.appendChild(dayBox);

}

}



// Show Selected Date

function showDateDetails(year,month,date){


let selected =
new Date(year,month,date);


document.getElementById("englishInfo").innerHTML=

"📅 English Date: "+
selected.toDateString();


}


// Next Month

function nextCalendarMonth(){

selectedMonth++;


if(selectedMonth>11){

selectedMonth=0;

selectedYear++;

}


if(selectedYear>MAX_YEAR){

selectedYear=MAX_YEAR;

selectedMonth=11;

}


generateCalendar(
selectedYear,
selectedMonth
);

}



// Previous Month

function previousCalendarMonth(){

selectedMonth--;


if(selectedMonth<0){

selectedMonth=11;

selectedYear--;

}


if(selectedYear<MIN_YEAR){

selectedYear=MIN_YEAR;

selectedMonth=0;

}


generateCalendar(
selectedYear,
selectedMonth
);

}



// Next Year

function nextCalendarYear(){

if(selectedYear<MAX_YEAR){

selectedYear++;

generateCalendar(
selectedYear,
selectedMonth
);

}

}



// Previous Year

function previousCalendarYear(){

if(selectedYear>MIN_YEAR){

selectedYear--;

generateCalendar(
selectedYear,
selectedMonth
);

}

}



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{

loadYearList();

generateCalendar(
selectedYear,
selectedMonth
);

});
