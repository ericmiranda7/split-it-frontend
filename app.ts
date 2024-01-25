const newExpFormEl= document.getElementById("new-expense-form")
const expNameEl = document.getElementById("expense-name") as HTMLInputElement
const amountEl = document.getElementById("amount") as HTMLInputElement
const expListEl = document.getElementById("expense-list")

newExpFormEl?.addEventListener("submit", (event) => {
  event.preventDefault();

  const expenseName = expNameEl?.value
  const expenseAmount = amountEl?.value

  const expenseItem = document.createElement("li")
  expenseItem.textContent = `${expenseName} - ₹${expenseAmount}`

  expListEl?.appendChild(expenseItem);
})