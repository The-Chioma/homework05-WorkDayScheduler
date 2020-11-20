var m = moment();
var today = $("#currentDay").text(m.format("LLL"));

var currentHour = moment().hour();
var currentHourNo = parseInt(currentHour);

var container = $(".container")


//creating timeblocks

var newDiv = $("<div>");
newDiv.attr("class", "row hour time-block");


for (var i = 9; i < 18; i++) {

    var newDiv = $("<div>");
    newDiv.attr("class", "row hour time-block");
    
    var timeHolder = $("<h4>");
    timeHolder.attr("class", "col-2");
    timeHolder.text(i + ":00");
    newDiv.append(timeHolder);
    
    var textInput = $("<input>");
    textInput.attr("class", "col-8");
    newDiv.append(textInput);
    
    var button = $("<button>");
    button.attr("class", "col-2 saveBtn");
    button.text("Save");
    newDiv.append(button);
    
    container.append(newDiv);

    if (i < currentHourNo) {
        textInput.addClass("past");
    }
    if (i > currentHourNo) {
        textInput.addClass("future");
    }
    if (i === currentHourNo) {
        textInput.addClass("present");
    }   
      

$(".saveBtn").on("click", function(){
   //need to figure out local storage and saving after refreshing.
    

})

