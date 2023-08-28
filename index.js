const map = document.querySelector(".map");
const mapList = document.querySelector(".map--list");

const postcode = document.querySelector(".postcode");
const postcodeList = document.querySelector(".postcode--list");

const navOpen = document.querySelector(".nav--open");
const navContent = document.querySelector(".nav--content");

postcode.addEventListener("click", ()=>
postcodeList.classList.toggle("show--list"))

map.addEventListener("click", ()=>
mapList.classList.toggle("show--list"))


navOpen.addEventListener("click", ()=>
navContent.classList.toggle("show--list"))