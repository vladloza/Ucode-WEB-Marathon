function checkDivision(beginRange, endRange) {
    for(let i = beginRange; i<= endRange; i++) {
        let str = i.toString();
        let add = false;  
        if(i % 2 === 0) {
            str += ' is even';
            add = true;
        }
        if(i % 3 === 0) {
            if(add)
                str += ',';
            str += ' a multiple of 3';
            add = true;
        }
        if(i % 10 === 0) {
            if(add)
                str += ',';
            str += ' a multiple of 10';
            add = true;
        }
        if(!add)
            str += ' -';
        console.log(str);
    }
}
let begin = prompt("Begining of the range: ", '1');
let end = prompt("End of the range: ", '100');
checkDivision(begin, end);