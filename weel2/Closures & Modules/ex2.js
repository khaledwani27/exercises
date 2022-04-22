const Bank = function () {
    let _money = 500;

    const deposit = cash => _money += cash


    const showBalance = () => console.log(_money)

    return {
        deposit,
        showBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()