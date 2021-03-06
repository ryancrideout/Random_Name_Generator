// This is the main page of the Random Generator

// Import arrays from letterArrayGenerator.ts
import {vowels, consonantReset, doubles, weightedCharAlp, weightedVowels,
        weightedCharAlpTotal, weightedVowelTotal} from "./letterArrayGenerator"

// Import titles from titles.ts
import {titles} from "./titles"

// Going to have to create Name Templates as well as generate Phonetics.
// import somewhere.. I think have nametemplates import from phonetics and have here import nametemplates

// This function checks for duplicates, and if we end up with a scenario with an unwanted duplicate, we remove it.
const duplicateCheck = (weightedCharArray, weightedCharArrayTotal, prevChar, isDouble, ranChar) => {
    // This filters out unwanted duplicates.
    if ((ranChar == prevChar && !(ranChar in doubles)) || isDouble) {
        while (ranChar == prevChar) {
            // var ranChar = charArray[Math.floor(Math.random() * charArray.length)]
            var ranChar = weightedRanChar(weightedCharArray, weightedCharArrayTotal)
            }
    } else if (ranChar == prevChar) {
        isDouble = true
    } else {
        isDouble = false
    }

    return [ranChar, isDouble]
}

// Given a weighted array of character values (and the total weight), return a random character
const weightedRanChar = (weightedArray, weightedArrayTotal) => {
    // Generate a threshold here - when we hit this "threshold" we get our random value.
    const threshold = Math.random() * weightedArrayTotal

    // "total" keeps track of where we are in the weighted array.
    var total = 0

    for (var i = 0; i < weightedArray.length - 1; i++) {
        total += weightedArray[i]["weight"]

        // As soon as the total exceeds the threshold, return the value.
        if (total >= threshold) {
            return weightedArray[i]["char"]
        }
    }

    // If we go through the entire for loop and haven't returned anything, return the last value.
    return weightedArray[weightedArray.length - 1]["char"]
}

// This is the main function where we generate names. Whoo!
export function generateName() {

    var name = []
    
    // Randomly generate how long our name will be. For now, it'll be anywhere from 4-10 characters long.
    //
    // Explanation for the math behind charLen can be found here:
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    var charLen = Math.floor(Math.random() * 7) + 4

    // Need to establish some rules for creating the names so that they're not too random.
    // 1) There needs to be minimum 1 vowel in the name.
    // 2) There can be AT MOST 3 consonants in a row, then we force a vowel. Note 4 I think would also be acceptable.
    // 3) There are some consonants will force a vowel after them.
    // 4) There are a set of letters that are acceptable to have occur consecutively. Anything else is not.

    // In accordance to rule 1, we'll randomly select one of the character positions to be a vowel.
    var vowelLocation = Math.floor(Math.random() * charLen)

    // In accordance to rule 2, if we have too many consonants in a row we force a vowel. This keeps track of consonants.
    var consonantCount = 0

    // This keeps track of the previous element.
    var prevChar = ""
    var isDouble = false

    // Now we iterate over the charLen to generate our name.
    for (var i = 0; i < charLen; i++) {
        // Grab a random letter. Perform some checks in correspondence to our above rules to see if
        // we pull a vowel or a consonant.
        if (i === vowelLocation || consonantCount === 3) {
            var ranChar = weightedRanChar(weightedVowels, weightedVowelTotal)

            // Check for duplicates here.
            var ranCharAndDouble = duplicateCheck(weightedVowels, weightedVowelTotal, prevChar, isDouble, ranChar)
            ranChar = ranCharAndDouble[0]
            isDouble = ranCharAndDouble[1]

            // reset consonantCount
            consonantCount = 0
        } else {
            var ranChar = weightedRanChar(weightedCharAlp, weightedCharAlpTotal)

            // Check for duplicates here.
            var ranCharAndDouble = duplicateCheck(weightedCharAlp, weightedCharAlpTotal, prevChar, isDouble, ranChar)
            ranChar = ranCharAndDouble[0]
            isDouble = ranCharAndDouble[1]
            
            // Check to see if we get a consonant or a vowel. Note some consonants will force a vowel to come after it.
            // NOTE: "if vowels.indexOf(ranChar) >= 0" is a cute way of doing "if ranChar in vowels". I don't know how
            // to hook that check up in JavaScript properly.
            if (vowels.indexOf(ranChar) >= 0) {
                consonantCount = 0
            } else if (consonantReset.indexOf(ranChar) >= 0) {
                consonantCount = 3
            } else {
                consonantCount++
            }
        }

        // We want to uppercase the first letter.
        if (i === 0) {
            ranChar = ranChar.toUpperCase()
        }

        // Add character to the array, and keep a note of what character it was.
        prevChar = ranChar
        name.push(ranChar)
    }

    var fullName = name.join('')

    // If we have the "generateTitleCheckBox" checked, we generate a title for the name.
    var generateTitleCheckBox = (<HTMLInputElement>document.getElementById("generateTitle"));
    if (generateTitleCheckBox.checked == true) {
        var titleArrayLength = titles.length
        var titleIndex = Math.floor(Math.random() * titleArrayLength)
        var title = titles[titleIndex]

        fullName = fullName + ", the " + title
    }

    // Grab the text box from the HTML file and populate the textbox.
    var textBox = (<HTMLInputElement>document.getElementById("nameField"));
    textBox.value = fullName
}

/*

I want to overhaul the logic in the random name generator, Timo suggested looking at phonemes and syllables.

This might be good: (This is VERY good)
https://www.flipcode.com/archives/Generating_Names_Phonetically.shtml

This also might be good?
https://www.dyslexia-reading-well.com/44-phonemes-in-english.html

Also MAYBE this?
https://github.com/philipperemy/name-dataset


*/