// ==========================================
// Triple Calendar PWA
// hijri.js
// Islamic Calendar Module
// ==========================================


// Get Hijri Date

function getHijriDate(date){


let hijri = new Intl.DateTimeFormat(

"en-u-ca-islamic",

{
day:"numeric",
month:"long",
year:"numeric"
}

).format(date);


return hijri;

}



// Show Today's Hijri

function showTodayHijri(){


let today = new Date();


let box =
document.getElementById("todayHijri");


if(box){

box.innerHTML =
"🌙 "+ getHijriDate(today);

}


}



showTodayHijri();




// Selected Date Hijri Info

function showHijriInfo(date){


let hijri =
getHijriDate(date);


let info =
document.getElementById("hijriInfo");


if(info){

info.innerHTML =
"🌙 Islamic Date: "+hijri;

}


}



// ==========================================
// Islamic Events
// ==========================================


const islamicEvents = [

{
month:1,
day:1,
name:"Islamic New Year"
},

{
month:1,
day:10,
name:"Ashura"
},

{
month:9,
day:1,
name:"Beginning of Ramadan"
},

{
month:10,
day:1,
name:"Eid ul Fitr"
},

{
month:12,
day:10,
name:"Eid ul Adha"
}

];




// Check Islamic Event

function checkIslamicEvent(){

let eventBox =
document.getElementById("islamicEvent");


if(!eventBox) return;


eventBox.innerHTML =
"🌙 Islamic Events Loaded";

}



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{

showTodayHijri();

checkIslamicEvent();

});
