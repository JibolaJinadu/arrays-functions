/** Question 1
    What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
    List 5 array methods that fall under each of them.
 
 
    Mutating Array method is basically changing the array itself instead of returning a new array with the new changes,   
    Mutating methods are ones that change the object after the method has been used. 
    Non-mutating methods do not change the object after the method has been used.

    Immutability or Non-Mutation JavaScript array functions are better to some extent because it maintains 
    the predictability and it increases performance by sharing the structure to reduce memory overhead

    Examples of Mutating Array Methods in JavaScript are: 
    1.  array.copyWithin(), 
    2.  array.fill(), 
    3.  array.pop(), 
    4.  array.push(), 
    5.  array.reverse().

    Examples of Non-Mutating Methods in JavaScript are:
    1.  array.concat(), 
    2.  array.includes(), 
    3.  array.indexOf, 
    4.  array.join(), 
    5.  array.lastIndexOf.
**/


/**  Question 2
Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. 
Perform this operation on them **/

let progLang = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

//  1.  Add ‘Kotlin’ to the end of the array.
progLang.push('Kotlin');

//  2.  Add ‘Java’ after ‘Ruby’.
progLang.splice(3,0,'Java')

//  3.  Remove the first item in the array.
progLang.shift();

//  4.  Add ’Scala’ and ‘Swift’ to the beginning of the array.
progLang.unshift('Scala', 'Swif')

// 5.   Replace ‘PHP’ with ‘Go’ and ‘Rust’.
progLang.splice(5, 1, 'Go', 'Rust')
console.log(progLang);


/** Question 3
    What will be the value of fruit after calling the function changeFruit?   **/

    let fruit = ['apple', 'mango', 'banana'];
        function changeFruit( fruit ) {
            fruit[2] = "orange";
            return fruit;
        }
    console.log(changeFruit(fruit));     //[ 'apple', 'mango', 'orange' ]//


/** Question 4
    Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.  **/

    function max(input) {
        if (toString.call(input) !== "[object Array]")  
        return false;
        return Math.max.apply(null, input);
        }
    console.log(max([14,77,53,-80, 2]));


/** Question 5
    Write a function called valTimesIndex which accepts an array of numbers and 
    returns a new array with each value multiplied by the index it is at in the array:   **/

    function valTimesIndex(num) {
        return num.map((val, index) => val * index);
        }
    let array = [5, 25, 40, 5];
    let multipliedResult = valTimesIndex(array);
    console.log(multipliedResult);
