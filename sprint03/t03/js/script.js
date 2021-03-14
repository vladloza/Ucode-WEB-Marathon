class Human {
    constructor(firstName,lastName,gender,age,calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        document.getElementById("calories").innerHTML = this.calories;
        setInterval(() => {
            if(this.calories >= 200)
                this.calories -= 200;
            document.getElementById("calories").innerHTML = this.calories;
        }, 60000);
        setInterval(() => {
            if(this.calories <= 0)
            document.getElementById('status').innerHTML = "I'm hungry";
        }, 5000);
    }
    sleepFor() {
        let time = prompt("Write timeout");
        document.getElementById('status').innerHTML = "I'm sleeping";
        setTimeout(() => {
            document.getElementById('status').innerHTML = "I'm awake now";
        }, (Number(time) * 1000));
    }
    feed() {
        if (this.calories > 500){
            document.getElementById('status').innerHTML = "I'm not hungry";
        }
        else {
            document.getElementById("calories").innerHTML = this.calories;
            document.getElementById('status').innerHTML = "Nom nom nom";
            this.calories += 200;
            document.getElementById("calories").innerHTML = this.calories;
            if (this.calories < 500){
                setTimeout(() => {
                    document.getElementById('status').innerHTML = "I'm still hungry";
                }, (10000));
            }
            else{
                setTimeout(() => {
                    document.getElementById('status').innerHTML = "-";
                }, (10000));
            }
        }
    }
}
class Superhero extends Human {
    fly() {
        document.getElementById('status').innerHTML = "I'm flying!";
        setTimeout(() => {
            document.getElementById('status').innerHTML = "-";
        }, (10000));
    }
    fightWithEvil(){
        document.getElementById('status').innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(() => {
            document.getElementById('status').innerHTML = "-";
        }, (1000));
    }
}
let superman = new Human("Clark","Kent","Male",79,0);
let turnIntoSuperhero = function(human) {
    if (human.calories >= 500){
        let res = new Superhero(human.firstName,human.lastName,human.gender,human.age,human.calories);
        document.getElementById('status').innerHTML = "I'm hero now!";
        document.getElementById('fly').style.display = "flex";
        document.getElementById('fight').style.display = "flex";
        document.getElementById('transform').style.display = "none";
        document.getElementById('clark').style.display = "none";
        document.getElementById('super').style.display = "flex";
        document.getElementById("head").innerHTML = "Superhero";
        return res;
    }
    else {
        document.getElementById('status').innerHTML = "I can't became hero";
        return human;
    }
}















