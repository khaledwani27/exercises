const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!"
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one."
  }
]

const render = function () {
  for (let post of posts) {
    $("#post").append(`<div class="post">${post.name}: ${post.text}</div>`)
  }
}

$("button").on("click", function () {
  posts.push({
    name: $("#name").val(),
    text: $("#wish").val()
  })
  $("#post").empty()
  render()
  $("#name").val("")
  $("#wish").val("")

})
