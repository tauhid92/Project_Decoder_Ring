function polybius(input, encode = true) {
    const refArray = [
        { 'a': '11' }, { 'b': '21' }, { 'c': '31' }, { 'd': '41' }, { 'e': '51' },
        { 'f': '12' }, { 'g': '22' }, { 'h': '32' }, { 'i': '42' }, { 'j': '42' }, { 'k': '52' },
        { 'l': '13' }, { 'm': '23' }, { 'n': '33' }, { 'o': '43' }, { 'p': '53' },
        { 'q': '14' }, { 'r': '24' }, { 's': '34' }, { 't': '44' }, { 'u': '54' },
        { 'v': '15' }, { 'w': '25' }, { 'x': '35' }, { 'y': '45' }, { 'z': '55' },
    ];
    const encodeFunction = (input) => {
        const inputArray = input.split('');
        const results = inputArray.map(input => {
            if (input === " ") return " ";
            let result= refArray.find(ref => {
                for (let key in ref) {
                    if (key === input) {
                        return ref[key];
                    }
                }
            });
            return Object.values(result).toString();
        });
        return results.join('');
    }
    const decode = (input) => {
        let inputArray = input.split('');
        let valueArray= inputArray.reduce((acc, arr, i) => {
            if (i % 2 === 0) {
                let res = inputArray.slice(i, i + 2).join('');
                if (res === '42') {
                    acc.push('(i/j)');
                } else {
                    let v=refArray.find(arr => Object.values(arr).toString()===res);
                    acc.push(Object.keys(v).toString());
                }
            }
            return acc;
        }, []);
        return valueArray.join('');    
    }
    const checkAndDecode = (input) => {   
        let result;
        if (input.includes(' ')) {
            let parts = input.split(' ');
            if (parts.some(part => part.length % 2 === 1)) {
                result = false;
            }
            else {
                result = parts.reduce((acc, part) => {
                    let value = decode(part);
                    acc.push(value);
                    return acc;
                },[]).join(' ');
            }
        } else {
            if (input.length % 2 === 1) {
                result = false;
            }
            else {
                result = decode(input);
            }
        }
        return result;
    }
    return (encode)?encodeFunction(input.toLowerCase()):checkAndDecode(input);
}
module.exports = polybius;
