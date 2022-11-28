$(document).ready(function() {
	$("#nav_list li").click(function()
    {
        //Grabs title of section that we are clicking
        var section = $(this).children("a").attr("title");
        $.ajax({
            type: "get",
            //finds file with the title of the section
            url: "json_files/" + section + ".json",
            //if error then display text
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            //If successful then looks into files and then prints files onto page on specific tags within the main
            success: function(data){
                $("main").html("");
                $.each(data, function(){
                    $.each(this, function(key, value){
                        //Adds in new values into main
                        $("main").append(
                            $("<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>" + "<h3>" + value.speaker + "</h3>"
                            + "<img src=" + value.image + ">" + "<p>" + value.text + "</p>")
                        );
                    })
                })
            }
        });
    });
}); // end ready