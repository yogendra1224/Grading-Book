// Your code goes here

const initialAmount = parseFloat(prompt('Enter the initial amount:'));
const years = parseInt(prompt('Enter the number of years:'), 10);
const percentage = parseFloat(prompt('Enter the percentage of a year:'));

if (isNaN(initialAmount) || isNaN(years) || isNaN(percentage) || 
    initialAmount < '1000' || years < 1 || percentage > '100'){
    alert('Invalid input data');
} else{
    let totalProfit = 0;
    let totalAmount = initialAmount;
    for (let i = 1; i <= years; i++) {
        const profit = totalAmount * percentage / '100';
        totalProfit += profit;
        totalAmount += profit;
    }
alert(`Initial Amount: ${initialAmount}\n Number of years: ${years}\n Percentage of year: ${percentage}\n
 Total profit: ${totalProfit.toFixed('2')}\n Total amount: ${totalAmount.toFixed('2')}`);
}
