let text_field = document.getElementById('text');
let history = document.getElementById('history');
function addToStorage() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0") + "." + String(date.getMonth() + 1).padStart(2, "0") + "." + (date.getFullYear() % 100);
    let time = String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0");
    let input = text_field.value;
    let res_data
    localStorage.setItem(date, '--> ' + input + ' [' + day + ', ' + time + ']');
    displayHistory();
}
function clearStorage() {
    localStorage.clear();
    history.value = '';
}
function displayHistory() {
    console.log(localStorage.length);
    for(let i = 0; i < localStorage.length;i++) {
        let key = localStorage.key(i);
        let string = localStorage.getItem(key);
        console.log(string);
        history.value += string;
    }
}
