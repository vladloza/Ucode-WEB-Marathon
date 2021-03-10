'use strict';
function nameMaker() {
    let gender, age, animal, desc;
    animal = prompt("What animal is the superhero most similar to?", '');
    if (!/[a-zA-Z]{1,20}/.test(animal)) {
        alert("You should input only one word that contains only letters with length <= 20");
        return 1;
    }
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.", '')
    if (gender != '') {
        if (!gender.match(/(fe)?male$/i)) {
            alert("You should write 'male' or 'female' or leave the field blank");
            return 2;
        }
    }
    age = prompt("How old is the superhero?");
    if (!/^[1-9]\d{0,4}$/.test(age)) {
        alert("Length must be <= 5, only digits and can't start from 0");
        return 3;
    }
    if (gender === 'male' && age < 18) desc = 'boy';
    else if (gender === 'male' && age >= 18) desc = 'man';
    else if (gender === 'female' && age < 18) desc = 'girl';
    else if (gender === 'female' && age >= 18) desc = 'woman';
    else if (gender === '' && age <= 18) desc = 'kid';
    else if (gender === '' && age >= 18) desc = 'hero';
    alert("The superhero name is: " + animal + desc);
}
nameMaker();