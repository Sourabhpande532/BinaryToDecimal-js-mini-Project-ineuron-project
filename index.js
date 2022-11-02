const form = document.querySelector(".form");
const userClick = document.querySelector(".btn");
const userInput = document.getElementById("binary");
const binaryToDecimal = document.querySelector(".decimalNumber");

userClick.addEventListener("click", (e) => {
    e.preventDefault();
    convertBinaryToDecimal();
});


const returnDigit = (stringToNumbe) => {
    return stringToNumbe % 10;
}


function convertBinaryToDecimal() {
    let fetchUserInput = userInput.value;
    let sum = 0;
    if (cheackBinaryOrNot(fetchUserInput)) {
        // convert String to Binary Again
        let stringToNumber = Number(fetchUserInput);
        for (let i = 0; i < fetchUserInput.length; i++) {
            sum += returnDigit(stringToNumber) * Math.pow(2, i);
            //  suppose user want to know 100 decimal number how it internally work;
            // sum = sum + returnDigin(n)*Math.pow(2,i)
            // 0   =  0 + 0*1(0) .pow(2,0) - 1
            // 0   =  0 + 0*1(0) .pow(2,1) - 2
            // 0   =  0 + 1*2*2(4) .pow(2,2) - 4 
            // thus, 100 binary no. 4
            stringToNumber = Math.floor(stringToNumber / 10);
        }
        binaryToDecimal.textContent = sum;
    }
    else {
        form.reset();
        alert("Please mention proper binary No. 1️⃣ or 0️⃣ 😉")
    }
}

// this function check it binary No. present or Not

const cheackBinaryOrNot = (fetchInput) => {
    // to Convert String to Number
    let stringToNo = Number(fetchInput)
    // console.log(typeof stringToNo)
    console.log(stringToNo)
    while (stringToNo) {
        let remainder = stringToNo % 10;
        console.log(remainder);
        if (remainder !== 0) {
            if (remainder !== 1) {
                return false;
            }
        }
        // break;
        stringToNo = Math.floor(stringToNo / 10)
        console.log(stringToNo);
    }
    return true;
}