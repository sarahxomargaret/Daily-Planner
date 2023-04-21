$(function () {

    // ID's with times 
    let timeSlot = [
      {id: '#hour-9', hour: 9},
      {id: '#hour-10', hour: 10},
      {id: '#hour-11', hour: 11},
      {id: '#hour-12', hour: 12},
      {id: '#hour-1', hour: 1},
      {id: '#hour-2', hour: 2},
      {id: '#hour-3', hour: 3},
      {id: '#hour-4', hour: 4},
      {id: '#hour-5', hour: 5},
    ]

    // Time/Date variables

    // let currentDate = dayjs().format('dddd, MMMM D, YYYY');
    let currentHour = dayjs().format('HH');
    // let currentDayName = dayjs().format('dddd');
    // let currentMonth = dayjs().format('MMMM');
    // let currentYear = dayjs().$y;
    let todaysDate = dayjs().format("dddd, MMMM D, YYYY");

    $("#currentDay").text(`${todaysDate}`);
   
    
    //color based on time
    $.each(timeSlot, function (key, value) {
      let idHour = value.id;
  
      if (value.hour < currentHour) {
        $(idHour).removeClass("future");
        $(idHour).removeClass("present");
        $(idHour).addClass("past");
      } else if (value.hour == currentHour) {
        $(idHour).removeClass("future");
        $(idHour).removeClass("past");
        $(idHour).addClass("present");
      } else {
        $(idHour).removeClass("present");
        $(idHour).removeClass("past");
        $(idHour).addClass("future");
      }
    });


    //save button
    $(".saveBtn").click(function () {
      let parentEl = $(this).parent().attr("id");
      let parentElId = `#${parentEl}`;
      let textField = $(parentElId).find("textarea").val();
      let userEntry = {
        day: todaysDate,
        hour: parentEl,
        event: textField,
      }

    // local storage
    if (localStorage.getItem("daily-planner") !== null) {
      retrieveUserEntry = JSON.parse(localStorage.getItem("day-planner-events"));
  
      localStorage.setItem(
        "daily-planner",
        JSON.stringify(retrieveUserEntry)
      );
  
      $.each(UserEntry, function (value) {
        if (value.day === todaysDate) {
          let hourId = `#${value.hour}`;
          $(hourId).find("textarea").text(value.event);
        }
      });
    }
    //saved message and timeout
    let savedMessage = $('#savedMessage');
    savedMessage.css('color', 'purple');
    
    setTimeout(function(){
      savedMessage.css('color', 'transparent');
    }, 1000 );
    });
});
  