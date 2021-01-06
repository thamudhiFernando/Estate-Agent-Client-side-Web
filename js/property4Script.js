$(function () {
    $("#large-image").attr('src',"../images/prop4pic1.jpg");
    for (i = 0; i < 7; i++) {
        $("#image-list").append("<img src=\"../images/prop4pic" + (i + 1) + ".jpg\" alt=\"property1\" class=\"small-image\">")
    }

    $.getJSON('../json/properties.json', function (data) {
        $("hgroup").append("<h4 class=\"heading\">Property <strong>" + data.properties[3].type + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Bedrooms <strong>" + data.properties[3].bedrooms + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Price <strong>Rs. " + data.properties[3].price + "</strong></h4>\n" +
            "                <h4 class=\"heading\">Added Date <strong>" + data.properties[3].added.day + "/" + data.properties[3].added.month + "/" + data.properties[3].added.year + "</strong></h4>");

        $("#Description").append("<h2>Description</h2>\n" +
            "                    <p>" + data.properties[3].description + "</p>\n" +
            "                    <section><img src=\"../images/location-icon.png\" alt=\"location-icon\"><h4>" + data.properties[3].location + "</h4></section>\n" +
            "                ");

        $("#Floor").append("<h2>Floor Plan</h2>\n" +
            "                    <img id=\"floor-image\" class=\"zoom\" src=\"../images/prop4Plan.jpg\" alt=\"floor-plan\">");

        $("#Google").append("<h2>Google Map</h2>\n" +
            "                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18817.382075838566!2d-2.410411650320106!3d53.87535657656601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b77e50d2a93bb%3A0x7294a3f0312a973!2sClitheroe%2C%20UK!5e0!3m2!1sen!2slk!4v1609862977182!5m2!1sen!2slk\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n" +
            "                    ");
    });
})

$(function () {
    $(".small-image").click(function () {
        $("#large-image").attr('src',this.src);
    })
})
