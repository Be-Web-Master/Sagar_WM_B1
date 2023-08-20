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

// const num = document.getElementById("main-heading")
// console.log(num.style.backgroundColor);

// 18. Does the element with the class "list" contain an **`<li>`** element with the text "Item 2"? Print **`true`** or **`false`**. (**`matches`**)

// const num =document.getElementsByClassName("list")
// console.log(num[0].firstElementChild.nextElementSibling.innerHTML="Item 2" ? true : false);

// 19. Does the element with the class "content" match a **`<div>`** tag? Print **`true`** or **`false`**. (**`matches`**)
// const num = document.getElementsByClassName("content")
// const numq = num.tagName === "div";
// console.log(numq);

// 20. What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (**`closest`**)

// const num = document.getElementsByClassName("inner-box")
// const numu = num[0].closest("#container")
// console.log(numu);

// 21. Print the first child element of the **`<body>`** element. (**`document.body`**)
// console.log(document.body.firstChild);

// 22. Print the number of child elements within the **`<body>`** element. (**`document.body.children`**)
// console.log(document.body.children);

// 23. What is the tag name of the first child element of the **`<body>`** element? (**`document.body.firstChild.tagName`**)

// console.log(document.body.firstChild.tagName)

// 24. What is the class name of the first child element of the **`<body>`** element? (**`document.body.firstChild.className`**)

const dom = document.body.firstChild.className;
console.log(document.body.firstChild.className);

// 25. Print the **`innerHTML`** of the element with the class "content". (**`innerHTML`**)
// console.log(document.getElementsByClassName("content")[0].innerHTML);

// 26. Print the **`innerText`** of the element with the class "content". (**`innerText`**)
// console.log(document.getElementsByClassName("content")[0].innerText);

// 27. Get the value of the "type" attribute of the input element with the ID "name". (**`getAttribute()`**)
// const num = document.getElementById("name").getAttribute('type')
// console.log(num);

// 28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (**`setAttribute()`**)
// const num = document
//   .getElementById("name")
//   .setAttribute("placeholder", "Enter Your Full Name");
// console.log(num);

// 29. Does the input element with the ID "name" have the "placeholder" attribute? Print **`true`** or **`false`**. (**`hasAttribute()`**)

// const num1 = document.getElementById("name").hasAttribute("placeholder")
// console.log(num1);

// 30. Remove the "value" attribute from the input element with the ID "name". (**`removeAttribute()`**)
// const num = document.getElementById("name")
// console.log(num);
// num.removeAttribute("value")
// console.log(num);

// 31. Print the total number of attributes present in the element with the ID "main-heading". (**`attributes()`**)

// const num = document.getElementById("main-heading")
// console.log(num.attributes);

// 32. Create a new **`<div>`** element using the **`document.createElement`** method. Print the created element. (**`document.createElement`**)

// const num = document.createElement("div")
// const numm = num.createElement("h1")
// num.innerText = "hellllll"
// console.log(num);

// 33. Create a new text node with the content "This is a new text node." using the **`document.createTextNode`** method. Print the created text node. (**`document.createTextNode`**)
// const num = document.createTextNode("This is a new text node.")
//  console.log(num);

// 34. Append the created text node to the element with the ID "main-heading". Print the updated element. (**`append`**)

// const num = document.createTextNode(" This is a new text node.")
// const numm = document.getElementById("main-heading")
// console.log(numm.append(num));

// 35. Prepend the created **`<div>`** element to the element with the class "content". Print the updated element. (**`prepend`**)

// const content = document.getElementsByClassName("content");
// const div = document.createElement("div");
// const span = document.createElement("span");
// span.textContent = "hello world !!"
// console.log(content[0].prepend(span));

// 36. Replace the element with the ID "main-heading" with the created text node. Print the updated element. (**`replaceWith`**)

// const num = document.getElementById("main-heading")
// const createNode = document.createTextNode("hello")
// console.log(num.replaceWith(createNode));

// 37. Insert the created **`<div>`** element before the element with the class "inner-box". Print the updated parent element. (**`before`**)
// const div = document.createElement("div");
// div.textContent = "hello world";
// const box = document.getElementsByClassName("inner-box");

// box[0].before(div);
// console.log(div.parentNode);
// 38. Insert the created **`<div>`** element after the element with the class "inner-box". Print the updated parent element. (**`after`**)
// const div = document.createElement("div");
// div.textContent = "hello world";
// const box = document.getElementsByClassName("inner-box");
// console.log(box[0].after(div))

// 39. Print the **`offsetHeight`** and **`offsetWidth`** of the element with the class "content". (**`offsetHeight`** / **`offsetWidth`**)

// const content = document.getElementsByClassName("content")

// console.log(content[0].offsetHeight);
// console.log(content[0].offsetWidth);

// 40. Print the **`clientHeight`** and **`clientWidth`** of the element with the class "content". (**`clientHeight`** / **`clientWidth`**)

