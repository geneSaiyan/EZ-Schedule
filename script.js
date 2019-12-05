$("#intro-header").fadeIn(1500);

var currentDate = $("#current-date");
var currentTime = $("#urrent-time");

setInterval(() => {
    var dayNow = moment();
    var timeNow = moment();

    var day = dayNow.format('dddd - MMMM DD, YYYY ');
    var time = timeNow.format('h:mma');

    currentDate.text(day);
    currentTime.text(time);

}, 1000);