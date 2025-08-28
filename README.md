1.	Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById()
a)	Selects only one element by its unique id.

getElementsByClassName()
b)	Selects all elements with the given class name.

querySelector()
c)	Selects the first element that matches a CSS selector

querySelectorAll()
d)	Selects all elements that match a CSS selector.


2.	How do you create and insert a new element into the DOM?
Steps:
a) Create an element
b) Add text or attributes 
c) Insert into DOM

3.	  What is Event Bubbling and how does it work?
Bubbling:
child → parent → document
Example: If we click a button inside a div, the click event first triggers on the button, then on the div, then on body etc.

4.	What is Event Delegation in JavaScript? Why is it useful?
Delegation means parent listens for child events.
Usefulness:
Reduces memory usage 
Handles dynamically added child elements

5.	Difference between preventDefault() and stopPropagation()
preventDefault() means block default behavior
               stopPropagation() → block event bubbling

