'use strict';

console.log('Script is running!')

// When someone clicks the button with the class “color-changer”, all 
// elements with the class “color-change” should turn red (you can do this by adding the 
// class red to them).

function changeColor() {
    // This creates the variable colorChangeElem. The period in '.color-change is 
    // a class selector. The period (.) is used to select elements by their 
    // class name. It is a class selector in CSS. color-change is a class name. 
    // The document.querySelectorAll('.color-change') statement retrieves all elements in 
    // the js-demo.html document that have the class name color-change.
    // This is commonly used when you want to select and perform operations on 
    // multiple elements that share a common class.
    const colorChangeElem = document.querySelectorAll('.color-change');

    //  This for loop, a modern way to iterate over elements in an iterable, 
    // such as an array or a NodeList. element is a reference to the current DOM element in the loop.
    // Which we named ourself. classList is a property of the DOM element that represents 
    // a live collection of the class attributes of the element.
    for (const element of colorChangeElem) {
        element.classList.add('red');
    }
}

// When someone submits the form, prevent its default behavior (it should not redirect 
// to a new page). Instead, validate the input in the text input with ID “number-input”. 
// If it is not a number or greater than or equal to 10, change the text of the element 
// with ID “formFeedback” to say ‘Please enter a smaller number’. Otherwise, change the 
// text of that element to say “You are good to go!.”

function validateNumber(evt) {
    // evt is a commonly used abbreviation for "event." It is a variable 
    // chosen by the programmer and is not a reserved keyword in the language.
    // The preventDefault method is part of the Event interface in the DOM (Document Object Model). 
    // It is used to prevent the default behavior associated with an event. The default behavior 
    // of an event depends on the type of event and the element involved.
    // The purpose of preventDefault is to stop the browser from performing the default 
    // action associated with the event. For example, if this event handler is attached 
    // to a form submission, calling preventDefault prevents the form from being 
    // submitted in the usual way, giving you the opportunity to handle the 
    // submission programmatically.
    evt.preventDefault();
  
    // This creates the numberInput variable which selects the HTML element with 
    // the id number-input in js-demo.html. The hashmark in ('#formFeedback') is used to 
    // select an element by its ID. It is an ID selector in CSS. formFeedback is an ID 
    // assigned to an element. The document.querySelector('#formFeedback') statement 
    // retrieves the element with the ID formFeedback. IDs are unique within a document, 
    // so querySelector returns at most one element. The hashmark is for id while the period is for class
    const numberInput = document.querySelector('#number-input');
    
    // This line retrieves the value of the input element 
    // (numberInput.value) and converts it to a number using the 
    // Number function. Number is a built-in JavaScript function. 
    // It is used here to explicitly convert the value of numberInput.value to a number.
    // .value is a property of HTML input elements. It retrieves or sets the 
    // current value of the input field.
    const userNum = Number(numberInput.value); 
  
    // Get the element with id 'formFeedback'
    const formFeedback = document.querySelector('#formFeedback');
    // Check if the userNum is not a number or is greater than or equal to 10.
    // isNaN is a built-in JavaScript function that stands for "Is Not a Number."
    // It returns true if the provided value is NaN (Not-a-Number), and false otherwise.
    // The || operator is a logical OR operator. It returns true if at least one of the 
    // conditions on its left or right side is true, and false if both are false.
    if (isNaN(userNum) || userNum >= 10) {
      formFeedback.innerText = 'Pick a number between 1 and 10'; // if it's not a number or greater
                                                                // than 10, it returns this message
    } else {
      formFeedback.innerText = 'You are good to go!'; // If it's a number between 1-10, this message 
                                                      // will print
    }
}

document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);