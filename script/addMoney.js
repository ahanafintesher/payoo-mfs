document.getElementById('add-money-btn').addEventListener('click', function (){
   
    const bankAccount = getValueFromInput('add-money-bank');
    if (bankAccount == 'Select A Bank'){
        alert('Please select a bank')
        return;
    }

    const accno = getValueFromInput('add-money-number');
    if(accno.length != 11){
        alert('Invalid Account Number')
        return
    }

    const amount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin === '1234'){
        alert(`Add Money Success From ${bankAccount} at ${new Date()}`)
        setBalance(newBalance)
    }
    else{
        alert('Invalid Pin')
        return
    }
})