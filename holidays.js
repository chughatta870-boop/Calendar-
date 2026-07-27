// ==========================================
// Triple Calendar PWA
// holidays.js
// Pakistan Holidays Module
// ==========================================


// Pakistan Public Holidays

const pakistanHolidays = [

{
date:"01-01",
name:"New Year Day"
},

{
date:"02-05",
name:"Kashmir Day"
},

{
date:"03-23",
name:"Pakistan Day"
},

{
date:"05-01",
name:"Labour Day"
},

{
date:"08-14",
name:"Independence Day"
},

{
date:"09-06",
name:"Defence Day"
},

{
date:"11-09",
name:"Iqbal Day"
},

{
date:"12-25",
name:"Quaid-e-Azam Day / Christmas"
}

];



// Get Holiday

function getHoliday(date){


let month =
String(date.getMonth()+1)
.padStart(2,"0");


let day =
String(date.getDate())
.padStart(2,"0");


let key =
day+"-"+month;



let holiday =
pakistanHolidays.find(

item=>item.date===key

);



return holiday;

}



// Show Holiday Information

function showHolidayInfo(date){


let box =
document.getElementById("holidayInfo");

let holiday =
getHoliday(date);



if(!box) return;



if(holiday){


box.innerHTML =

`🇵🇰 Holiday:
${holiday.name}`;


}

else{


box.innerHTML =
"";


}

}



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{


let today =
new Date();


showHolidayInfo(today);


});
