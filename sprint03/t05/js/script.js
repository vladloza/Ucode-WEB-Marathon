let guestList = new WeakSet();
let menu = new Map();
let bankVault = new WeakMap();
let coinCollection = new Set();

let guest1 = {name:'John'};
let guest2 = {name:'Mary'};
let guest3 = {name:'Josh'};
let guest4 = {name: 'Larry'};
let guest5 = {name: 'Maria'};

guestList.add(guest1);
guestList.add(guest2);
guestList.add(guest3);
guestList.add(guest4);
guestList.add(guest5);

menu.set('fish', 300);
menu.set('meat', 300);
menu.set('potato', 50);
menu.set('coffee', 20);
menu.set('tea', 10);

let user1 = {login1: 'pass1'};
let user2 = {login2: 'pass2'};
let user3 = {login3: 'pass3'};
let user4 = {login4: 'pass4'};
let user5 = {login5: 'pass5'};

bankVault.set(user1, 'account1');
bankVault.set(user2, 'account2');
bankVault.set(user3, 'account3');
bankVault.set(user4, 'account4');
bankVault.set(user5, 'account5');

coinCollection.add('1 coins');
coinCollection.add('2 coins');
coinCollection.add('5 coins');
coinCollection.add('10 coins');
coinCollection.add('30 coins');

console.log(guestList.has(guest1));  // True
guestList.delete(guest1);
console.log(guestList.has(guest1));  // False

menu.forEach((value, key, map) => {console.log(key + " - " + value);});

console.log(bankVault.get(user1));

console.log(coinCollection.forEach((value) => {console.log(value);}));