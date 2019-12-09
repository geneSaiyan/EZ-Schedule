$("#intro-header").fadeIn(2000);
$("#schedule-div").fadeIn(3000);

//Set date and time variables
var currentDate = $("#current-date");
var currentTime = $("#current-time");
var currentHour = moment();
var hour = currentHour.format("H");
var amPm = moment();
var amOrpm = amPm.format("a");

//Using moment.js to format and display date and time
setInterval(() => {
    var dayNow = moment();
    var timeNow = moment();

    var day = dayNow.format('dddd - MMMM DD, YYYY ');
    var time = timeNow.format('h:mma');

    currentDate.text(day);
    currentTime.text(time);

    updateBckgrndColor()
}, 1000);

//Putting Schedule times in an array
var scheduleTimes = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//For loop the schedule times and dynamically create textarea and button variables
for (var i = 0; i < scheduleTimes.length; ++i) {
    this["txt" + scheduleTimes[i]] = $("#txt" + scheduleTimes[i]);
    this["btn" + scheduleTimes[i]] = $("#btn" + scheduleTimes[i]);
}

//Setting sticky note variable
var stickyNote = $("#pinkStickyNote");

//Function to make text display in the textarea elements and sticky note
renderTextarea();

//Created function to display textarea values
function renderTextarea() {

    //For loop the schedule times and dynamically create local storage variables
    for (var i = 0; i < scheduleTimes.length; ++i) {
        this["txt" + scheduleTimes[i] + "stored"] = localStorage.getItem(scheduleTimes[i]);
        this["txt" + scheduleTimes[i]].val(this["txt" + scheduleTimes[i] + "stored"])
    }

    var stickyNoteStored = localStorage.getItem("stickyNote");
    stickyNote.val(stickyNoteStored);
}

//Button clicks to save textarea values
btn9am.click(function () {
    event.preventDefault();

    localStorage.setItem("9am", txt9am.val());
})

btn10am.click(function () {
    event.preventDefault();

    localStorage.setItem("10am", txt10am.val());
})

btn11am.click(function () {
    event.preventDefault();

    localStorage.setItem("11am", txt11am.val());
})

btn12pm.click(function () {
    event.preventDefault();

    localStorage.setItem("12pm", txt12pm.val());
})

btn1pm.click(function () {
    event.preventDefault();

    localStorage.setItem("1pm", txt1pm.val());
})

btn2pm.click(function () {
    event.preventDefault();

    localStorage.setItem("2pm", txt2pm.val());
})

btn3pm.click(function () {
    event.preventDefault();

    localStorage.setItem("3pm", txt3pm.val());
})

btn4pm.click(function () {
    event.preventDefault();

    localStorage.setItem("4pm", txt4pm.val());
})

btn5pm.click(function () {
    event.preventDefault();

    localStorage.setItem("5pm", txt5pm.val());
})

//When a user clicks out of the sticky note save text
$("#pinkStickyNote").blur(function () {
    event.preventDefault();

    localStorage.setItem("stickyNote", stickyNote.val());
});

//Update background color function based on hour of the day
function updateBckgrndColor() {

    if (hour == 9) {

    }
    else if (hour == 10) {

    }
    else if (hour == 11) {

    }
    else if (hour == 12) {

    }
    else if (hour == 13) {

    }
    else if (hour == 14) {

    }
    else if (hour == 15) {

    }
    else if (hour == 16) {

    }
    else if (hour == 17) {

    }
}

