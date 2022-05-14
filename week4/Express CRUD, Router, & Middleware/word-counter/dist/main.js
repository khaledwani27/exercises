$("#submit").on("click", function () {
    const input = $("#furniture").val()
    console.log("hi");
    $.get(`/priceCheck/${input}`, function (furnData) {
        $("#money-container").append(`<div>${furnData.price}<div>`)
    })
    $("#furniture").val("")
})

$("#buy").on("click", function () {
    const input = $("#buy-furniture").val()
    $.get(`/buy/${input}`, function (response) {
        $("body").append(`<div>${response}<div>`)
    })
    $("#buy-furniture").val("")
})
