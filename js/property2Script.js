$(function () {
    $("#large-image").attr('src',"../images/prop2pic1.jpg");
    for (i = 0; i < 8; i++) {
        $("#image-list").append("<img src=\"../images/prop2pic" + (i + 1) + ".jpg\" alt=\"property1\" class=\"small-image\">")
    }

    $.getJSON('../json/properties.json', function (data) {
        $("hgroup").append("<h4 class=\"heading\">Property <strong>" + data.properties[1].type + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Bedrooms <strong>" + data.properties[1].bedrooms + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Price <strong>Rs. " + data.properties[1].price + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Added Date <strong>" + data.properties[1].added.day + "/" + data.properties[1].added.month + "/" + data.properties[1].added.year + "</strong></h4>");

        $("#Description").append("<h2>Description</h2>\n" +
            "                    <p>" + data.properties[1].description + "</p>\n" +
            "                    <section><img src=\"../images/location-icon.png\" alt=\"location-icon\"><h4>" + data.properties[1].location + "</h4></section>\n" +
            "                ");

        $("#Floor").append("<h2>Floor Plan</h2>\n" +
            "                    <img id=\"floor-image\" class=\"zoom\" src=\"../images/prop2Plan.jpg\" alt=\"floor-plan\">");

        $("#Google").append("<h2>Google Map</h2>\n" +
            "                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.626661456117!2d-2.638949983957279!3d54.11582092449597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c8163de96a981%3A0xe44afefb142c6107!2sHornby%20Bank%2C%20Hornby%2C%20Lancaster%2C%20UK!5e0!3m2!1sen!2slk!4v1609862206294!5m2!1sen!2slk\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n" +
            "                    ");
    });
})

$(function () {
    $(".small-image").click(function () {
        $("#large-image").attr('src',this.src);
    })
})
