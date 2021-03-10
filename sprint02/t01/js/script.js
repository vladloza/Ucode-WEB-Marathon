"use strict";
function getType() {
    let number = 12,
        big = 9007199254740992,
        str = "Hello",
        bool = true,
        nothing = null,
        undef,
        symbol = Symbol("id");
    alert('number is ' + typeof(number) + '\nstr is ' + typeof(big) + 
    '\nbool is ' + typeof(bool) + '\nnothing is ' + typeof(nothing) +
    '\nundef is ' + typeof(undef) +'\nMath is ' + typeof(Math) + '\nsymbol is ' + typeof(symbol) + '\nalert is ' + typeof(alert));
}
getType();