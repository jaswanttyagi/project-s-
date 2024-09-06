let isdobOpen = false;
let dateofbirth; 
let settingbtnEl = document.getElementById("settingicon");
const settingcontentEl = document.getElementById("settingContent");
let IntitialtextEl = document.getElementById("Initial-content");
let afterdobbtn = document.getElementById("afterDobButton");
let dobbuttonEl = document.getElementById("dobbtn");
let dobinputEl = document.getElementById("dob");

yearEL = document.getElementById("years");
monthEL = document.getElementById("Months");
dayEL = document.getElementById("Days");
hourEL = document.getElementById("Hour");
minEL = document.getElementById("Minutes");
secEL = document.getElementById("seconds");

const maketwodigitnumber = (number) =>{
    return number > 9 ? number : `0${number}`;
}

const Togglebtn = ()=>{
    if(isdobOpen){
        settingcontentEl.classList.add("hide");
    }
    else{
        settingcontentEl.classList.remove("hide");
    }
    isdobOpen = !isdobOpen
    console.log("toggle",isdobOpen);
};
const updateage = ()=>{
    const currentdate = new Date();
    const dateDiff = currentdate - dateofbirth;
    const year = Math.floor(dateDiff / (1000*60*60*24*365));
    const month = Math.floor(dateDiff / (1000*60*60*24*365)) % 12;
    const day = Math.floor(dateDiff / (1000*60*60*24)) % 30;
    const hour = Math.floor(dateDiff / (1000*60*60)) % 24;
    const min = Math.floor(dateDiff / (1000*60)) % 60 ;
    const sec = Math.floor(dateDiff / (1000))%60;
    yearEL.innerHTML = maketwodigitnumber(year);
 monthEL.innerHTML = maketwodigitnumber(month);
 dayEL.innerHTML = maketwodigitnumber(day);
 hourEL.innerHTML =maketwodigitnumber(hour);
 minEL.innerHTML =maketwodigitnumber(min);
 secEL.innerHTML =maketwodigitnumber(sec);
};
const setdobhandler = () => {
    datestring = dobinputEl.value;
    dateofbirth = datestring ? new Date(datestring):null;
if(dateofbirth){
IntitialtextEl.classList.add("hide");
setInterval(() => updateage(), 1000);
}
else{
    IntitialtextEl.classList.remove("hide");

}
};
setdobhandler();
settingbtnEl.addEventListener("click", Togglebtn);
dobbuttonEl.addEventListener("click", setdobhandler);  