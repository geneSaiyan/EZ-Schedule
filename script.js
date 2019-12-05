$("#intro-header").fadeIn(1500);

var currentDate = document.getElementById("current-date");
var currentTime = document.getElementById("current-time");

setInterval(() => {
    var dayNow = moment();
    var timeNow = moment();

    var day = dayNow.format('dddd - MMMM DD, YYYY ');
    var time = timeNow.format('h:mma');

    currentDate.textContent = day;
    currentTime.textContent = time;

}, 1000);