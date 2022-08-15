document.getElementById("btn-deposit").addEventListener("click", () => {
  const deposit = document.getElementById("deposit-field");
  const newDeposit = parseFloat(deposit.value);

  //   current deposit amouunt

  const previousDeposit = document.getElementById("deposit-total");
  const currentDeposit = previousDeposit.innerText;
  const previousDepositBalance = parseInt(currentDeposit);

  //   add current deposit & previous deposit amount

  const newBalanceTotal = previousDepositBalance + newDeposit;
  previousDeposit.innerText = newBalanceTotal;

  //   balance Totoal
  const balance = document.getElementById("balance-total");
  const balanceTotal = parseFloat(balance.innerText);
  balance.innerText = balanceTotal + newBalanceTotal;

  // for input fill empty
  deposit.value = "";
});

// withdraw button function

document.getElementById("btn-withdraw").addEventListener("click", () => {
  const withdraw = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdraw.value);
  //   withdraw amount
  const previousWithDraw = document.getElementById("withdraw-total");
  const withDrawTotal = parseFloat(previousWithDraw.innerText);

  // total withdraw amount
  const totalWithDraw = withdrawAmount + withDrawTotal;
  previousWithDraw.innerText = totalWithDraw;

  //   balance total
  const prevBalance = document.getElementById("balance-total");
  const balanceText = parseFloat(prevBalance.innerText);

  const balanceTextTotal = balanceText - totalWithDraw;
  prevBalance.innerText = balanceTextTotal;
  console.log(balanceTextTotal);

  withdraw.value = "";
});
