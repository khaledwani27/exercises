const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch("isbn", 9782806269171)

