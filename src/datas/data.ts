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
            categoryNm : '카카오 -> 내일채움공제',
            amount : 10000,
            type : 'transfer',
            date : new Date()
        },
        {
            categoryNm : '통신비',
            amount : 60000,
            type : 'expense',
            date : new Date()
        },
        {
            categoryNm : '월급',
            amount : 2000000,
            type : 'income',
            date : new Date()
        },
    ],
    dummyTodayList : [
        {
            categoryNm : '식비',
            amount : 10000,
            type : 'expense',
            date : new Date()
        }
    ],
    dummyCategoryList : [
        {
            categoryId : 'cate1',
            categoryNm : '식비',
            planAmmount : '100000',
            current : '35000'
        },
        {
            categoryId : 'cate2',
            categoryNm : '소비',
            planAmmount : '200000',
            current : '72000'
        },
        {
            categoryId : 'cate3',
            categoryNm : '고정비용',
            planAmmount : '180000',
            current : '20000'
        },
    ]
}