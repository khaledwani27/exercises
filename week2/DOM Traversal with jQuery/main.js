
$(".generator").on("click", function () {
  let processor = $(this).closest(".processor").attr("id")
  let dataId = $(this).closest(".computer").data().id
  let busNumber = $(this).closest(".computer").find(".BUS").text()

  console.log(`Processor ID: ${processor}\nComputer's data-id: ${dataId}\nBUS: ${busNumber}`)
})


$(".validator").on("click", function () {
  let generatorText = $(this).closest(".computer").find(".generator").text()
  let mb = $(this).closest(".computer").find(".MB").text()
  let qr1 = $(this).closest(".computer").find(".QR:first-child").text()
  let qr2 = $(this).closest(".computer").find(".QR:nth-child(2)").text()
  console.log(`Text: ${generatorText}\nMB: ${mb}\nQR 1: ${qr1}\nQR 2: ${qr2}`)
})