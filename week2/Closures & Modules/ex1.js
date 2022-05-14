
const StringFormatter = function () {

    const capitalizeFirst = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

    const skewerCase = str => str.replace(/ /g, "-")

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("dItHy"));//should print Dorothy
console.log(formatter.skewerCase("blue box"));