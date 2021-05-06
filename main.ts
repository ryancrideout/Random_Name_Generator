// This is the main page of the Random Generator

// Import titles from titles.ts
import {titles} from "./titles"

// Import name templates from nameTemplates
import {nameTemplate_1, nameTemplate_darius, nameTemplate_porter, nameTemplate_ryan, nameTemplate_timo,
        nameTemplate_lux, nameTemplate_malorie, nameTemplate_rylan, nameTemplate_kaitlynn, nameTemplate_sophia,
        nameTemplate_carl} from "./nameTemplates"

export function generateName() {
    // Redid the logic behind name generation, this is what I used for inspiration:
    // https://www.flipcode.com/archives/Generating_Names_Phonetically.shtml

    // Create an array of all of the available name templates. We can expand on this idea later.
    var templateList = [nameTemplate_1, nameTemplate_darius, nameTemplate_porter, nameTemplate_ryan, nameTemplate_timo,
                        nameTemplate_lux, nameTemplate_malorie, nameTemplate_rylan, nameTemplate_kaitlynn, nameTemplate_sophia,
                        nameTemplate_carl]

    // Determine what name template we'll actually use.
    var templateIndex = Math.floor(Math.random() * templateList.length)
    var nameTemplate = templateList[templateIndex]

    var name = []

    for (var i = 0; i < nameTemplate.length; i++) {

        // Randomly determine what individual phoneme we'll use - first determine what phoneme to use.
        var phonemeArrayIndex = Math.floor(Math.random() * nameTemplate[i].length)
        // Then decide what "character" (for lack of a better word) variation to use.
        var randomPhonemeIndex = Math.floor(Math.random() * nameTemplate[i][phonemeArrayIndex].length)
        name.push(nameTemplate[i][phonemeArrayIndex][randomPhonemeIndex])
    }

    var fullName = name.join('')

    // Need to capitalize the name.
    fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1)

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


export function generateAttributes() {

    // This is a helper function we use to help get our point buy values. Takes a "pointBuyPool" as an input.
    function calculatePointBuyValue(pointBuyPool) {
        // Randomly grab a value from the pool. That is, get the index so we can reference the dictionary.
        var pointBuyPoolIndex = Math.floor(Math.random() * pointBuyPool.length)
        var pointBuyScore = pointBuyPool[pointBuyPoolIndex]

        // Put our point buy value into the array
        pointBuyValues.push(pointBuyScore)

        // Need to subtract the budget as well, and subtract one of the slots left.
        pointBuyBudget -= pointBuyCosts[pointBuyScore]
        slotsLeft -= 1
    }

    // Function used to remove elements from an array. Shamelessly stolen from the internet.
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    // Note that we're passing in the INDEX, not the value.
    function removeValueOnce(array, index) {
        if (index > -1){
            array.splice(index, 1)
        }
        return array
    }

    // Grab all of our attribute value boxes
    var strengthBox = (<HTMLInputElement>document.getElementById("strengthField"));
    var dexterityBox = (<HTMLInputElement>document.getElementById("dexterityField"));
    var constitutionBox = (<HTMLInputElement>document.getElementById("constitutionField"));
    var wisdomBox = (<HTMLInputElement>document.getElementById("wisdomField"));
    var charismaBox = (<HTMLInputElement>document.getElementById("charismaField"));
    var intelligenceBox = (<HTMLInputElement>document.getElementById("intelligenceField"));

    // Grab our radio buttons
    var pointBuyRadio = (<HTMLInputElement>document.getElementById("pointBuyRadio"));
    var fullRandomRadio = (<HTMLInputElement>document.getElementById("fullRandomRadio"));

    // Grabbing the values of the Advanced Options - we use them to do all of the Math.
    var pointBuy = (<HTMLInputElement>document.getElementById("pointBuyValue"));
    var fullRandom = (<HTMLInputElement>document.getElementById("maxRandomValue"));

    // Test code just so that I understand how this works.
    if(fullRandomRadio.checked) {
        // Get the ceiling for the full random values. 
        var strengthRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        strengthBox.value = String(strengthRandomCeiling)

        var dexterityRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        dexterityBox.value = String(dexterityRandomCeiling)

        var constitutionRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        constitutionBox.value = String(constitutionRandomCeiling)

        var wisdomRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        wisdomBox.value = String(wisdomRandomCeiling)

        var charismaRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        charismaBox.value = String(charismaRandomCeiling)

        var intelligenceRandomCeiling = Math.ceil(Math.random() * Number(fullRandom.value))
        intelligenceBox.value = String(intelligenceRandomCeiling)

    } else if(pointBuyRadio.checked) {
        // The format of this dictionary is <Attribute Value>: <Point Cost>
        var pointBuyCosts = {
            18: 19,
            17: 15,
            16: 12,
            15: 9,
            14: 7,
            13: 5,
            12: 4,
            11: 3,
            10: 2,
            9: 1,
            8: 0,
            7: -1,
            6: -2,
            5: -4,
            4: -6,
            3: -9
        }

        var pointBuyBudget = Number(pointBuy.value)

        // This is how many attribute slots we have left:
        var slotsLeft = 6

        // And this is where we'll put our point buy values:
        var pointBuyValues = []

        // And this is where the magic begins:
        while (slotsLeft > 0) {
            // I wanted to do a switch statement here, but apparently they don't like the comparisons I try to do.
            // In short, depending on the budget, we throw different values into the point buy calculator. Nothing too crazy.

            // Alright this works, but it doesn't exactly adhere to the rules. The logic could be stricter.

            if (pointBuyBudget > 40){
                calculatePointBuyValue([18, 17, 16])
                continue
            } else if (pointBuyBudget > 30){
                calculatePointBuyValue([18, 17, 16, 15, 14])
                continue
            } else if (pointBuyBudget <= 27){
                calculatePointBuyValue([15, 14, 13, 12, 11, 10, 9, 8])
                continue
            } else if (pointBuyBudget <= 7){
                calculatePointBuyValue([14, 13, 12, 11, 10, 9, 8])
                continue
            } else if (pointBuyBudget <= 5){
                calculatePointBuyValue([13, 12, 11, 10, 9, 8])
                continue
            } else if (pointBuyBudget <= 4){
                calculatePointBuyValue([12, 11, 10, 9, 8])
                continue
            } else if (pointBuyBudget <= 3){
                calculatePointBuyValue([11, 10, 9, 8])
                continue
            } else if (pointBuyBudget <= 2){
                calculatePointBuyValue([10, 9, 8])
                continue
            } else if (pointBuyBudget <= 1){
                calculatePointBuyValue([9, 8])
                continue
            } else if (pointBuyBudget == 0){
                calculatePointBuyValue([8])
                continue
            } else {
                calculatePointBuyValue([7, 6, 5, 4, 3])
                continue
            }

        }

        // Now we need to shuffle the values and assign them.
        var pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        strengthBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

        pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        dexterityBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

        pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        constitutionBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

        pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        wisdomBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

        pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        charismaBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

        // At this point there should only be one value left in the array, so
        // this shouldn't be necessary.
        pointBuyValuesIndex = Math.floor(Math.random() * pointBuyValues.length)
        intelligenceBox.value = pointBuyValues[pointBuyValuesIndex]
        pointBuyValues = removeValueOnce(pointBuyValues, pointBuyValuesIndex)

    }

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