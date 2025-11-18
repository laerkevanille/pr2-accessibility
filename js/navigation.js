const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("header > nav").classList.toggle("show");
    document.querySelector("#bars i").classList.toggle("fa-bars");
    document.querySelector("#bars i").classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);



const search = document.querySelector("#search-btn");

const openInput = () => {
    document.querySelector("header > nav > input").classList.toggle("show-search");
    document.querySelector("#search-btn i").classList.toggle("fa-magnifying-glass");
    document.querySelector("#search-btn i").classList.toggle("fa-xmark");
}

search.addEventListener("click", openInput);