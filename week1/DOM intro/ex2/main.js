const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const reservationsCheck = function () {
    const nameVal = document.getElementById("name").value;
    const lowerCaseName = nameVal.toLowerCase();
    const name = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
    if (reservations[name] && !(reservations[name].claimed)) {
        alert("Welcome in, " + name);
    } else if (reservations[name] && reservations[name].claimed) {
        alert("Hmm, someone already claimed this reservation")
    } else if (!reservations[name]) {
        alert("You have no reservation")
    }
}