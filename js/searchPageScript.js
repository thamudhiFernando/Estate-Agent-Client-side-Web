// Form Script
// Submit Button Click Function
$(function () {
    $(".widget form button").button();
    $(".widget form button").click(function (event) {
        event.preventDefault();
        console.log("success")
    });
});

// Date picker Function
$(function () {
    $("#start-added-date #end-added-date").datepicker();

    var dateFormat = "dd/mm/yyyy";

    var startDate = $("#start-added-date").datepicker(
        {
            changeMonth: true,
            changeYear:true,
            numberOfMonths: 2,
            duration: "normal",
            prevText:"click for previous months",
            nextText:"click for next months",
            maxDate: "defaultDate"
        }
    ).on("change", function () {
        endDate.datepicker("option", "startDate", getAddedDate(this))
    });
    var endDate = $("#end-added-date").datepicker(
        {
            changeMonth: true,
            changeYear:true,
            numberOfMonths: 2,
            duration: "normal",
            prevText:"click for previous months",
            nextText:"click for next months",
            maxDate: "defaultDate"
        }
    ).on("change", function () {
        startDate.datepicker("option", "endDate", getAddedDate(this))
    });


    function getAddedDate(date) {
        var selectedDate;
        try {
            selectedDate = $.datepicker.parseDate(dateFormat, date.value);
        } catch (error) {
            selectedDate = null;
        }
        return selectedDate;
    }
});
