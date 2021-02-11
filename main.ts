// This will be the main page of the Random Generator

// TODO: Add weights to the characters? As in, some characters are more likely to occur than others.

const charAlp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const vowels = ['a', 'e', 'i', 'o', 'u', 'y']    

// These are consonants where, if we put one of these in the name, we want to follow up with a vowel immediately after.
// It just looks nicer that way. Note, that, or the could be doubled.
const consonantReset = ['b', 'c', 'd', 'f', 'h', 'k', 'm', 'n', 'p', 'q', 't', 
                        'v', 'w', 'x', 'z']

// These are letters that are acceptable to have occur twice in a row.
const doubles = ['b', 'c', 'e', 'f', 'g', 'h', 'l', 'n', 'o', 'p', 'r', 's', 't',
                 'v', 'z']

// This function checks for duplicates, and if we end up with a scenario with an unwanted duplicate, we remove it.
const duplicateCheck = (charArray, prevChar, isDouble, ranChar) => {
    // var ranChar = charArray[Math.floor(Math.random() * charArray.length)]
    // This filters out unwanted duplicates.
    if ((ranChar == prevChar && !(ranChar in doubles)) || isDouble) {
        while (ranChar == prevChar) {
            var ranChar = charArray[Math.floor(Math.random() * charArray.length)]
            }
    } else if (ranChar == prevChar) {
        isDouble = true
    } else {
        isDouble = false
    }

    return [ranChar, isDouble]
}

const generateName = () => {

    var name = []
    
    // Randomly generate how long our name will be. For now, it'll be anywhere from 2-12 characters long.
    //
    // Explanation for the math behind charLen can be found here:
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    var charLen = Math.floor(Math.random() * 10) + 2

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
            var ranChar = vowels[Math.floor(Math.random() * vowels.length)]

            // Check for duplicates here.
            var ranCharAndDouble = duplicateCheck(vowels, prevChar, isDouble, ranChar)
            ranChar = ranCharAndDouble[0]
            isDouble = ranCharAndDouble[1]

            // reset consonantCount
            consonantCount = 0
        } else {
            var ranChar = charAlp[Math.floor(Math.random() * charAlp.length)]

            // Check for duplicates here.
            var ranCharAndDouble = duplicateCheck(charAlp, prevChar, isDouble, ranChar)
            ranChar = ranCharAndDouble[0]
            isDouble = ranCharAndDouble[1]
            
            // Check to see if we get a consonant or a vowel. Note some consonants will force a vowel to come after it.
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

    // Grab the text box from the HTML file and populate the textbox.
    var textBox = (<HTMLInputElement>document.getElementById("nameField"));
    textBox.value = name.join('')
}
