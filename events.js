// ==========================================
// Triple Calendar PWA
// events.js
// Islamic Events Module
// ==========================================


// Islamic Events Database

const islamicEvents = [

{
name:"🌙 Ramadan Begins",
hijriMonth:9,
hijriDay:1
},

{
name:"⭐ Laylat al-Qadr (Expected)",
hijriMonth:9,
hijriDay:27
},

{
name:"🌙 Eid ul Fitr",
hijriMonth:10,
hijriDay:1
},

{
name:"🕋 Hajj Begins",
hijriMonth:12,
hijriDay:8
},

{
name:"🐑 Eid ul Adha",
hijriMonth:12,
hijriDay:10
},

{
name:"🌙 Islamic New Year",
hijriMonth:1,
hijriDay:1
},

{
name:"🕌 Ashura",
hijriMonth:1,
hijriDay:10
},

{
name:"🌹 Eid Milad un Nabi ﷺ",
hijriMonth:3,
hijriDay:12
}

];


// Custom Events Storage

let customEvents =
JSON.parse(
localStorage.getItem("calendarEvents")
) || [];


// Add Custom Event

function addEvent(date,title){

customEvents.push({

date:date,
title:title

});


localStorage.setItem(
"calendarEvents",
JSON.stringify(customEvents)
);

}



// Get Custom Event

function getCustomEvent(date){

return customEvents.find(

event=>event.date===date

);

}



// Show Events

function showEventInfo(date){


let box =
document.getElementById("eventInfo");


if(!box) return;



let key =

date.getFullYear()+"-"+
String(date.getMonth()+1).padStart(2,"0")+"-"+
String(date.getDate()).padStart(2,"0");



let event =
getCustomEvent(key);



if(event){


box.innerHTML =

"📌 Event: "+event.title;


}

else{


box.innerHTML =
"";

}


}



// Today's Event

document.addEventListener(
"DOMContentLoaded",
()=>{


showEventInfo(new Date());


});
