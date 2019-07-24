function getData() {

    var input = $("#search").val().trim();
    input = input.replace(/ /g, "+");
    var xhr = $.get('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC');
    xhr.done(function(response) {
        console.log("success got data", response);
        var gifs = response.data;
        for (var i in gifs) {
            $(".inner").append("<img src='" + gifs[i].images.original.url + "' style='height:350px; width:350px;'/>")
        }
    });
}

