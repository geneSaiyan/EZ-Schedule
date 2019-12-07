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

var txt9am = document.getElementById("txt9am");
var btn9am = $("#btn9am");

renderText();

function renderText() {
    var txt9amStored = localStorage.getItem("9am");
    txt9am.value = txt9amStored;
}


btn9am.click(function () {
    event.preventDefault();

    localStorage.setItem("9am", txt9am.value);
    renderText();

})


  //When a user clicks out of the sticky note save text
// $("#pinkStickyNote").blur(function() {
//     alert("hello");
//   });
