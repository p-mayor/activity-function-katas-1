let consoleHeaderColorStr = 'background: #222; color: #bada55'
// SUM ----------------------------------------------------

function sum(number1, number2) {
    return number1 + number2
}

console.log('%c SUM ', consoleHeaderColorStr)
console.log(sum(5, 9));
console.log(sum(345, 20));

// AVG ----------------------------------------------------

function avg(input1, input2, input3) {
    return (input1 + input2 + input3) / 3
}

console.log('%c AVG function', consoleHeaderColorStr)
console.log(avg(1, 5, 9)); // returns 5
console.log(avg(4, 4, 4)); // returns 4
console.log(avg(10, 4, 1)); // returns 5

// greaterThan ----------------------------------------------------

function greaterThan(input1, input2) {
    return input2 > input1
}

console.log("%c Greater Than function", consoleHeaderColorStr)
console.log(greaterThan(5, 6)); // returns true
console.log(greaterThan(4, 1)); // returns false

// secondLargest ----------------------------------------------------

function secondLargest(myArray) {
    let largestNumber = 0
    let secondLargestNum = 0
    for (let index = 0; index < myArray.length; index += 1) {
        let currentNumber = myArray[index]
        if (currentNumber > largestNumber) {
            secondLargestNum = largestNumber
            largestNumber = currentNumber
        } else if (currentNumber > secondLargestNum) {
            secondLargestNum = currentNumber
        }
        // console.log(currentNumber, largestNumber, secondLargestNum)
    }
    return secondLargestNum
}

console.log("%c secondLargest function", consoleHeaderColorStr)
console.log(secondLargest([1, 4, 5, 8]))
console.log(secondLargest([1, 4, 5, 6, 7, 9, 4, 6, 8]))

// containsVowel ----------------------------------------------------

function containsVowel(myString) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < myString.length; i += 1) {
        let currentCharacter = myString[i]
        // console.log(currentCharacter)
        if (vowels.includes(currentCharacter)) {
            return true
        }
    }
    return false
}

console.log("%c containsVowel function", consoleHeaderColorStr)
console.log(containsVowel('alpha'))
console.log(containsVowel('fghjsdfg'))
console.log(containsVowel('vbnmcvb'))

// TIP ----------------------------------------------------

function tip(mealCost) {
    return Math.ceil(mealCost * 0.20)
}

console.log("%c tip function", consoleHeaderColorStr)
console.log(tip(57)) // returns 12
console.log(tip(32)) // returns 7

// longestWord ----------------------------------------------------

function longestWord(myString) {
    let longestWordVar = ""
    let wordArray = myString.split(" ")
    for (let counter = 0; counter < wordArray.length; counter = counter + 1) {
        let currentWord = wordArray[counter]
        if (currentWord.length > longestWordVar.length) {
            longestWordVar = currentWord
        }
    }
    return longestWordVar
}

console.log("%c longestWord function", consoleHeaderColorStr)
console.log(longestWord('have you ever seen a penguin go to tea?')); // returns 'penguin'
console.log(longestWord('fool me once, shame on me. fool me twice, shame on heathcliff')); // returns 'heathcliff'

// weave ----------------------------------------------------

function weave(str, n) {
    let myArray = str.split("")
    for (let i = 0; i < myArray.length; i = i + 1) {
        if ((i + 1) % n === 0) {
            myArray[i] = "x"
        }
    }
    return myArray.join("")
}

console.log("%c weave function", consoleHeaderColorStr)
console.log(weave('hi how are you', 2)) // returns 'hx xox xrx xox'
console.log(weave('im great, how do you do?', 5)) // returns 'im gxeat,xhow xo yox do?'

// pigLatin ----------------------------------------------------
// Note: refer to recording for simplified version of this without consonant clusters

function piglatin(str) {
    // create variables to work with
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let consonantClusters = ["cl", "tr", "qu"]
    let wordArray = str.split(" ")

    // loop through wordArray
    for (let i = 0; i < wordArray.length; i = i + 1) {
        let currentWord = wordArray[i]
        let charArray = currentWord.split("") // get an array of characters
        let firstChar = charArray[0] // take the first char from word

        for (let j = 0; j < consonantClusters.length; j = j + 1) {
            let currentCluster = consonantClusters[j]
            if (currentWord.startsWith(currentCluster)) {
                let first2Chars = charArray[0] + charArray[1]
                charArray.splice(0, 2)// remove the first 2 characters
                charArray.push(first2Chars)// put those char on end of word
                charArray.push("ay")// add ay to end of word
            }
        }

        if (vowels.includes(firstChar)) {
            charArray.push("ay")// add "ay" to end of word
        } else if (charArray[charArray.length - 1] !== "ay") {
            charArray.splice(0, 1) // remove the first char from word
            charArray.push(firstChar)// put that char on end of word
            charArray.push("ay")// add "ay" to end of word
        }
        let newPigLatinWord = charArray.join("")
        wordArray[i] = newPigLatinWord
    }
    return wordArray.join(" ")
}

