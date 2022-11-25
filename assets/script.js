// GLOBAL VARIABLES
let currentDayEl = $("#current-day");

// FUNCTIONS

// Display date and time
function displayDay() {
  let rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  currentDayEl.text(rightNow);
}

// EVENT LISTENERS

// Display date and time when page is initially displayed
displayDay();
setInterval(displayDay, 1000);

// Click "Save" icon to save and store data locally
$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    console.log(parent, description);
    localStorage.setItem(parent, description);
  });

  $(".time-block").each(function () {
    let hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour > dayjs().hour()) {
      $(this).addClass("future");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
  // Click "Refresh" and saved items will remain displayed
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
});
