const LIST = $("#list")

$("button").on("click", function () {
    LIST.append(`<li>${$("input").val()}</li>`)
    $("input").val("")
})

LIST.on("click", "li", function () {
    $(this).remove()
});

