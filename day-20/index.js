//1. Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading)

// 2. Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)

// const name = document.getElementById("name");
// console.log(name.type);

// 3 Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)
// const name1 = document.getElementById("name");
// console.log(name1.name);

// 4 Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)
// const name1 = document.getElementById("name");
// console.log(name1.attributes[1].name);

// 5 With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)
// const name1 = document.getElementById("name");
// console.log(name1.value);

// 6 Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)
// const name1 = document.querySelectorAll("li");
// console.log(name1[0].innerHTML);

// 7 Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)
// const name1 = document.getElementsByClassName("content");
// console.log(name1[0].innerText);

//8 Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)

// const num = document.body.children
// console.log(num);

// 9 Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const num = document.getElementsByTagName("li");
// console.log(num[0].innerHTML);

//10 Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)

// const num = document.getElementsByClassName("content");
// console.log(num[0].innerText);

// 11. Using **`getElementsByName`**, target the input element with the name "fullName" and print it to the console. (**`getElementsByName`**)
// const num = document.getElementsByName("fullName");
// console.log(num);

// 12. What classes are present in the **`classList`** of the element with the ID "main-heading"? (**`classList`**)

// const num = document.getElementById("main-heading")
// console.log(num.classList);

// 13. Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (**`classList.add`**)

// const num = document.getElementById("main-heading");
// console.log(num.classList.add("highlight"));
// console.log(num);
// 14. Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (**`classList.remove`**)
// const num = document.getElementById("main-heading");
// console.log(num.classList.remove("highlight"));
// console.log(num);

// 15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (**`classList.toggle`**)
// const num = document.getElementsByClassName("inner-box");
// console.log(num[0].classList.toggle("active"))
// console.log(num[0].classList);


// 16. Check if the element with the class "inner-box" has the class "active". Print **`true`** or **`false`**. (**`elem.classList.has`**)

// const num = document.getElementsByClassName("inner-box")
// console.log(num[0].classList.contains("active"));


// 17. Does the element with the ID "name" have the class "input-field"? Print **`true`** or **`false`**. (**`classList.contains`**)

// const num = document.getElementById("name")
// console.log(num.classList.contains("input-field"));

// 17. What is the background color of the element with the ID "main-heading"? (**`style.background-color`**)

const num = document.getElementById("main-heading")

// console.log(num.);
// 18. Does the element with the class "list" contain an **`<li>`** element with the text "Item 2"? Print **`true`** or **`false`**. (**`matches`**)

// const num =document.getElementsByClassName("list")
// console.log(num[0].fir);


// 19. Does the element with the class "content" match a **`<div>`** tag? Print **`true`** or **`false`**. (**`matches`**)
// 20. What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (**`closest`**)
// 21. Print the first child element of the **`<body>`** element. (**`document.body`**)
// 22. Print the number of child elements within the **`<body>`** element. (**`document.body.children`**)
// 23. What is the tag name of the first child element of the **`<body>`** element? (**`document.body.firstChild.tagName`**)
// 24. What is the class name of the first child element of the **`<body>`** element? (**`document.body.firstChild.className`**)
// 25. Print the **`innerHTML`** of the element with the class "content". (**`innerHTML`**)
// 26. Print the **`innerText`** of the element with the class "content". (**`innerText`**)
// 27. Get the value of the "type" attribute of the input element with the ID "name". (**`getAttribute()`**)
// 28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (**`setAttribute()`**)
// 29. Does the input element with the ID "name" have the "placeholder" attribute? Print **`true`** or **`false`**. (**`hasAttribute()`**)
// 30. Remove the "value" attribute from the input element with the ID "name". (**`removeAttribute()`**)
// 31. Print the total number of attributes present in the element with the ID "main-heading". (**`attributes()`**)
// 32. Create a new **`<div>`** element using the **`document.createElement`** method. Print the created element. (**`document.createElement`**)
// 33. Create a new text node with the content "This is a new text node." using the **`document.createTextNode`** method. Print the created text node. (**`document.createTextNode`**)
// 34. Append the created text node to the element with the ID "main-heading". Print the updated element. (**`append`**)
// 35. Prepend the created **`<div>`** element to the element with the class "content". Print the updated element. (**`prepend`**)
// 36. Replace the element with the ID "main-heading" with the created text node. Print the updated element. (**`replaceWith`**)
// 37. Insert the created **`<div>`** element before the element with the class "inner-box". Print the updated parent element. (**`before`**)
// 38. Insert the created **`<div>`** element after the element with the class "inner-box". Print the updated parent element. (**`after`**)
// 39. Print the **`offsetHeight`** and **`offsetWidth`** of the element with the class "content". (**`offsetHeight`** / **`offsetWidth`**)
// 40. Print the **`clientHeight`** and **`clientWidth`** of the element with the class "content". (**`clientHeight`** / **`clientWidth`**)
// 41. Print the **`scrollHeight`** and **`scrollWidth`** of the element with the class "content". (**`scrollHeight`** / **`scrollWidth`**)
// 42. Print the **`innerHeight`** and **`innerWidth`** of the window. (**`innerHeight`** / **`innerWidth`**)
// 43. Print the **`outerHeight`** and **`outerWidth`** of the window. (**`outerHeight`** / **`outerWidth`**)
// 44. Change the text content of the **`<h1>`** element with the ID "main-heading" to "Hello, DOM!".
// 45. Change the value of the input element with the ID "name" to "Jane Smith".
// 46. Add a new **`<li>`** element to the **`<ul>`** element with class "list" containing the text "Item 4".
// 47. Change the text content of the **`<p>`** element within the **`<div>`** with class "content" to "Updated paragraph text".
// 48. Change the background color of the **`<div>`** element with ID "container" to blue.
// 49. Remove the class "inner-box" from the **`<div>`** element with class "inner-box".
// 50. Clone the **`<div>`** element with ID "container" and append it to the body.
// 51. Wrap the contents of the **`<div>`** with ID "container" in a new **`<div>`** with class "wrapper".
// 52. Remove the first **`<li>`** element from the **`<ul>`** with class "list".
// 53. Add the class "highlight" to the **`<p>`** element within the **`<div>`** with class "content".
// 54. Change the type of the input element with ID "name" to "email".
// 55. Replace the text content of the **`<li>`** element with "Item 2" to "Updated Item 2".
// 56. Change the value of the input element with ID "name" to an empty string.
// 57. Remove the entire **`<form>`** element from the DOM.
// 58. Add an event listener to the **`<h1>`** element with ID "main-heading" that logs a message when clicked.
// 59. Change the font size of the **`<p>`** element within the **`<div>`** with class "content" to 18px.
// 60. Remove the **`<ul>`** element with class "list" from the DOM.
// 61. Create a new **`<div>`** element, give it a class of "new-div", and append it to the body.
// 62. Append a new **`<p>`** element with the text "New paragraph" to the **`<div>`** with class "inner-box".