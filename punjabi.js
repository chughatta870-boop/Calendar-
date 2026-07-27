// ==========================================
// Triple Calendar PWA
// punjabi.js
// Punjabi Desi Calendar Module
// ==========================================


// Punjabi Months

const punjabiMonths = [

{
name:"Chet (چیت)",
season:"Spring",
info:"بہار کا آغاز، فصلوں کی تیاری کا وقت"
},

{
name:"Vaisakh (ویساکھ)",
season:"Harvest",
info:"گندم کی کٹائی اور بیساکھی کا مہینہ"
},

{
name:"Jeth (جیٹھ)",
season:"Summer",
info:"گرمیوں کا آغاز"
},

{
name:"Harh (ہاڑ)",
season:"Hot Summer",
info:"شدید گرمی کا مہینہ"
},

{
name:"Sawan (ساون)",
season:"Rainy",
info:"بارشوں کا موسم"
},

{
name:"Bhadon (بھادوں)",
season:"Monsoon",
info:"برسات کا موسم"
},

{
name:"Assu (اسو)",
season:"Autumn",
info:"خزاں کا آغاز"
},

{
name:"Katik (کاتک)",
season:"Cool",
info:"سردی کی ابتدا"
},

{
name:"Maghar (مگھر)",
season:"Winter",
info:"سرد موسم"
},

{
name:"Poh (پوہ)",
season:"Cold Winter",
info:"سردی کا عروج"
},

{
name:"Magh (ماگھ)",
season:"Winter",
info:"سردی میں کمی کا آغاز"
},

{
name:"Phagun (پھاگن)",
season:"Spring",
info:"بہار سے پہلے کا مہینہ"
}

];



// Approximate Punjabi Month Calculation

function getPunjabiMonth(date){


let month =
date.getMonth();



return punjabiMonths[month];

}



// Show Today's Punjabi Date

function showTodayPunjabi(){


let today =
new Date();


let result =
getPunjabiMonth(today);



let box =
document.getElementById("todayPunjabi");



if(box && result){


box.innerHTML =

`🌾 ${result.name}<br>
Season: ${result.season}`;

}


}



// Selected Date Punjabi Info

function showPunjabiInfo(date){


let result =
getPunjabiMonth(date);



let box =
document.getElementById("punjabiInfo");



let description =
document.getElementById("monthDescription");



if(result && box){


box.innerHTML =

`🌾 Punjabi Month:
${result.name}`;

}



if(result && description){


description.innerHTML =

`${result.info}<br>
Season: ${result.season}`;

}


}



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{

showTodayPunjabi();

});
