// ==========================================
// Triple Calendar PWA
// api.js
// Hijri Calendar API Module
// ==========================================


// API Settings

const HIJRI_API_URL =
"https://api.aladhan.com/v1/gToH";



// Convert Gregorian Date To Hijri

async function convertToHijri(date){


try{


let day =
date.getDate();


let month =
date.getMonth()+1;


let year =
date.getFullYear();



let response =
await fetch(

`${HIJRI_API_URL}/${day}-${month}-${year}`

);



let data =
await response.json();



if(data.code===200){


let hijri =
data.data.hijri;



return {

day:hijri.day,

month:hijri.month.en,

year:hijri.year

};


}


}

catch(error){

console.log(
"Hijri API Error:",
error
);

}



return null;


}



// Display Hijri Date

async function showApiHijri(date){


let result =
await convertToHijri(date);



let box =
document.getElementById("hijriInfo");



if(result && box){


box.innerHTML =

`🌙 Hijri Date:
${result.day}
${result.month}
${result.year}`;

}


}



// Today's Hijri From API

async function loadTodayHijriAPI(){


let today =
new Date();


let result =
await convertToHijri(today);



let box =
document.getElementById("todayHijri");



if(result && box){


box.innerHTML =

`🌙 ${result.day}
${result.month}
${result.year}`;

}


}



// Run

document.addEventListener(
"DOMContentLoaded",
()=>{

loadTodayHijriAPI();

});
