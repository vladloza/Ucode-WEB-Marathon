function checkBrackets(str) {
    if(typeof str != 'string' || !/[\(\)]/.test(str) )
        return -1;
    let leftBrackets = 0, rightBrackets = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '(') {
            leftBrackets++;
        }
        else if(str[i] == ')') {
            if(leftBrackets == 0) {
                 rightBrackets++;
            }
            else {
                leftBrackets--;
            }
        }
    }
    console.log(leftBrackets);
    console.log(rightBrackets);
    return leftBrackets + rightBrackets;
}