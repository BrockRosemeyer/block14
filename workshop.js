//Vowel vs Consonant

// const testString = "hello has 3 consonants and 2 vowels";

// const letters = "ae";

// let aeLetters = 0;
// let others = 0;

// for(let i = 0; i < testString.length; i++ ){
//     if(letters.indexOf(testString[i]) !== -1){       
//         aeLetters += 1;
//     }else if (testString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(aeLetters);
// console.log(others);

//Only Odds

// const arryToFilter = [2, 4, 6, 8, 11, 20, 15, 22];
// const evensArray = [];
// for(let i = 0; i < arryToFilter.length; i++ ) {
//     if (arryToFilter[i] % 2 === 0) {
//         evensArray.push(`${arryToFilter[i]}`);
//     }
// }

// console.log(evensArray);

// Reverse Array
// const reverseArray = [1, -1, 2, -3, 5, -8, 13]	
// reverseArray.reverse();

// console.log(reverseArray);

for (let i = 1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log ("Buzz");
    } else {
        console.log(i);
    }
}