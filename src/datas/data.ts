export default {
    dummyAssetList : [
        {
            accountNm : '카카오뱅크',
            amount : 10000,
        },
        {
            accountNm : '급여계좌',
            amount : 60000,
        },
        {
            accountNm : '온통대전',
            amount : 2000000,
        },
        
    ],
    dummyDebtList : [
        {
            accountNm : '현대카드',
            amount : 10000,
        }
    ],
    dummyHistoryList : [
        {
            catogoryNm : '카카오 -> 내일채움공제',
            amount : 10000,
            type : 'transfer',
            date : new Date()
        },
        {
            catogoryNm : '통신비',
            amount : 60000,
            type : 'expense',
            date : new Date()
        },
        {
            catogoryNm : '월급',
            amount : 2000000,
            type : 'income',
            date : new Date()
        },
        
    ],
    dummyTodayList : [
        {
            catogoryNm : '식비',
            amount : 10000,
            type : 'expense',
            date : new Date()
        }
    ]
}