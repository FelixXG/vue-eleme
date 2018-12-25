export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) { // 如果两个y或者以上   2016就是16
        // RegExp.$1指的就是匹配到的4个Y即2016
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            console.log('测试str---->', str);
            console.log('测试$1----->', RegExp.$1);
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            console.log('测试fmt--->', fmt);
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
