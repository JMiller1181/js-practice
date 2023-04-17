const header = document.getElementsByTagName("header");
const sections = document.querySelectorAll("section");
let currentSection = document.querySelector(".current");
let nextSection = currentSection.nextElementSibling;
let prevHSec = currentSection.previousElementSibling.children;
const highlight = document.querySelector(".highlight").parentElement.parentElement;
const allH2Sec = Array.from(document.querySelectorAll("h2")).map((el) => el.parentElement);

//
console.log(header);
console.log(sections);
console.log(currentSection);
console.log(nextSection);
console.log(prevHSec);
console.log(highlight);
console.log(allH2Sec);