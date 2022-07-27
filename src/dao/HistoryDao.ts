import { getObjectStore, KeyRange } from "src/utils/IDBUtil";
const TABLE = 'history'

export function selectHistoryList(keyRange? : IDBKeyRange){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readonly');

        if(keyRange){

            let keyStore = store.index('date');
            let req = keyStore.getAll(keyRange);
    
            req.onsuccess = function(){
                if(req.result){
                    resolve(req.result);
                }
            }
        } else {
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
        }


    });
}

export function insertHistoryList(history : HistoryType){
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

export function deleteHistory(id:string){
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

export function deleteHistoryRange(idx:string,keyRange : IDBKeyRange){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readwrite');
        const idxStore = store.index(idx);
        const req = idxStore.openCursor(keyRange);
        req.onsuccess = function(e:any){
            const cursor = e.target.result;
                if(cursor){
                    cursor.delete();
                    cursor.continue();
                } else {
                    resolve(true);
                }
        }
        req.onerror = function(){
            reject(false);
        }

        
    });
}