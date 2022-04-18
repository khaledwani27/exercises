const makeRegal = function(name) {
    return "His Royal Highness, " + name
  }
      
  const increaseByNameLength = function(money, name) {
    return name.length * money
  }


const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)