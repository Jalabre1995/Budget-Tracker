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
        tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
    `;
        tbody.appendChild(tr);
});
}

export function populateChart() {
    ///reversing the array////

    let reversed = transactions.slice().reverse();
    let sum = 0;

    // creating labels for the charts///
    let labels = reversed.map(t => {
        let date = new Date(t.date);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    });

    // remove any old charts that exist///
    if(myChart) {
        myChart.destroy();
    }

    let ctx = document.getElementById("myChart").getContext('2d');

    myChart = new myChart(ctx, {
        type: 'line',
        data: {
            labels, 
            datasets: [{
                label: 'Total overtime',
                fill: true,
                backgroundColor: "#6666ff",
                data
            }]
        }
    })

}