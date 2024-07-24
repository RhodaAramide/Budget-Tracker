

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
let currentEditId = null;

document.getElementById('setTotalIncome').addEventListener('click', function() {
    const totalIncomeInput = parseFloat(document.getElementById('totalIncomeInput').value);

    if (!isNaN(totalIncomeInput)) {
        totalIncome = totalIncomeInput;
        updateLocalStorage();
        updateBalance();
        document.getElementById('totalIncomeInput').value = '';
    }
});

document.getElementById('addTransaction').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount)) {
        const now = new Date();
        const transaction = {
            id: now.getTime().toString(), 
            description,
            amount,
            date: now.toLocaleString()
        };

        transactions.push(transaction);
        updateTransactions();
        updateLocalStorage();
        resetForm();
    }
});

document.getElementById('updateTransaction').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount) && currentEditId !== null) {
        const transaction = transactions.find(trans => trans.id === currentEditId);
        if (transaction) {
            transaction.description = description;
            transaction.amount = amount;
            updateTransactions();
            updateLocalStorage();
            resetForm();
            toggleButtons(false);
        } else {
            console.error('Transaction not found for editing:', currentEditId);
        }
    }
});

document.getElementById('toggleTransactionList').addEventListener('click', function() {
    const transactionList = document.getElementById('transactionList');
    const isHidden = transactionList.classList.toggle('hidden');
    this.textContent = isHidden ? 'Show Transactions' : 'Hide Transactions';
});

function updateTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    let totalExpenses = 0;

    transactions.forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.classList.add('flex', 'justify-between', 'items-center', 'p-4');

        transactionItem.innerHTML = `
            <div class="text-sm text-gray-500">${transaction.date}</div>
            <div class="flex-1 px-6">
                <span class="block font-bold">${transaction.description}</span>
            </div>
            <div>
                <span class="text-red-500">-$${Math.abs(transaction.amount).toFixed(2)}</span>
            </div>
            <div>
                <button class="bg-blue-500 text-white py-1 px-2 rounded edit-btn mr-2 ml-4" data-id="${transaction.id}">Edit</button>
                <button class="bg-red-500 text-white py-1 px-2 rounded delete-btn" data-id="${transaction.id}">Delete</button>
            </div>
        `;

        transactionList.appendChild(transactionItem);
        totalExpenses += transaction.amount;
    });

    document.getElementById('totalExpenses').innerText = `$${totalExpenses.toFixed(2)}`;
    updateBalance();

    attachEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            transactions = transactions.filter(transaction => transaction.id !== id);
            updateTransactions();
            updateLocalStorage();
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const transaction = transactions.find(trans => trans.id === id);
            if (transaction) {
                document.getElementById('description').value = transaction.description;
                document.getElementById('amount').value = transaction.amount;
                currentEditId = transaction.id;
                toggleButtons(true);
            } else {
                console.error('Transaction not found for editing:', id);
            }
        });
    });
}

function updateBalance() {
    const totalExpenses = transactions.reduce((acc, trans) => acc + trans.amount, 0);
    const balance = totalIncome - totalExpenses;
    document.getElementById('totalIncome').innerText = `$${totalIncome.toFixed(2)}`;
    document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('totalIncome', totalIncome);
}

function resetForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    currentEditId = null;
}

function toggleButtons(editMode) {
    document.getElementById('addTransaction').classList.toggle('hidden', editMode);
    document.getElementById('updateTransaction').classList.toggle('hidden', !editMode);
}

document.addEventListener('DOMContentLoaded', function() {
    updateTransactions();
    updateBalance();
});
