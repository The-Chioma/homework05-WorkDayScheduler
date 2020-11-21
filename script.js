var m = moment();
var today = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

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
    newDiv.attr("id", i.toString());

    //this is where the time hours are displayed
    var timeHolder = $("<h4>");
    timeHolder.attr("class", "col-2");
    timeHolder.text(i + ":00");
    newDiv.append(timeHolder);
    
    //this is where the text input is displayed
    var textInput = $("<input>");
    textInput.attr("class", "col-8 userEvent");
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
}      


    //event listener for the save buttons
    $(".saveBtn").on("click", function(){
     //storing the text input in local storage
        var event = $(this).siblings(".userEvent").val();
        console.log(event);

        var time = $(this).parent().attr("id");
        console.log(time);

        localStorage.setItem(time, event);
    });

    //getting the items from local storage byt their unique IDs and class names
    $("#9 .userEvent").val(localStorage.getItem("9"));
    $("#10 .userEvent").val(localStorage.getItem("10"));
    $("#11 .userEvent").val(localStorage.getItem("11"));
    $("#12 .userEvent").val(localStorage.getItem("12"));
    $("#13 .userEvent").val(localStorage.getItem("13"));
    $("#14 .userEvent").val(localStorage.getItem("14"));
    $("#15 .userEvent").val(localStorage.getItem("15"));
    $("#16 .userEvent").val(localStorage.getItem("16"));
    $("#17 .userEvent").val(localStorage.getItem("17"));
 