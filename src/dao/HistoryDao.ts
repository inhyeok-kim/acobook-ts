import { getObjectStore, KeyRange } from "src/utils/IDBUtil";
const TABLE = 'history'

export function selectHistoryList(){
    return new Promise(function(resolve, reject){
        const store = getObjectStore(TABLE, 'readonly');

        let ammountStore = store.index('date');

        const today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);

        let request = ammountStore.getAll(KeyRange.upperBound(today));

        request.onsuccess = function(){
            if(request.result){
                console.log(request.result);
            }
        }


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