

//Check the indexedDB for browser support///
let db = request.result;

const request = window.indexedDB.open('budget');
request.onupgradeneeded = (e) => {
    const bugetStore = db.createObjectStore('pending');
};

request.onsuccess =(e) => {
    const db = target.result;

    if(navigator.onLine) {
        checkedDatabase();
    }
};

request.onerror = (e) => {
    console.log('error'); 
};

function saveRecord(record) {
    const transaction = db.transaction(['pending'], 'readwrite');
    ///access your pending object store///
    const pendingStore = transaction.objectStore('pending');
}

function checkedDatabase() {
    //Open a transaction on your pending db///
    ///access your pending object store///
    //get all records from store and set the variable///

    getAll.onsuccess = () => {
        if(getAll.result.lenth > 0) {
            fetch('/api/transaction/bulk', {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() => {
                
            });
        }
    }
}

/// listen to the app coming back online///
window.addEventListener('online', checkedDatabase);