export function checkForIndexedDb(){
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stale verison of IndexedDB.");
        return false;
    }
    return true;
}
export function useIndexedDB(databaseName, storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(databaseName);
        let db,
        tx,
        store;

        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore(storeName, {autoIncrement: true});

        };
        request.onerror = function(e) {
            console.log("There was an error");
        };
        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, "readwrite");
            store = tx.objectStore(storeName);

            db.onerror = function(e) {
                console.log("error");
            };
            if(method === "add"){
                store.add(object);
            }
            if(method === "get") {
                const all = store.getSAll();
                all.onsuccess = function(){
                    resolve(all.result);
                };
            }
            if (method === 'clear') {
                store.clear();
            }
            tx.oncomplete = function() {
                db.close();
            };
        };
    });
}