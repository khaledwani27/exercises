let validator = require("validator")
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"

console.log(validator.isEmail("shoobert@dylan"))

console.log(validator.isMobilePhone("786-329-9958", "en-US"))

console.log(validator.blacklist(text, blacklist).toLowerCase())


let faker = require("faker")

const makeHuman = function (num) {
    for (let i = 0; i < num; i++) {

        console.log(faker.fake("{{name.firstName}}, {{image.avatar}}, {{company.companyName}}"))

    }
}

makeHuman(5)