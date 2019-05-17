let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cardImages = ["IMG/1.png", "IMG/2.png", "IMG/3.png", "IMG/4.png", "IMG/5.png", "IMG/6.png", "IMG/7.png", "IMG/8.png", "IMG/9.png", "IMG/10.png", "IMG/11.jpg", "IMG/12.png", "IMG/13.png", ]


const eliminatePrevious = (prevNum) => {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == prevNum) {
            numbers2 = numbers.splice(i, 1)
        }
    }
};

let image = document.getElementById('cardImage');

function getRandom() {
    let result = 0;
    while (!result) {
        result = Math.floor(Math.random() * numbers.length);
        result = numbers[result];
        image.src = "./IMG/" + result + ".png"
    }
    eliminatePrevious(result);
    youWin()
    return result;
};

function youWin() {
    if (numbers.length == 0) {
        alert('you win!')
    }
 }


function showCard() {
    let imageIndex;
    for (imageIndex = 0; imageIndex < numbers.length; imageIndex++) {
        if (numbers[imageIndex] == undefined) {
            image.style.display = "block"
        } else if (numbers[imageIndex] == cardImages[imageIndex]) {
            image.style.display = "block"
        }
    }
};

let prevNum = getRandom();
console.log(prevNum)



let button1 = document.getElementById("higher");
button1.onclick = function () {
    card1 = getRandom();
    eliminatePrevious(card1);
    showCard()
    console.log(numbers)
    if (card1 > prevNum) {
        console.log(`${card1} is higher than ${prevNum}`)
        prevNum = card1;
    } else if (card1 < prevNum) {
        document.getElementById("message").innerHTML = (`${card1} is lower than ${prevNum}! You lose.`)
    } else {
       alert('you win')
    }
};

let button2 = document.getElementById("lower");
button2.onclick = function () {
    card2 = getRandom();
    eliminatePrevious(card2);
    showCard()
    console.log(numbers)
    if (card2 < prevNum) {
        console.log(`${card2} is lower than ${prevNum}`)
        prevNum = card2;
    } else if (card2> prevNum) {
        document.getElementById("message").innerHTML = (`${card2} is higher than ${prevNum}! You lose.`)
    } else {
        alert('you win')
    }
};




let button3 = document.getElementById("clear");
button3.onclick = function () {
  clearImage();
};

function clearImage() {
  location.reload()
};

