import { transactions} from './API';

let myChart;

export function populateTotal() {
    //reduce the transactiion to a single value
    let total = transactions.reduce((total, t) => {
        return total + parseInt(t.value);
    }, 0)

    let totalE1 = document.querySelector('#total');
    totalE1.textContent = total;

}

export function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    transactions.forEach(transaction => {
        ///populate the table////
        let tr = document.createElement('tr');
        tr.innerHTML = 
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
    })
}