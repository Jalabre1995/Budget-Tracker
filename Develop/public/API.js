import { populateTotal, populateTotal, populateChart, populateTable} from "./populate";

export let transaxtions = [];

export function savefromIndexedDB(results) {
    fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(results),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content=Type": "application/json"
        }
    })
    .then(response => {
        return response.json();
    });
}

export function renderTransaction(){
    fetch("/api/transaction")
    .then(response => {
        return response.json();
    })
    .then(data => {
        //save the data from the db on a global scale///
        transactions = data;

        populateTotal();
        populateTable();
        populateChart();
    });
}