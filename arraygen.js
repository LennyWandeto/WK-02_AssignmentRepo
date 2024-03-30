function arrayGen(num1, num2){
    // Create an empty array for numbers to be added into 
    let arr = []

    // Set the start and end of the range
    let start = Math.min(num1,num2)
    let end = Math.max(num1,num2)

    // Iterate through the range and add each number to the array using the start as the first index
    for (let idx=start; idx < end; idx++) {

        // Psuh each additional number into the array as it iterates
        arr.push(idx)
        
    }
    // Return the array of numbers
    return arr
}