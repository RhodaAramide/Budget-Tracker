# Personal Budget Tracker

## Overview

The Personal Budget Tracker is a web application that allows users to manage their finances by adding, editing, and deleting income and expense transactions. The application calculates and displays the total income, total expenses, and the balance automatically.

## Features

- **Add Transaction:** Users can add a new transaction by entering a description and amount. The transaction will be added to the list, and the totals will be updated.
- **Delete Transaction:** Each transaction in the list has a delete button. Clicking this button will remove the transaction from the list and update the totals.
- **Edit Transaction:** Users can edit an existing transaction, allowing them to change the description or amount of a transaction.
- **Calculate Totals:** The application automatically calculates and displays the total income, total expenses, and balance based on the transactions.
- **Hide/Show Transaction List:** Users can hide or show the transaction list with a toggle button.
- **Local Storage:** Transactions and total income are stored in the browser's local storage, allowing data to persist between page reloads.
- **Responsive Design:** The application is designed to be responsive and looks good on different screen sizes.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript (Vanilla)

## Setup

### Prerequisites

Make sure you have a web browser installed on your computer.

### Installation

1. Clone the repository or download the ZIP file and extract it.
   ```bash
   git clone https://github.com/RhodaAramide/Budget-Tracker.git
   ```
2. Navigate to the project directory.
   ```bash
   cd budget-tracker
   ```
3. Open the `index.html` file in your preferred web browser to view the application.
   ```bash
   open index.html
   ```

## Usage

1. **Set Total Income:**
   - Enter the total income amount in the input field.
   - Click the "Set Total Income" button to save the total income.

2. **Add a Transaction:**
   - Enter the transaction description in the input field.
   - Enter the transaction amount in the input field.
   - Click the "Add Transaction" button to add the transaction to the list.

3. **Edit a Transaction:**
   - Click the "Edit" button next to the transaction you want to edit.
   - Modify the transaction description or amount in the input fields.
   - Click the "Update Transaction" button to save the changes.

4. **Delete a Transaction:**
   - Click the "Delete" button next to the transaction you want to remove.

5. **Hide/Show Transaction List:**
   - Click the "Show Transactions" or "Hide Transactions" button to toggle the visibility of the transaction list.

## Deployed Link

You can access the deployed application at the following link:

[Personal Budget Tracker](https://rhodaaramide.github.io/Budget-Tracker/index.html)

## File Structure

```
budget-tracker/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Author

RhodaAramide


