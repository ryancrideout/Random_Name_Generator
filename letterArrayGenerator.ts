// File for generating all of the character arrays to be used for name generation.

// This is deprecated now.
// export const charAlp:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//                                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// This is NOT deprecated, it still gets used.
export const vowels:string[] = ['a', 'e', 'i', 'o', 'u', 'y'] 

// These are consonants where, if we put one of these in the name, we want to follow up with a vowel immediately after.
// It just looks nicer that way. Note, that, or the consonant in question could be doubled.
export const consonantReset:string[] = ['b', 'c', 'd', 'f', 'g', 'j', 'h', 'k', 'm', 'n', 'p', 'q', 'r', 't', 
                                        'v', 'w', 'x', 'z']

// These are letters that are acceptable to have occur twice in a row.
export const doubles:string[] = ['b', 'c', 'e', 'f', 'g', 'h', 'l', 'n', 'o', 'p', 'r', 's', 't',
                                 'v', 'z']

// Tried making this array to be something like ['a', 1], but TypeScript didn't like that I guess...
// Also, here's the reference for the Weighted Random values:
// https://blobfolio.com/2019/randomizing-weighted-choices-in-javascript/
export const weightedCharAlp = [
    {char: 'a', weight: 1},
    {char: 'b', weight: 4},
    {char: 'c', weight: 4},
    {char: 'd', weight: 5},
    {char: 'e', weight: 1},
    {char: 'f', weight: 4},
    {char: 'g', weight: 4},
    {char: 'h', weight: 4},
    {char: 'i', weight: 1},
    {char: 'j', weight: 1},
    {char: 'k', weight: 4},
    {char: 'l', weight: 4},
    {char: 'm', weight: 4},
    {char: 'n', weight: 5},
    {char: 'o', weight: 1},
    {char: 'p', weight: 4},
    {char: 'q', weight: 2},
    {char: 'r', weight: 4},
    {char: 's', weight: 5},
    {char: 't', weight: 5},
    {char: 'u', weight: 1},
    {char: 'v', weight: 2},
    {char: 'w', weight: 2},
    {char: 'x', weight: 1},
    {char: 'y', weight: 1},
    {char: 'z', weight: 2},
];

// Calculate the 'total' weight of weightedCharAlp
export var weightedCharAlpTotal = 0
for (let i = 0; i < weightedCharAlp.length; i++) {
    weightedCharAlpTotal += weightedCharAlp[i]["weight"]
}

// This determines the "weight" of any particular vowel showing up.
export const weightedVowels = [
    {char: 'a', weight: 10},
    {char: 'e', weight: 10},
    {char: 'i', weight: 10},
    {char: 'o', weight: 8},
    {char: 'u', weight: 6},
    {char: 'y', weight: 1},
]

// Calculate the 'total' weight of weightedVowels
export var weightedVowelTotal = 0
for (let i = 0; i < weightedVowels.length; i++) {
    weightedVowelTotal += weightedVowels[i]["weight"]
}