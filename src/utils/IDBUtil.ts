

export function getObjectStore(store_name : string, mode : 'readonly' | 'readwrite') { // 테이블에대한 스토어를 얻는다.
    const db = window.database;
    const tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
}

export const KeyRange = window.IDBKeyRange;