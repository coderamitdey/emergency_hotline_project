1.	Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById---
1)	Selects only one element by its unique id.
getElementsByClassName
2)	Selects all elements with the given class name.
querySelector
3)	Selects the first element that matches a CSS selector.
querySelectorAll
4)	Selects all elements that match a CSS selector.


2.	How do you create and insert a new element into the DOM?
Steps:
1. Create an element
2. Add text or attributes 
3. Insert into DOM

3.	  What is Event Bubbling and how does it work?
Bubbling:
child → parent → document
Example: If you click a <button> inside a <div>, the click event first triggers on the <button>, then on the <div>, then on <body>, etc.

4.	What is Event Delegation in JavaScript? Why is it useful?
Delegation means parent listens for child events.
Usefulness:
Reduces memory usage 
Handles dynamically added child elements

5.	Difference between preventDefault() and stopPropagation()
preventDefault() means block default behavior
               stopPropagation() → block event bubbling

