const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','z'];
const vowel = ['a','e','i','o','u'];

const nameTypeList = [1, 2, 3, 4, 5];

const taruName = new Array();
const taruRhyme = new Array();
const taruRhyme2 = new Array();


// ranomizes the first part of the taru female name amongst 5 different consonant/vowel combos
const generateName = function() {

        let nameTypeNumber = Math.floor(Math.random()*nameTypeList.length);
        let selectedNameType = nameTypeList[nameTypeNumber];

        if (selectedNameType == 1) {
        taruName.forEach(() => {
            taruName.pop();
            taruName.shift();
            taruName.pop();
        })
        randomConsonant();
        randomVowel();
        let moveName = document.querySelector(".taruName");
        moveName.innerHTML = taruName.join("");
        }

        else if (selectedNameType == 2) {
        taruName.forEach(() => {
            taruName.pop();
            taruName.shift();
            taruName.pop();
            taruName.shift();
        })
        randomConsonant();
        randomVowel();
        randomConsonant();
        let moveName = document.querySelector(".taruName");
        moveName.innerHTML = taruName.join("");
        }

        else if (selectedNameType == 3) {
        taruName.forEach(() => {
            taruName.pop();
            taruName.shift();
            taruName.pop();
            taruName.shift();
            taruName.pop();
        })
        randomConsonant();
        randomVowel();
        randomConsonant();
        randomVowel();
        let moveName = document.querySelector(".taruName");
        moveName.innerHTML = taruName.join("");
        }

        else if (selectedNameType == 4) {
        taruName.forEach(() => {
            taruName.pop();
            taruName.shift();
            taruName.pop();
            taruName.shift();
        })
        randomVowel();
        randomConsonant();
        randomVowel();
        let moveName = document.querySelector(".taruName");
        moveName.innerHTML = taruName.join("");
        }

        else if (selectedNameType == 5) {
        taruName.forEach(() => {
            taruName.pop();
            taruName.shift();
            taruName.pop();
        })
        randomVowel();
        randomConsonant();
        let moveName = document.querySelector(".taruName");
        moveName.innerHTML = taruName.join("");
        }
}

// grabs a random consonant for the first part of name
const randomConsonant = function() {
    let consonantNumber = Math.floor(Math.random()*consonant.length);
    let selectedConsonant = consonant[consonantNumber];
    taruName.push(selectedConsonant);

}
// grabs a random vowel for the first part of name
const randomVowel = function() {
    let vowelNumber = Math.floor(Math.random()*vowel.length);
    let selectedVowel = vowel[vowelNumber];
    taruName.push(selectedVowel);
}


// builds the second part of the female name, facilitates repeated-syllable name endings
const generateName2 = function() {
    taruRhyme.forEach(() => {
        taruRhyme.pop();
        taruRhyme.shift();
        taruRhyme.pop();
    })
    taruRhyme2.forEach(() => {
        taruRhyme2.pop();
        taruRhyme2.shift();
        taruRhyme2.pop();
    })
    randomConsonant2();
    randomVowel2();
    let moveName2 = document.querySelector(".taruRhyme");
    moveName2.innerHTML = taruRhyme.join("");
    let moveName3 = document.querySelector(".taruRhyme2");
    moveName3.innerHTML = taruRhyme2.join("");
}

// grabs a random consonant for second part of name, applies it in two places to facilitate repeated-syllable name endings
const randomConsonant2 = function() {
    let consonantNumber2 = Math.floor(Math.random()*consonant.length);
    let selectedConsonant2 = consonant[consonantNumber2];
    taruRhyme.push(selectedConsonant2);
    taruRhyme2.push(selectedConsonant2);
}

// grabs a random vowel for second part of name, applies it in two places to facilitate repeated-syllable name endings
const randomVowel2 = function() {
    let vowelNumber2 = Math.floor(Math.random()*vowel.length);
    let selectedVowel2 = vowel[vowelNumber2];
    taruRhyme.push(selectedVowel2);
    taruRhyme2.push(selectedVowel2);
}


const generateName3 = function() {
    generateName();
    generateName2();
}

