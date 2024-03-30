function caseSwap(string) {
    // Create an empty string for characters to be addended into
    let letters = ''

    // Iterating through the whole string using for()
    for (let idx = 0; idx < string.length; idx++) {

        // Chr is each character within the string while iterating
        let chr = string.charAt(idx)

        // Change to lower case if upper
        if (chr === chr.toUpperCase()){
           letters += chr.toLowerCase()
        }
        // Change to upper case if lower
        else {
            letters += chr.toUpperCase()
        }
    }
    // Return final concatenation of changed letters
    return letters
}