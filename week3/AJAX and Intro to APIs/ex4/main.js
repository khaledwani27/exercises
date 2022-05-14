const fetch = function () {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=cats&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`,
        success: function (gifsData) {
            $("#gif").append(`<iframe src="${gifsData.data[1].embed_url}">`)
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch()

