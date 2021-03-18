placeholder.remove();
let head = ["Name", "Strength", "Age"];
let notification = document.getElementById('notification');
let table = document.createElement('table');
document.body.appendChild(table);
let sort = true;
let tr = document.createElement('tr');
table.appendChild(tr);
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th1.innerHTML = head[0];
th2.innerHTML = head[1];
th3.innerHTML = head[2];
let tbody = document.createElement('tbody');
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
table.appendChild(tbody);
let array = [["Black Panther", 66, 53], ["Captain America", 79, 137], ["Captain Marvel", 97, 26], ["Hulk", 80, 49], ["Iron Man", 88, 48],
["Spider- Man", 78, 16], ["Thanos", 99, 1000], ["Thor", 95, 1000], ["Yon- Rogg", 73, 52]];
function fillTable(arr) {
    tbody.innerHTML = '';
    for (let index = 0; index < 9; index++) {
        tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (let i = 0; i < 3; i++) {
            td = document.createElement('td');
            td.innerHTML = arr[index][i];
            tr.appendChild(td);
        }
    }
    th1.onclick = () => sortTable(0);
    th2.onclick = () => sortTable(1);
    th3.onclick = () => sortTable(2);
}
fillTable(array);
function sortTable(parameter) {
    let result = array.sort((a, b) => {
        if (typeof a[parameter] == 'string') {
            if (a[parameter] > b[parameter]) return !sort ? 1 : -1; // сортировка по убыванию (от Young Rogg до black Panter)
            else if (a[parameter] < b[parameter]) return sort ? 1 : -1; // сортировка по возрастанию (от black panter до young rogg)
            return 0;
        }
        return sort ? b[parameter] - a[parameter] : a[parameter] - b[parameter]; // убывание : возрастание
    });
    sort = !sort;
    fillTable(result);
    notification.innerHTML = `Sorting by ${head[parameter]}, order: ${sort ? 'ASC' : 'DESC'}`;
}
