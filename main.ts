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
        // Get the ceiling for the full random values. We have to add one to the value due
        // to how rounding works. I guess we
        // var strengthRandomCeiling = Math.floor(Math.random() * Number(fullRandom.value + 1))
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

        // strengthBox.value = fullRandom.value
        // dexterityBox.value = fullRandom.value
        // constitutionBox.value = fullRandom.value
        // wisdomBox.value = fullRandom.value
        // charismaBox.value = fullRandom.value
        // intelligenceBox.value = fullRandom.value
    } else if(pointBuyRadio.checked) {
        strengthBox.value = pointBuy.value
        dexterityBox.value = pointBuy.value
        constitutionBox.value = pointBuy.value
        wisdomBox.value = pointBuy.value
        charismaBox.value = pointBuy.value
        intelligenceBox.value = pointBuy.value
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