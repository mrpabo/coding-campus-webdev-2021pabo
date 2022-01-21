function findTheRightSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    if (num < 10) {
        return "Small";
    } 
    if (num < 15) {
        return "Medium";
    } 
    if (num < 20) {
        return "Large";
    }
    
    return "Huge";
}

// const size = findTheRightSize(8);
// console.log("Die Größe ist:" + size);


// Exercise 10

function showValueForStatusCode(statusCode) {
    let statucCodeValue;
    switch (statusCode) {
        case 1:
            statucCodeValue = "Alpha";
            break;
        case 2:
            statucCodeValue = "Beta";
            break;
        case 3:
            statucCodeValue = "Gamma";
            break;
        case 4:
            statucCodeValue = "Delta";
            break;
    
        default:
            statucCodeValue = "Unbekannter Wert";
            break;
    }

    console.log("Der Wert für den StatusCode lautet: " + statucCodeValue);
}

// showValueForStatusCode(3);


// Exercise 11

function isNumberEvenOrOdd(input) {
    if(isNaN(input)) {
        throw new TypeError('Keine valide Zahl');
    }

    const validNumber = parseInt(input);

    if (validNumber % 2 == 0) {
        return 'Even';
    }

    return 'Odd';
}

// const userInput = prompt('Bitte geben Sie eine Zahl ein.');

// try {
//     const evenOrOdd = isNumberEvenOrOdd(userInput);
//     alert(evenOrOdd);
// } catch(error) {
//     console.error(error);
// }



// Exercise 12

function boolToWord(bool) {
    if (bool === true) {
        return 'Yes';
    }

    return 'No';
}

// const yesOrNo = boolToWord("asdf");
// alert(yesOrNo);



// Exercise 13

function multiplyWithIndex(baseNumber) {
    const startIndex = 2;
    const endIndex = 16;

    for (let i = startIndex; i <= endIndex; i += 2) {
        // const result = baseNumber * i;
        console.log(`${baseNumber} multipliziert mit ${i} = ${baseNumber * i}`);
        // console.log(baseNumber + " multipliziert mit " + i + " = " + result + ".");
    }
    
}

multiplyWithIndex(2);