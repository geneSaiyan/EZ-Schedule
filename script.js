$("#intro-header").fadeIn(2000);
$("#schedule-div").fadeIn(3000);

//Set date and time variables
var currentDate = $("#current-date");
var currentTime = $("#current-time");

//Using moment.js to format and display date and time
setInterval(() => {
    var dayNow = moment();
    var timeNow = moment();

    var day = dayNow.format('dddd - MMMM DD, YYYY ');
    var time = timeNow.format('h:mma');

    currentDate.text(day);
    currentTime.text(time);

}, 1000);



//When a user clicks out of the sticky note save text
// $("#pinkStickyNote").blur(function() {
//     alert("hello");
//   });


  