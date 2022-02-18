const incomeInput = document.getElementById('income'); // income input
const foodInput = document.getElementById('food'); // food input
const rentInput = document.getElementById('rent'); // rent input
const clothesInput = document.getElementById('clothes'); // clothes input
const saveInput = document.getElementById('save'); // saving% input
const balance = document.getElementById('balance'); // balance 



function calculate() {

    if (isNaN(parseInt(incomeInput.value))) {
        incomeInput.classList.toggle('border-red-600');
        alert('Income input must be number...!');
        return;
    }
    else if (isNaN(parseInt(foodInput.value))) {
        foodInput.classList.toggle('border-red-600');
        alert('Food input must be number...!');
        return;
    }
    else if (isNaN(parseInt(rentInput.value))) {
        rentInput.classList.toggle('border-red-600');
        alert('Rent input must be number...!');
        return;
    }
    else if (isNaN(parseInt(clothesInput.value))) {
        clothesInput.classList.toggle('border-red-600');
        alert('Clothes input must be number...!');
        return;
    }
    else if (parseInt(incomeInput.value) < 0) {
        incomeInput.classList.toggle('border-red-600');
        alert('Income input must be a positive number...!')
    }
    else if (parseInt(foodInput.value) < 0) {
        foodInput.classList.toggle('border-red-600');
        alert('Food input must be a positive number...!')
    }

    else if (parseInt(rentInput.value) < 0) {
        rentInput.classList.toggle('border-red-600');
        alert('Rent input must be a positive number...!')
    }
    else if (parseInt(clothesInput.value) < 0) {
        clothesInput.classList.toggle('border-red-600');
        alert('Clothes input must be a positive number...!')
    }
    else {
        const totalExpenses = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
    
        const balance = parseInt(incomeInput.value) - totalExpenses;

        
        document.getElementById('totalExpenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = balance;
    }
}

function save() {
    if (isNaN(parseInt(saveInput.value))) {
        saveInput.classList.toggle('border-red-600');
        alert('Save input must be number...!');
        return;
    }
    else if (!(parseInt(saveInput.value) > 0 && parseInt(saveInput.value) < 101)) {
        saveInput.classList.toggle('border-red-600');
        alert('Save input must be a between 1 to 100...!');
        return;
    }
    else {
        const savingAmount = (parseInt(incomeInput.value) / 100 ) * parseInt(saveInput.value);
        
        const remainingBalance = parseInt(balance.innerText) - savingAmount; 
        
        if (remainingBalance < 0) {
            alert(saveInput.value + '% saving not possible...!');
            return;
        }
    
        document.getElementById('savingAmount').innerText = savingAmount;
        document.getElementById('remainingBalance').innerText = remainingBalance;
    }
}