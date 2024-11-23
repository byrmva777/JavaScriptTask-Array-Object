//Array tasks
// Write a function that takes an array and returns a new array with the last item removed.
function removeLastItem(array) 
{
    return array.slice(0, -1)
}

let arr = [1, 2, 3, 4]
console.log(removeLastItem(arr))

// Write a function that takes an array and returns the length of items it has.
function lengthOfItems(array)
{
    return array.length
}

let arr2 = [1, 2, 3, 4]
console.log(lengthOfItems(arr2))

// Write a function that takes an array and an item, returns the array with the item added to the end of array.
function addItemToArray(array, item) 
{
    array.push(item)
    return array
}

let arr3 = [1, 2, 3]
console.log(addItemToArray(arr3, 4))

// Write a function that takes an array and an item, returns the array with the item added to the beginning of array.
function addItemToBeginning(array, item) 
{
    array.unshift(item)
    return array
}

let arr4 = [1, 2, 3]
console.log(addItemToBeginning(arr4, 0))

// Write a function that takes an array of words and returns a string of the words seperated by ,
function arrayToString(wordsArray) 
{
    return wordsArray.join(",")
}

let words = ["apple", "banana", "cherry"]
console.log(arrayToString(words))

// Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.
function getItemsBetweenIndexes(array, start, end) 
{
    return array.slice(start, end)
}

let arr5 = [1, 2, 3, 4, 5, 6]
console.log(getItemsBetweenIndexes(arr5,1,5))

// Write a function that takes an array and an index, returns the item at given index.
function getItemAtIndex(array, index) 
{
    return array[index]
}

let arr6 = [1, 2, 3, 4, 5, 6]
console.log(getItemAtIndex(arr6, 3))

// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.
function removeItemFromArray(array, item) 
{
    return array.filter(element=>element !== item)
}

let arr7 = [1, 2, 3, 4];
console.log(removeItemFromArray(arr7, 2))


//Object tasks
// Write a function objectToArray(obj) that converts an object to an array of key-value pairs.  
function objectToArray(obj) 
{
    return Object.entries(obj)
}

const myObject = { name: 'Aygun', surname: 'Bayramova' }
console.log(objectToArray(myObject))

// Write a function that takes an array of objects and splits them to two groups, one that fulfill the condition in the callback function and one that does not.
function splitArrayByCondition(array, callback) 
{
    let group1 = [];
    let group2 = [];
    
    array.forEach(item => {
        if (callback(item)) 
        {
            group1.push(item)
        } 
        else
        {
            group2.push(item)
        }
    });
    
    return [group1, group2]
}

let people = [
    { name: 'Aygun', age: 20 },
    { name: 'Sema', age: 21 },
    { name: 'Bayram', age: 17 },
    { name: 'Seid', age: 15 }
];

let [adults, minors] = splitArrayByCondition(people, person => person.age >= 18);

console.log('Adults:', adults) 
console.log('Minors:', minors)
