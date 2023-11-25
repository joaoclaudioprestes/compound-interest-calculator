const btnCalculate = document.getElementById("btn-calculate");
const contentResult = document.getElementById("result");

function calculateFees(initialValue, monthlyApplication, interestRate, timeYield) {
  let decimalRate = interestRate / 100;
  let amount = parseFloat(initialValue);

  for (let i = 0; i < timeYield; i++) {
    amount += parseFloat(monthlyApplication);
    amount *= (1 + decimalRate);
  }

  return amount.toFixed(2);
}

function formatCurrency(result) {
  return parseFloat(result).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();
  const initialValue = document.getElementById("initial-value").value;
  const monthlyApplication = document.getElementById("monthly-application").value;
  const interestRate = document.getElementById("interest-rate").value;
  const timeYield = document.getElementById("time-yield").value;

  if (initialValue && interestRate && timeYield && monthlyApplication) {
    let result = calculateFees(initialValue, monthlyApplication, interestRate, timeYield);
    contentResult.innerText = formatCurrency(result);
  } else {
    alert("Preencha todos os campos!");
  }
});
