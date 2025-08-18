const reverseString = function(str) 
{
    let charArray = str.split("");
    let left = 0
    let right = charArray.length - 1

    while (left < right)
    {
        let temp = charArray[left]

        charArray[left] = charArray[right];
        charArray[right] = temp;

        ++left;
        --right;
    }

    return charArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
