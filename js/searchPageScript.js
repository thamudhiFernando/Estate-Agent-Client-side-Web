// Form Script

// Property Type Select Widget Function
$(function () {
    $("#propertyType").selectmenu();
});

// Number of bedrooms Spinner Widget Function
$(function () {
    $("#mini-bedrooms").spinner();
    $("#max-bedrooms").spinner();
    if ( $("#mini-bedrooms").spinner( "instance" ) &&  $("#max-bedrooms").spinner( "instance" )  ) {
        $("#mini-bedrooms").spinner( "destroy" );
        $("#max-bedrooms").spinner( "destroy" );
    } else {
        $("#mini-bedrooms").spinner();
        $("#max-bedrooms").spinner();
    }
});

// Price range Slider Widget Function
$(function () {
    $("#price-range").slider({
        range: true,
        min: 10000,
        max: 800000,
        values: [50, 200],
        slide: function (event, ui) {
            $("#price-text").text("Rs." + ui.values[0] + " - Rs." + ui.values[1]);
        }
    });
    $("#price-text").val("Rs."+ $("#price-range").slider("values",0) +" - Rs."+ $("#price-range").slider("values",1) );
});


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

    var startDate = $("#start-added-date").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 2,
        duration: "normal",
        prevText: "click for previous months",
        nextText: "click for next months",
        maxDate: "defaultDate"
    }).on("change", function () {
        endDate.datepicker("option", "startDate", getAddedDate(this))
    });
    var endDate = $("#end-added-date").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 2,
        duration: "normal",
        prevText: "click for previous months",
        nextText: "click for next months",
        maxDate: "defaultDate"
    }).on("change", function () {
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
