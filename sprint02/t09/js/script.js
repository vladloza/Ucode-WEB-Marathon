function getFormatedDate(dateObject) {
    let str = (dateObject.getDate() < 10 ? '0' + dateObject.getDate() : dateObject.getDate()) + '.'
    + (dateObject.getMonth() + 1 < 10 ? '0' + (dateObject.getMonth() + 1) : (dateObject.getMonth() + 1)) + '.'
    + dateObject.getFullYear() + ' ' 
    + (dateObject.getHours() < 10 ? '0' + dateObject.getHours() : dateObject.getHours()) + ':'
    + (dateObject.getMinutes() < 10 ? '0' + dateObject.getMinutes() : dateObject.getMinutes()) + ' ';
    switch(dateObject.getDay()) {
        case 0:
            str += 'Sunday';
            break;
        case 1:
            str += 'Monday';
            break;
        case 2:
            str += 'Tuesday';
            break;
        case 3:
            str += 'Wednesday';
            break;
        case 4:
            str += 'Thursday';
            break;
        case 5:
            str += 'Friday';
            break;
        case 6:
            str += 'Saturday';
            break;
    }
    return str;
}