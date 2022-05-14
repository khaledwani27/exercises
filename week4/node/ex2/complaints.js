const consts = require("./consts")
const ch = require("./complaintsHandler")


let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.complaints.FINANCE
}


let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.complaints.FINANCE
}


let complaint3 = {
    text: "I'm always full of energy",
    type: consts.complaints.EMOTIONS
}

ch.handleComplaint(complaint1) 
ch.handleComplaint(complaint2) 
ch.handleComplaint(complaint3)