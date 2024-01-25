"use strict";
const newExpFormEl = document.getElementById("new-expense-form");
const expNameEl = document.getElementById("expense-name");
const amountEl = document.getElementById("amount");
const expListEl = document.getElementById("expense-list");
newExpFormEl === null || newExpFormEl === void 0 ? void 0 : newExpFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const expenseName = expNameEl === null || expNameEl === void 0 ? void 0 : expNameEl.value;
    const expenseAmount = amountEl === null || amountEl === void 0 ? void 0 : amountEl.value;
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expenseName} - ₹${expenseAmount}`;
    expListEl === null || expListEl === void 0 ? void 0 : expListEl.appendChild(expenseItem);
});
