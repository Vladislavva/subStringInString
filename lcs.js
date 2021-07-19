const { argv } = require('process');

const lcs = (elements) => {
    if (!elements.length) return '';
    let shortElem = elements.reduce((a, b) => a.length <= b.length ? a : b),
        maxlen = shortElem.length;        
    let result = [];
  shortElem.split('').forEach((el, id) => {
    for (let start = 0; start <= maxlen; start++) {
                let substr = shortElem.slice(start, id+1);
                console.log(shortElem, substr, start, id+1, )
                if (elements.every(elem => elem.includes(substr))){
                    result.push(substr);
                }
            }
    });
    console.log(result)
    return result.reverse().reduce((a, b)  =>  a.length > b.length ? a : b )
}
 
console.log(lcs(process.argv.slice(2)));