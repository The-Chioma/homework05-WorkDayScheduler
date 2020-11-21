var m = moment();
var today = $("#currentDay").text(m.format("LLL"));

var currentHour = moment().hour();
var currentHourNo = parseInt(currentHour);

var container = $(".container")


//creating timeblocks

var newDiv = $("<div>");
newDiv.attr("class", "row hour time-block");

//this loop will create timeblocks from 9:00 to 17:00
for (var i = 9; i < 18; i++) {

    //this div is a row
    var newDiv = $("<div>");
    newDiv.attr("class", "row hour time-block");
    
    //this is where the time hours are displayed
    var timeHolder = $("<h4>");
    timeHolder.attr("class", "col-2");
    timeHolder.text(i + ":00");
    newDiv.append(timeHolder);
    
    //this is where the text input is displayed
    var textInput = $("<input>");
    textInput.attr("class", "col-8");
    newDiv.append(textInput);
    
    //save button and adding icon to button from Font Awesome
    var button = $("<button>");
    button.attr("class", "col-2 saveBtn");
    
    //icon from Font Awesome
    var buttonImage = $("<i>");
    buttonImage.addClass("far fa-save");
    button.append(buttonImage);
    
    newDiv.append(button);
    
    container.append(newDiv);

    //this is to change the colour scheme according to the current, past and future time.
    if (i < currentHourNo) {
        textInput.addClass("past");
    }
    if (i > currentHourNo) {
        textInput.addClass("future");
    }
    if (i === currentHourNo) {
        textInput.addClass("present");
    }   
      
    //click listener for the save buttons
$(".saveBtn").on("click", function(){
   //need to figure out local storage and saving after refreshing.
    

})}
