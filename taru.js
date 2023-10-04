const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','z'];
const vowel = ['a','e','i','o','u'];

const nameTypeList = [1, 2, 3, 4, 5];
const nameTypeList2 = [1, 2, 3];
const nameTypeList3 = [1, 2, 3];

const taruName = new Array();
const taruRhyme = new Array();
const taruRhyme2 = new Array();
const taruMaleName = new Array();
const taruMaleName2 = new Array();
const taruMaleName3 = new Array();
const taruMaleName4 = new Array();



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
const randomConsonant = function() {
    let consonantNumber = Math.floor(Math.random()*consonant.length);
    let selectedConsonant = consonant[consonantNumber];
    taruName.push(selectedConsonant);

}
const randomVowel = function() {
    let vowelNumber = Math.floor(Math.random()*vowel.length);
    let selectedVowel = vowel[vowelNumber];
    taruName.push(selectedVowel);
}



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
const randomConsonant2 = function() {
    let consonantNumber2 = Math.floor(Math.random()*consonant.length);
    let selectedConsonant2 = consonant[consonantNumber2];
    taruRhyme.push(selectedConsonant2);
    taruRhyme2.push(selectedConsonant2);
}
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





const generateName5 = function() {

    let nameTypeNumber2 = Math.floor(Math.random()*nameTypeList2.length);
    let selectedNameType2 = nameTypeList2[nameTypeNumber2];

    if (selectedNameType2 == 1) {
    taruMaleName.forEach(() => {
        taruMaleName.pop();
        taruMaleName.shift();
    })
    randomVowel3();
    let moveName2 = document.querySelector(".taruMaleName");
    moveName2.innerHTML = taruMaleName.join("");
    }

    else if (selectedNameType2 == 2) {
    taruMaleName.forEach(() => {
        taruMaleName.pop();
        taruMaleName.shift();
        taruMaleName.pop();
    })
    randomConsonant3();
    randomVowel3();
    let moveName2 = document.querySelector(".taruMaleName");
    moveName2.innerHTML = taruMaleName.join("");
    }

    else if (selectedNameType2 == 3) {
    taruMaleName.forEach(() => {
        taruMaleName.pop();
        taruMaleName.shift();
        taruMaleName.pop();
    })
    randomVowel3();
    randomConsonant3();
    let moveName2 = document.querySelector(".taruMaleName");
    moveName2.innerHTML = taruMaleName.join("");
    }
}
const randomConsonant3 = function() {
    let consonantNumber3 = Math.floor(Math.random()*consonant.length);
    let selectedConsonant3 = consonant[consonantNumber3];
    taruMaleName.push(selectedConsonant3);
}
const randomVowel3 = function() {
    let vowelNumber3 = Math.floor(Math.random()*vowel.length);
    let selectedVowel3 = vowel[vowelNumber3];
    taruMaleName.push(selectedVowel3);
}



const generateName6 = function() {
    taruMaleName2.forEach(() => {
        taruMaleName2.pop();
        taruMaleName2.shift();
        taruMaleName2.pop();
        taruMaleName2.shift();
    })
    taruMaleName4.forEach(() => {
        taruMaleName4.pop();
        taruMaleName4.shift();
        taruMaleName4.pop();
        taruMaleName4.shift();
    })
    randomConsonant4();
    randomVowel4();
    randomConsonant4();
    let moveName4 = document.querySelector(".taruMaleName2");
    moveName4.innerHTML = taruMaleName2.join("");
    let moveName5 = document.querySelector(".taruMaleName4");
    moveName5.innerHTML = taruMaleName4.join("");
}
const randomConsonant4 = function() {
    let consonantNumber4 = Math.floor(Math.random()*consonant.length);
    let selectedConsonant4 = consonant[consonantNumber4];
    taruMaleName2.push(selectedConsonant4);
    taruMaleName4.push(selectedConsonant4);
}
const randomVowel4 = function() {
    let vowelNumber4 = Math.floor(Math.random()*vowel.length);
    let selectedVowel4 = vowel[vowelNumber4];
    taruMaleName2.push(selectedVowel4);
    taruMaleName4.push(selectedVowel4);
}



const generateName7 = function() {

    let nameTypeNumber3 = Math.floor(Math.random()*nameTypeList3.length);
    let selectedNameType3 = nameTypeList3[nameTypeNumber3];

    if (selectedNameType3 == 1) {
    taruMaleName3.forEach(() => {
        taruMaleName3.pop();
        taruMaleName3.shift();
    })
    randomVowel5();
    let moveName3 = document.querySelector(".taruMaleName3");
    moveName3.innerHTML = taruMaleName3.join("");
    }

    else if (selectedNameType3 == 2) {
    taruMaleName3.forEach(() => {
        taruMaleName3.pop();
        taruMaleName3.shift();
        taruMaleName3.pop();
    })
    randomConsonant5();
    randomVowel5();
    let moveName3 = document.querySelector(".taruMaleName3");
    moveName3.innerHTML = taruMaleName3.join("");
    }

    else if (selectedNameType3 == 3) {
    taruMaleName3.forEach(() => {
        taruMaleName3.pop();
        taruMaleName3.shift();
        taruMaleName3.pop();
    })
    randomVowel5();
    randomConsonant5();
    let moveName3 = document.querySelector(".taruMaleName3");
    moveName3.innerHTML = taruMaleName3.join("");
    }
}
const randomConsonant5 = function() {
    let consonantNumber5 = Math.floor(Math.random()*consonant.length);
    let selectedConsonant5 = consonant[consonantNumber5];
    taruMaleName3.push(selectedConsonant5);
}
const randomVowel5 = function() {
    let vowelNumber5 = Math.floor(Math.random()*vowel.length);
    let selectedVowel5 = vowel[vowelNumber5];
    taruMaleName3.push(selectedVowel5);
}



const hyphen = function() {
    let hyphen = document.querySelector(".hyphen");
    hyphen.innerHTML = "-";
    }



const generateName4 = function() {
    generateName5();
    generateName6();
    generateName7();
    hyphen();
}
