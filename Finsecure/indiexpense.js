function saveExpense() {
    var category = document.getElementById("expense-category").value;
    var amount = document.getElementById("expense-amount").value;

    // Here you can process the category and amount (e.g., save to a database, display on the page, etc.)
    console.log("Category:", category);
    console.log("Amount:", amount);

    // For demonstration purposes, clearing the input field after saving
    document.getElementById("expense-amount").value = "";
}
