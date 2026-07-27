// ==========================================
// Triple Calendar PWA
// storage.js
// Local Storage Management
// ==========================================


// Save Data

function saveData(key,value){

localStorage.setItem(
key,
JSON.stringify(value)
);

}



// Load Data

function loadData(key){

let data =
localStorage.getItem(key);


if(data){

return JSON.parse(data);

}


return null;

}



// Delete Data

function deleteData(key){

localStorage.removeItem(key);

}



// ================================
// Notes System
// ================================


function saveNoteData(){


let note =
document.getElementById("noteText").value;


let notes =
loadData("calendarNotes") || [];


notes.push({

date:new Date().toISOString(),

text:note

});


saveData(
"calendarNotes",
notes
);


alert("Note Saved Successfully");


}



// Load Notes

function loadNotes(){


let notes =
loadData("calendarNotes") || [];


return notes;

}



// ================================
// Settings
// ================================


function saveSettings(settings){


saveData(
"calendarSettings",
settings
);


}



// Get Settings

function getSettings(){


return loadData(
"calendarSettings"
) || {};

}



// ================================
// Backup Data
// ================================


function exportCalendarData(){


let backup={

notes:
loadData("calendarNotes"),

events:
loadData("calendarEvents"),

settings:
loadData("calendarSettings")

};



let file =
new Blob(

[
JSON.stringify(
backup,
null,
2
)
],

{
type:"application/json"
}

);



let link =
document.createElement("a");


link.href =
URL.createObjectURL(file);


link.download =
"Triple-Calendar-Backup.json";


link.click();


}



// ================================
// Clear All Data
// ================================


function clearAllData(){


if(confirm(
"Delete all saved data?"
)){


localStorage.clear();


alert(
"All Data Deleted"
);


}


}



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{


let saveBtn =
document.getElementById("saveNote");


if(saveBtn){

saveBtn.onclick =
saveNoteData;

}


});
