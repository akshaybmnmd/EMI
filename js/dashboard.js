const logoutButton = document.getElementById("logout_button");
const depositButton = document.getElementById("deposit_button");
const withdrawButton = document.getElementById("withdraw_button");

//logout
logoutButton.addEventListener("click", () => {
  document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "index.html";
});

// //get input value
// function getInputVlaue(inputID) {
//   const amountField = document.getElementById(inputID);
//   const newValue = amountField.value;
//   const finalAmount = parseFloat(newValue);
//   // amountField.value = ' '
//   return finalAmount;
// }

// //update total values
// function updateTotalValue(totalValueID, moneyAmount) {
//   const totalAmount = document.getElementById(totalValueID);
//   const previousAmount = totalAmount.innerText;
//   const currentAmount = parseFloat(previousAmount) + moneyAmount;
//   totalAmount.innerText = currentAmount;
// }

// //update total balances
// function updateTotalBalance(balanceID, moneyAmount, isAdd) {
//   const totalBalance = document.getElementById(balanceID);
//   const previousBalance = totalBalance.innerText;

//   isAdd == true
//     ? (totalBalance.innerText = parseFloat(previousBalance) + moneyAmount)
//     : (totalBalance.innerText = parseFloat(previousBalance) - moneyAmount);
// }

// //deposit
// depositButton.addEventListener("click", () => {
//   const depositAmount = getInputVlaue("deposit_money_field");
//   if (depositAmount > 0 && depositAmount <= 1000) {
//     updateTotalValue("deposit_total", depositAmount);
//     updateTotalBalance("balance_total", depositAmount, true);
//   } else {
//     document.getElementById("deposit_error_messege").innerHTML =
//       "Amount must be positive numbers or deposit money between $1000 !!";
//   }
// });

// //withdraw
// withdrawButton.addEventListener("click", () => {
//   const withDrawAmount = getInputVlaue("withdraw_money_field");
//   if (withDrawAmount > 0 && withDrawAmount <= 1000) {
//     updateTotalValue("withdraw_total", withDrawAmount);
//     updateTotalBalance("balance_total", withDrawAmount, false);
//   } else {
//     document.getElementById("withdraw_error_messege").innerHTML =
//       "Amount must be positive numbers or withdraw money less then $1000 !!";
//   }
// });

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var key = getCookie("userName");
var Data = {
  akshay: { next_emi: 0, paid_total: 0, toal: 19780 },
  adarsh: { next_emi: 825, paid_total: 0, toal: 19780 },
  anurudh: { next_emi: 817, paid_total: 820, toal: 9804 },
};

updateUI(
  Data[key].next_emi,
  Data[key].toal - Data[key].paid_total,
  Data[key].paid_total
);

function updateUI(nextEmi, balance, paid) {
  document.getElementById("next_emi").innerText = nextEmi;
  document.getElementById("balance_total").innerText = balance;
  document.getElementById("paid_total").innerText = paid;
}
