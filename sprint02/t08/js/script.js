function checkBrackets(str) {
    if(typeof str != 'string' || !/[\(\)]/.test(str) )
        return -1;
    let leftBrackets = 0, rightBrackets = 0, result = 0;
    for(let i = 0; i < str.length; i++) {
    // console.log(str)
    //for(let char of str){
// console.log(char+'\n')
// console.log('zaebal')
        if(str[i] == '(') {
            leftBrackets++;
            result++
        }
        else if(str[i] == ')') {
            if(leftBrackets == 0) {
                 rightBrackets++;
                 result++;
            }
            else {
                leftBrackets--;
                result--;
            }
            //     if(rightBrackets > 0) {
            //         rightBrackets--;
            //     }
            // else
        }
    }
    console.log(leftBrackets);
    console.log(rightBrackets);
    console.log(result);
    // return Math.abs(leftBrackets - rightBrackets);
    return result;
}