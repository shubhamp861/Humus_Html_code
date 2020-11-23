function renderTime(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000){
        year +=1900
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday");
    var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent =daym+" "+dayarray[day]+" "+montharray[month]+" "+year;
    myClock.innerText=daym+" "+dayarray[day]+" "+montharray[month]+" "+year;

    setTimeout("renderTime()",1000);
}
renderTime();