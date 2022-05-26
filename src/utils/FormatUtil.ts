export function FormatCurrency(str : string | number){
    let param = str;
    if(typeof str === 'string'){
        try {
            param = Number(param)
        } catch (error) {
            console.error('cannot formatable string');
            return false
        }
    }
    param = String(param)
    let res = '';
    let cnt = 0;
    for(let i=param.length-1; i >= 0; i--){
        cnt++;
        if(cnt > 3){
            res = ',' + res;
            cnt = 1;
        }
        res = param[i] + res;
    }
    return res;
}