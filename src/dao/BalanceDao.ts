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

export function selectBalanceById(id:string){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readonly');
        const req = store.get(id);
        req.onsuccess = function(e:any){
            resolve(e.target.result);
        }
        req.onerror = function(e){
            reject(e);
        }
    });
}

export function insertBalanceList(balance : BalanceType){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readwrite');

        let req;
    
        try {
            req = store.add(balance);

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

export function deleteBalance(id:string){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readwrite');

        const req = store.delete(id);
        req.onsuccess = function(){
            resolve(true);
        }
        req.onerror = function(){
            reject(false);
        }

        
    });
}

export function updateBalance(balance : BalanceType){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readwrite');

        const req = store.put(balance);
        req.onsuccess = function(){
            resolve(true);
        }
        req.onerror = function(){
            reject(false);
        }

    });
}