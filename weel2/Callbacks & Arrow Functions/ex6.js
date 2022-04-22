const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => "It's " + determineWeather(temp)

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"


//ex7 <div id="box" style="width: 100%; height: 100%;"></div>