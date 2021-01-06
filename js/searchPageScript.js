// Form Script

// Property Type Select Widget Function
$(function () {
    $("#propertyType").selectmenu();
});

// Number of bedrooms Spinner Widget Function
$(function () {
    $("#mini-bedrooms").spinner();
    $("#max-bedrooms").spinner();
    if ($("#mini-bedrooms").spinner("instance") && $("#max-bedrooms").spinner("instance")) {
        $("#mini-bedrooms").spinner("destroy");
        $("#max-bedrooms").spinner("destroy");
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
    $("#price-text").val("Rs." + $("#price-range").slider("values", 0) + " - Rs." + $("#price-range").slider("values", 1));
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

// Load all result from JSON
$(function () {
    $.getJSON('./json/properties.json', function (data) {
        for (var element in data.properties) {
            $("#property-section").append("<section class=\"property\">\n" +
                "                <img src=\"images/prop1pic1.jpg\" alt=\"property1\" class=\"propertyy\">\n" +
                "                <section class=\"property-simple-discription propertyy\">\n" +
                "                    <h4>" + data.properties[element].bedrooms + " bedrooms " + data.properties[element].type + "</h4>\n" +
                "                    <h4>" + data.properties[element].location + "</h4>\n" +
                "                    <p>" + data.properties[element].description.substr(0, 70) + "</p>\n" +
                "                    <h3> Rs. " + data.properties[element].price + "</h3>\n" +
                "                    <i class=\"fas fa-heart\"></i>\n" +
                "                </section>\n" +
                "            </section>")

            // $(".property").on('click',function () {
            //     window.location = "../../properties/prop1.html";
            // })
            $(".property").draggable({
                revert: true,
                stop: function () {
                    $(this).removeClass("drop-active").closest(".property").removeClass("drop-active");
                },
                drag: function () {
                    $(this).addClass("drop-active");
                    $(this).closest(".property").addClass("drop-active");
                }
            })

            // $("#fav-section").droppable({
            //     tolerance: "touch",
            //     hoverClass: "fav-active",
            //     drop: function (event, ui) {
            //         addToFav(ui.draggable.attr('class').split(' ')[4])
            //     }
            // })

        }
    });
})

// Submit button click function
$(function () {
    $("#submit-btn").click(function () {

        var propertyType = $("#search-section form #propertyType").val();
        var minBedRooms = $("#search-section form #mini-bedrooms").val();
        var maxBedRooms = $("#search-section form #max-bedrooms").val();
        var minPrice = $("#price-range").slider("option", "values")[0];
        var maxPrice = $("#price-range").slider("option", "values")[1];
        var startDate = $("#search-section form #start-added-date").val();
        var endDate = $("#search-section form #end-added-date").val();

        $.getJSON('./json/properties.json', function (data) {
            $("#property-section").empty();
            for (var element in data.properties) {
                if (data.properties[element].type.toLowerCase() == propertyType.toLowerCase() || propertyType == "Any")
                    if (minBedRooms <= data.properties[element].bedrooms && maxBedRooms >= data.properties[element].bedrooms)
                        if (minPrice <= data.properties[element].price && maxPrice >= data.properties[element].price) {
                            {
                                {
                                    // if (startDate >= data.properties[element].added && endDate <= data.properties[element].added) {
                                    // }
                                    $("#property-section").append("<section class=\"property\">\n" +
                                        "                <img src=\"images/prop1pic1.jpg\" alt=\"property1\" class=\"propertyy\">\n" +
                                        "                <section class=\"property-simple-discription propertyy\">\n" +
                                        "                    <h4>" + data.properties[element].bedrooms + " bedrooms " + data.properties[element].type + "</h4>\n" +
                                        "                    <h4>" + data.properties[element].location + "</h4>\n" +
                                        "                    <p>" + data.properties[element].description.substr(0, 70) + "</p>\n" +
                                        "                    <h3> Rs. " + data.properties[element].price + "</h3>\n" +
                                        "                    <i class=\"fas fa-heart\"></i>\n" +
                                        "                </section>\n" +
                                        "            </section>")
                                }
                            }
                        }

            }
        });
    })
});

// $(document).ready(function () {
//     $(".property").on('click',function () {
//         window.location = "../properties/prop1.html";
//     })
//
// })
