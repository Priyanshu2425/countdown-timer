function countdown(){
    var targetDate = new Date("2023-12-25T00:00:00Z");
    var currDate = new Date();

    //Calculating MONTHS remaining
    var currMonth = currDate.getMonth()+1;

    var targetMonth = targetDate.getMonth()+1;
    var monthsRemaining = targetMonth-currMonth;

    var targetDay = targetDate.getDate();
    var currDay = currDate.getDate();

    //Calculating DAYS remaining
    var days_remaining = 0;
    var daysPassed = 0;
    for(var i = 1; i < monthsRemaining; i++){
        var month = (currMonth + i);
        var daysInThisMonth = new Date(targetDate.getFullYear(), month, 0).getDate();
        days_remaining += daysInThisMonth;
    } 

    var daysInCurrMonth = new Date(currDate.getFullYear(), currMonth,0).getDate();
    var daysInTargetMonth = new Date(targetDate.getFullYear(), targetMonth,0).getDate();
    days_remaining += (daysInCurrMonth-currDay) + daysInTargetMonth;
    days_remaining -= (daysInTargetMonth- targetDay);

    console.log(days_remaining);
    var daysDiv = document.getElementById("days");
    daysDiv.innerHTML = `<p>${days_remaining}</p>`;

    var hours_remaining = ((days_remaining * 24) - currDate.getHours()) % 24;
    var hoursDiv = document.getElementById("hours");
    hoursDiv.innerHTML = `<p>${hours_remaining}</p>`;

    var minutes_remaining = ((hours_remaining * 60) - currDate.getMinutes())%60;
    var minutesDiv = document.getElementById("minutes");
    minutesDiv.innerHTML = `<p>${minutes_remaining}</p>`;

    var seconds_remaining = ((minutes_remaining * 60) - currDate.getSeconds())%60;
    var secondsDiv = document.getElementById("seconds");
    secondsDiv.innerHTML = `<p>${seconds_remaining}</p>`
    
}


window.onload = countdown;
setInterval(countdown, 1000);