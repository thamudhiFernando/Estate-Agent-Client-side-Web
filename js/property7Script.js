$(function () {
    $("#large-image").attr('src',"../images/prop7pic1.jpg");
    for (i = 0; i < 7; i++) {
        $("#image-list").append("<img src=\"../images/prop7pic" + (i + 1) + ".jpg\" alt=\"property1\" class=\"small-image\">")
    }

    $.getJSON('../json/properties.json', function (data) {
        $("hgroup").append("<h4 class=\"heading\">Property <strong>" + data.properties[6].type + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Bedrooms <strong>" + data.properties[6].bedrooms + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Price <strong>Rs. " + data.properties[6].price + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Added Date <strong>" + data.properties[6].added.day + "/" + data.properties[6].added.month + "/" + data.properties[6].added.year + "</strong></h4>");

        $("#Description").append("<h2>Description</h2>\n" +
            "                    <p>" + data.properties[6].description + "</p>\n" +
            "                    <section><img src=\"../images/location-icon.png\" alt=\"location-icon\"><h4>" + data.properties[6].location + "</h4></section>\n" +
            "                ");

        $("#Floor").append("<h2>Floor Plan</h2>\n" +
            "                    <img id=\"floor-image\" class=\"zoom\" src=\"../images/prop7Plan.jpg\" alt=\"floor-plan\">");

        $("#Google").append("<h2>Google Map</h2>\n" +
            "                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.015150262389!2d-0.08930988402606181!3d51.58628571275298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c0f238b2127%3A0xcdad5c3227defda4!2sW%20Green%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2slk!4v1609862859630!5m2!1sen!2slk\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n" +
            "                    ");
    });
})

$(function () {
    $(".small-image").click(function () {
        $("#large-image").attr('src',this.src);
    })
})
