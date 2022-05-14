const express = require('express')
const router = express.Router()
const wordCounter = {khaled:"wani"}

router.get('/word/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        res.send({ count: wordCounter[req.params.word] })
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word/:word', function (req, res) {

    if (wordCounter[req.params.word]) {
        wordCounter[req.params.word]++
    } else {
        wordCounter[req.params.word] = 1
    }

    res.send({ text: `Added ${req.params.word}`, currentCount: wordCounter[req.params.word] })
})


router.post('/words/:sentence', function (req, res) {

    let words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0


    for (let word of words) {
        if (wordCounter[word]) {
            wordCounter[word]++
            numOldWords++
        } else {
            wordCounter[word] = 1
            numNewWords++
        }
    }

    
    res.send({ text: `Added ${numNewWords} words, ${numOldWords} already existed.`, currentCount: -1 })
})

router.delete('/words/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        delete wordCounter[req.params.word]
        res.status(200).send("ok")
    } else {
        res.status(404).send("word not found")
    }

})


router.get('/sanity', function (req, res) {
    res.send("Server up and running")
})

module.exports = router