// const content = document.getElementsByClassName("content")
// console.log(content[0].clientHeight);
// console.log(content[0].clientWidth);

// 41. Print the **`scrollHeight`** and **`scrollWidth`** of the element with the class "content". (**`scrollHeight`** / **`scrollWidth`**)

// const content = document.getElementsByClassName("content")
// console.log(content[0].scrollHeight);
// console.log(content[0].scrollWidth);

// 42. Print the **`innerHeight`** and **`innerWidth`** of the window. (**`innerHeight`** / **`innerWidth`**)

// const content = document.getElementsByClassName("content")
// console.log(content[0].innerHeight);
// console.log(content[0].innerWidth);

// 43. Print the **`outerHeight`** and **`outerWidth`** of the window. (**`outerHeight`** / **`outerWidth`**)

// const content = document.getElementsByClassName("content")
// console.log(content[0].outerHeight);
// console.log(content[0].outerWidth);

// 44. Change the text content of the **`<h1>`** element with the ID "main-heading" to "Hello, DOM!".

// const head = document.getElementById("main-heading")
// head.textContent = "Hello, Dom"

// 45. Change the value of the input element with the ID "name" to "Jane Smith".
// const name = document.getElementById("name")
// name.value = "Jane Smith";

// 46. Add a new **`<li>`** element to the **`<ul>`** element with class "list" containing the text "Item 4".

// const list  = document.getElementsByClassName("list")
//  const myLi = document.createElement("li")
//  myLi.textContent="item 4"
//  console.log(list[0].appendChild(myLi));

// 47. Change the text content of the **`<p>`** element within the **`<div>`** with class "content" to "Updated paragraph text".
// const content = document.querySelector(".content")
// content.children[0].innerText="updated paragraph text"

// 48. Change the background color of the **`<div>`** element with ID "container" to blue.

// const container = document.getElementById("container")
// container.style.backgroundColor="blue"

// 49. Remove the class "inner-box" from the **`<div>`** element with class "inner-box".

// const div = document.querySelector(".inner-box")
// div.classList.remove("inner-box")

// console.log(div);

// 50. Clone the **`<div>`** element with ID "container" and append it to the body.

// const container = document.getElementById("container")
// const clone = container.cloneNode(true)
// console.log(document.body.appendChild(clone));

// 51. Wrap the contents of the **`<div>`** with ID "container" in a new **`<div>`** with class "wrapper".

// const container = document.getElementById("container")
// const div = document.createElement("div")
// div.classList.add("wrapper")
// const content = container.innerHTML
// container.innerHTML=''
// container.appendChild(div)
// div.innerHTML=content
// console.log(div.children);

// 52. Remove the first **`<li>`** element from the **`<ul>`** with class "list".
// const list = document.querySelector(".list")
// const li = document.querySelector("li:first-child")
// console.log(list.removeChild(li));

// 53. Add the class "highlight" to the **`<p>`** element within the **`<div>`** with class "content".
// const content = document.getElementsByClassName("content")
// console.log(content[0].children[0]);
// content[0].children[0].classList.add("highlight")

// 54. Change the type of the input element with ID "name" to "email".

// const input = document.querySelector("input")
// input.setAttribute("type","email")
// console.log(input);
// 55. Replace the text content of the **`<li>`** element with "Item 2" to "Updated Item 2".
// const myUl = document.querySelector("li:nth-child(2)")
// myUl.textContent="Updated Item 2"
// console.log(myUl.innerHTML);

// 56. Change the value of the input element with ID "name" to an empty string.
// const input = document.getElementsByTagName("input")
// input[0].setAttribute("value","")
// console.log(input);

// 57. Remove the entire **`<form>`** element from the DOM.
// const form = document.getElementsByTagName("form")
// // console.log(form[0]);
// const form1 = form[0]
// console.log(document.body.removeChild(form1));

// 58. Add an event listener to the **`<h1>`** element with ID "main-heading" that logs a message when clicked.
// const h1 = document.getElementById("main-heading")
// const fun = ()=>{
//     console.log("cliked");
// }
// h1.addEventListener('click',fun)

// 59. Change the font size of the **`<p>`** element within the **`<div>`** with class "content" to 18px.
// const para = document.querySelector("div>p")
// para.style.fontSize="18px"
// console.log(para);

// 60. Remove the **`<ul>`** element with class "list" from the DOM.
// const para = document.querySelector(".list")
// document.body.removeChild(para)

// 61. Create a new **`<div>`** element, give it a class of "new-div", and append it to the body.
// const newDiv= document.createElement("div")
// newDiv.classList.add("new-div")
// document.body.append(newDiv)

// 62. Append a new **`<p>`** element with the text "New paragraph" to the **`<div>`** with class "inner-box".
// const p= document.createElement("p")
// p.textContent="New ParaGraph"
// const box = document.getElementsByClassName("inner-box");
// box[0].append(p)
