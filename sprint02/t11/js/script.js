function addWords(obj, wrds) {
    let temp = obj.words.split(" ");
    let words = wrds.split(" ");
    let result_arr = Array();
    let result = "";
    for(let i = 0; i < temp.length; i++) {
        if (result_arr.indexOf(temp[i]) == -1) {
            result_arr.push(temp[i]);
        }
    }
    for(let i = 0; i < words.length; i++) {
        if (result_arr.indexOf(words[i]) == -1) {
            result_arr.push(words[i]);
        }
    }
    for(let i = 0; i < result_arr.length; i++)
        result += result_arr[i] + ' ';
    obj.words = result;
}
function removeWords(obj, wrds) {
    let copy = obj.words.split(" ");
    let words = wrds.split(" ");
    let result_arr = Array();
    let result = "";
    for(let i = 0; i < copy.length; i++) {
        if ((result_arr.indexOf(copy[i]) == -1) && (words.indexOf(copy[i]) == -1)) {
            result_arr.push(copy[i]);
        }
    }
    ind = 0;
    for(let i = 0; i < result_arr.length; i++){
        result += result_arr[i] + ' ';
    }
    obj.words = result;
}
function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}