let firstName, check, lastName;
firstName = prompt("Enter your first name: ", '');
check = /^[a-z]+$/i;
if(!check.test(firstName)) {
    console.log("Wrong input!");
    alert("Wrong input!");
    throw '';
}
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = prompt("Enter your last name: ", '');
if(!check.test(lastName)) {
    console.log("Wrong input!");
    alert("Wrong input!");
    throw '';
}
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
alert('Greetings, ' + firstName + ' ' + lastName);
console.log('Greetings, ' + firstName + ' ' + lastName);