console.log("piglatin function", consoleHeaderColorStr)
console.log(piglatin('good day')); // returns 'oodgay ayday'
console.log(piglatin('hall door')); // returns 'allhay oorday'
console.log(piglatin('eat omelet')); // returns 'eatyay omeletyay'
console.log(piglatin('quit true clap rat eat')); // returns 'eatyay omeletyay'

// multiples ----------------------------------------------------

function multiples(input1, input2) {
    let finalArray = []
    for (let i = 1; i <= 100; i = i + 1) {
        if (i % input1 === 0 && i % input2 === 0) {
            finalArray.push(i)
        }
    }
    return finalArray
}

console.log("%c multiples function" , consoleHeaderColorStr)
console.log(multiples(3, 5)) // returns [15, 30, 45, 60, 75, 90]
console.log(multiples(7, 12)) // returns [84]

// blackjack ----------------------------------------------------

function blackjack(cardArray) {
    let handTotal = 0
    let counter = 0

    while (counter < cardArray.length) {
        let currentCard = cardArray[counter]

        if (currentCard === "A") {
            handTotal = handTotal + 1
        } else if (currentCard === "J" || currentCard === "Q" || currentCard === "K") {
            handTotal = handTotal + 10
        } else {
            handTotal = handTotal + currentCard
        }
        counter = counter + 1
    }

    if (handTotal <= 11 && cardArray.includes("A")) {
        handTotal = handTotal + 10
    }

    if (handTotal < 21) {
        return handTotal
    } else if (handTotal === 21) {
        return "blackjack"
    } else {
        return 'bust'
    }
}

console.log("%c blackjack function", consoleHeaderColorStr)
console.log(blackjack(['J', 3, 4, 5, 6])) // returns "bust"
console.log(blackjack(['J', 'Q', 'A'])) // returns "blackjack"
console.log(blackjack(['J', 3, 4, 'A'])) // returns 18
console.log(blackjack(['K', 'A'])) // returns "blackjack"
console.log(blackjack(['A', 'J', 'A', 'A'])) // returns 13

// divisors ----------------------------------------------------

function divisors(input1) {
    let finalArray = []
    for (let i = 1; i <= input1; i = i + 1) {
        let z = input1 / i
        if (z % 1 === 0) {
            finalArray.push(i)
        }
    }
    return finalArray
}

console.log("%c divisor function", consoleHeaderColorStr)
console.log(divisors(9)) // returns [1, 3, 9]
console.log(divisors(17)) // returns [1, 17]
console.log(divisors(92)) // returns [1, 2, 4, 23, 46, 92]
console.log(divisors(159))

// hamming ----------------------------------------------------

function hamming(str1, str2) {
    let sameLetterCount = 0
    if (str1.length !== str2.length) {
        return false
    } else {
        for (let i = 0; i < str1.length; i = i + 1) {
            let currentStr1Char = str1[i]
            let currentStr2Char = str2[i]
            if (currentStr1Char === currentStr2Char) {
                sameLetterCount = sameLetterCount + 1
            }
        }
        return sameLetterCount
    }
}

console.log("%c hamming function", consoleHeaderColorStr)
console.log(hamming('yatin', 'thang')) // returns 0
console.log(hamming('hello', 'hello')) // returns 5
console.log(hamming('hello', 'hewwo')) // returns 3
console.log(hamming('hello', 'helloo')) // returns false
console.log(hamming('some', 'sbce')) // return 2

// pokemon ----------------------------------------------------

function pokemon(numArray) {
    let finalArray = []
    let totalSoFar = 0
    for (let i = 0; i < numArray.length; i = i + 1) {
        let pokemonCaughtToday = numArray[i]
        totalSoFar = totalSoFar + pokemonCaughtToday
        finalArray.push(totalSoFar)
    }
    return finalArray
}

console.log("%c pokemon function", consoleHeaderColorStr)
console.log(pokemon([1, 2, 5, 1, 3])); // returns [1, 3, 8, 9, 12]
console.log(pokemon([1, 15, 20, 35, 50, 1])); // returns [1, 16, 36, 71, 121, 122]

// find ----------------------------------------------------

function find(numArray, singleNum) {
    for (let i = 0; i < numArray.length; i = i + 1) {
        let currentNumber = numArray[i]
        if (currentNumber === singleNum) {
            return i
        }
    }
    return "Not Found"
}
console.log('%c find function', consoleHeaderColorStr)
console.log(find([1, 2, 3, 4], 3)) // returns 2
console.log(find([4, 4, 4, 4], 4)) // returns 0
console.log(find([1, 2, 2, 4], 3)) // returns 'Not found'

// TODO: Nightmare mode