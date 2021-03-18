function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {"max-age": 60}) {
  options = {
    path: '/',
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
let tmp;
let phoneNumber = function() {
  let numb = document.getElementsByClassName("word")[0].value;
  if (getCookie('phone-number') === undefined){
    document.getElementById("phone").setAttribute("value","To phone number [1]");
    setCookie('phone-number','1');
  }
  else {
    tmp = Number(getCookie('phone-number'));
    document.getElementById("phone").setAttribute("value","To phone number [" + (tmp + 1) + "]");
    setCookie('phone-number',tmp + 1);
  }
  if (numb.search(/^[0-9]+$/) === 0){
    document.getElementsByClassName("out")[0].innerHTML = numb.slice(0,3) + "-" + numb.slice(3,6) + "-" + numb.slice(6);
  }
  else {
    document.getElementsByClassName("out")[0].innerHTML = "invalid phone number";
  }
}
let count = function() {
  let word = document.getElementsByClassName("word")[0].value;
  let text = document.getElementsByClassName("text")[0].value;
  if (getCookie('count') === undefined){
    document.getElementById("count").setAttribute("value","Word count [1]");
    setCookie('count','1');
  }
  else {
    tmp = Number(getCookie('count'));
    document.getElementById("count").setAttribute("value","Word count [" + (tmp + 1) + "]");
    setCookie('count',tmp + 1);
  }
  tmp = 0;
  for (let wrd of text.split(" ")){
    if (word === wrd) {
      tmp++;
    }
  }
  document.getElementsByClassName("out")[0].innerHTML = tmp;
}
let replace = function() {
  let word = document.getElementsByClassName("word")[0].value;
  let text = document.getElementsByClassName("text")[0].value;
  if (getCookie('replace') === undefined){
    document.getElementById("replace").setAttribute("value","Word replace [1]");
    setCookie('replace','1');
  }
  else {
    tmp = Number(getCookie('replace'));
    document.getElementById("replace").setAttribute("value","Word replace [" + (tmp + 1) + "]");
    setCookie('replace',tmp + 1);
  }
  tmp = "";
  for (let wrd of text.split(" ")){
    if (tmp.length !== 0){
      tmp += " ";
    }
    tmp += word;
  }
  document.getElementsByClassName("out")[0].innerHTML = tmp;
}
if (getCookie('phone-number') !== undefined){
  document.getElementById("phone").setAttribute("value","To phone number [" + getCookie('phone-number') + "]");
}
if (getCookie('count') !== undefined){
  document.getElementById("count").setAttribute("value","Word count [" + getCookie('count') + "]");
}
if (getCookie('replace') !== undefined){
  document.getElementById("replace").setAttribute("value","Word replace [" + getCookie('replace') + "]");
}