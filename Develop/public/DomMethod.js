import { populateTotal, populateTable, populalteChart} from "./populate";
import { useIndexedDB} from "./indexedDb";
import { transactions} from "./API";

export function sendTRansaction(isAdding) {
    let nameE1 = document.querySelector('#t-name');
    let amountE1 = document.querySelector("#t-amount");
    let errorE1 = document.querySelector(".form.error");


    ///Data valadation for form////

    if (nameE1.value === ""|| amountE1.value === "") {
        errorE1.textContent = "Missing Information";
        return;
    }else{
    errorE1.textContent = "";

}

let transaction = {
    name: nameE1.value,
    value: amountE1.value,
    date: new Date().toISOString()
};

//converting the amount to a negative number////
if(!isAdding) {
    transaction.value *= -1;
}

//adding the the array of data////
transactions.unshift(transaction);

///re-run to populate new ui cards with a new record////
populalteChart();
populateTable();
populateTotal();


///Send to the server/////
fetch('/api/transaction', {
    method: 'POST',
    body: JSON.stringify(transaction),
    headers: {
        Accept: 'application/json, text/plain, */*',
        "Content-Type": "application/json"
    }
})
.then(data => {
    console/log(data);
    if (data.errors) {
        errorE1.textContent = "Missing Information";
    }
    else{
        ///Clearing the form////
        nameE1.value = "";
        amountE1.value = "";
    }
})
.catch(err => {
    /////If the fetch fails it gets saved in the indexedDB.////
    useIndexedDB("budgetDB", "transactStore", "add",transaction);


    ///Clear 
 nameE1.value = "";
amountE1.value = "";
});
}