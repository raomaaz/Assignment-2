// Question 1
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function addNum(n) {
    return function (x) {
        return x + n;
    }
}
const add = addNum(5); // n
const answer1 = add(10); // x

console.log('Question 1, Answer => ' + answer1);

// Question 2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArr(array, value) {
    if (array[0] === value) {
        return true;
    } else {
        return searchArr(array.slice(1), value);
    }
}

const myArray = [1, 2, 3, 4, 5];
let value1 = 3;

console.log(searchArr(myArray, value1));

// Question 3
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function addParaEle(content) {

    var newEle = document.createElement('p')
    newEle.innerText = content
    document.body.appendChild(newEle)
}

// Question 4
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


function addList(listItem) {

    // Create an "li" element:
    const newListItem = document.createElement("li");
    document.getElementById("unorderList").appendChild(newListItem).innerText = listItem;
}

// Question 5
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function changeColor(ele, color) {
    ele.style.backgroundColor = color;
}

var myText = document.getElementById("textColor");

changeColor(myText, 'green');


// Question 6
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function toLocalStore(key, obj) {
    var stringObj = JSON.stringify(obj)
    localStorage.setItem(key, stringObj)
}

var obj = {
    myName: 'Usama',
    age: 22,
    education: 'undergraduation'
}

var result = toLocalStore('myObj', obj)
console.log('Question 06, Answer => save to LocalStorage');

// Question 7
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function fromLocalStore(key) {
    var objFromLocal = localStorage.getItem(key)
    objFromLocal = JSON.parse(objFromLocal)
    // console.log('received ', normalObj);
    return objFromLocal

}
var answer7 = fromLocalStore('myObj')
console.log('Question 06, Answer => ', answer7);

// Question 8
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjToLocalStore(obj) {
    var accessKeyOfObject = Object.keys(obj)
    var accessValueOfObject = Object.values(obj)
    
    for (var i = 0; i < accessKeyOfObject.length && accessValueOfObject.length; i++) {
        var data = localStorage.setItem(accessKeyOfObject[i], accessValueOfObject[i])

    }
    console.log('Object Save to local storage');

    // retrieving new object from Localstorage.
    var newObj = {};
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        newObj[key] = localStorage.getItem(key);
    }
    return newObj;

}
var answer8 = saveObjToLocalStore({
    firstName: 'Usama',
    lastName: 'sadiq',
    age: 22
})
console.log('Question 08, Answer => ', answer8);
