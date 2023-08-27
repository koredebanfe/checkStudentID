const map = document.querySelector(".map");
const mapList = document.querySelector(".map--list");

const postcode = document.querySelector(".postcode");
const postcodeList = document.querySelector(".postcode--list");

postcode.addEventListener("click", ()=>
postcodeList.classList.toggle("show--list"))

map.addEventListener("click", ()=>
mapList.classList.toggle("show--list"))