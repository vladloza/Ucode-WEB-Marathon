function concat(str1, str2 = undefined) {
    concat.count = 0;
    function input() {
        str2 = prompt("Input a second string", '');
        concat.count++;
        return str1 + ' ' + str2;
    }
    if (str2 != undefined)
        return str1 + ' ' + str2;
    return input();
}