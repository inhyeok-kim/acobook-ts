import { getObjectStore, KeyRange } from "src/utils/IDBUtil";
const TABLE = 'balance'

export function selectBalanceList(){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readonly');
        const req = store.openCursor();
        let result : Array<any> = [];
        req.onsuccess = function(e:any){
            const cursor = e.target.result;
            if(cursor){
                result.push(cursor.value);
                cursor.continue();
            } else {
                resolve(result);
            }
        }
        req.onerror = function(e){
            reject(e);
        }
    });
}

export function insertBalanceList(history : BalanceType){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readwrite');

        let req;
    
        try {
            req = store.add(history);

            req.onerror = function(){
                console.error(this.error);
            }
        
            req.onsuccess = function(e){
                resolve(true);
            }

        } catch (e) {
            console.error(e);
        }
        
    });
}