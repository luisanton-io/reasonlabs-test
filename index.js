// 1. Please write a function (fn) that aggregate inputs (strings) and return it if there is no input for examples:
//          console.log(
//                 fn("hello").fn("world").fn("!!!").fn()
//          )
//          //Will print: hello world !!!
function fn(str, prev) {
    /** YOUR CODE GOES HERE /**/

    // Explanation:
    // if we have a string we are returning the same function with the current string as "prev" string
    // if we don't have a new string we are returning the previous strings

    return str ? { fn: (newStr) => fn(newStr, (prev || "") + str + " ") } : prev
}

const result = fn("hello").fn("world").fn("!!!").fn()


console.log(result)


//  2. What does this function return if you pass in 2 as x? And why


function ffn(x) { // x=2

    x++ // here it becomes 3
    (x = x - 3) && ++x // assigning x - 3 to x. This returns 0 which counts as falsy. Therefore, the right side of the && operator is not executed.
    // On the next line x, which is now 0, becomes -1 *before* being returned. 
    // As happening for example in Java, prefixing the ++ and -- operators before the variable will execute the increment/decrement before the next computation.
    return --x
}

