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

    updateBckgrnd()
}, 1000);

//Setting textarea and save button variables
var txt9am = $("#txt9am");
var btn9am = $("#btn9am");
var txt10am = $("#txt10am");
var btn10am = $("#btn10am");
var txt11am = $("#txt11am");
var btn11am = $("#btn11am");

var stickyNote = $("#pinkStickyNote");

//Function to make text display in the textarea elements
renderTextarea();

//Created function to display textarea values
function renderTextarea() {
    var txt9amStored = localStorage.getItem("9am");
    txt9am.val(txt9amStored);

    var txt10amStored = localStorage.getItem("10am");
    txt10am.val(txt10amStored);

    var txt11amStored = localStorage.getItem("11am");
    txt11am.val(txt11amStored);

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

//When a user clicks out of the sticky note save text
$("#pinkStickyNote").blur(function () {
    event.preventDefault();

localStorage.setItem("stickyNote", stickyNote.val());
});

function updateBckgrnd(){
    
    if(hour == 9){
        
    }
    else if (hour == 10){

    }
    else if (hour == 11){

    }
    else if (hour == 12){
        
    }
    else if (hour == 13){
        
    }
    else if (hour == 14){
        
    }
    else if (hour == 15){
        
    }
    else if (hour == 16){
        
    }
    else if (hour == 17){
        
    }
}

