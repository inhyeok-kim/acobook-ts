const DB_INFO = {
    DB_NAME : 'test',
    DB_VERSION : 4,
}

export function databaseRegister(){
    return new Promise(async function(resolve, rejects){
        const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        if(!indexedDB){
            console.log("This Browser didn't support IndexedDB");
            alert('System Error :: Your Browser Didn\'t support IndexedDB.');
            return false;
        }
    
        const dbOk = await openDB(indexedDB);
        if(dbOk) {
            resolve(dbOk);
        } else {
            rejects(dbOk);
        }
        
    });

}

function openDB(indexedDB : IDBFactory){
    return new Promise(function(resolve, rejects){

        const req = indexedDB.open(DB_INFO.DB_NAME,DB_INFO.DB_VERSION); // DB 접근 요청
    
        req.onerror = function(e : any){ // 에러 발생
            console.error("openDb:", e.target.errorCode);
            rejects(false);
        }
    
        req.onsuccess = function(){ // DB 로드
            window.database = this.result;
    
            resolve(true);
        };
    
        req.onupgradeneeded = function(e : any){ // DB 생성 또는 업데이트
    
            const initDB = e.target.result;
            createStore(initDB);
    
        }

    });
}

function createStore(db : IDBDatabase){
    const existsStoreNames = db.objectStoreNames;

    const storeList = [...CREATE_STORE];
    storeList.forEach((storeInfo)=>{
        if(existsStoreNames.contains(storeInfo.tableName)) return false;
        const store = db.createObjectStore(storeInfo.tableName, { keyPath: storeInfo.keyPath, autoIncrement: storeInfo.autoIncrement });
        storeInfo.column.forEach(column=>{
            store.createIndex(column.name, column.name, { unique: column.unique });
        });
    });
}

const CREATE_STORE = [
    {
        tableName : 'balance',
        keyPath : 'balanceId',
        autoIncrement : true,
        column : [
            {
                name : 'balanceNm',
                unique : false,
            },
            {
                name : 'amount',
                unique : false,
            },
            {
                name : 'type',
                unique : false,
            },
        ]
    },
    {
        tableName : 'history',
        keyPath : 'historyId',
        autoIncrement : true,
        column : [
            {
                name : 'balanceId',
                unique : false,
            },
            {
                name : 'categoryNm',
                unique : false,
            },
            {
                name : 'amount',
                unique : false,
            },
            {
                name : 'type',
                unique : false,
            },
            {
                name : 'date',
                unique : false,
            },
        ]
    },
]