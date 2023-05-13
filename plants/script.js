let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menu_list = document.querySelector(".menu-list");
let body = document.body;
let lines = document.querySelectorAll(".line");

burger.addEventListener("click", activate_menu);
menu.addEventListener("click", activate_menu);

function activate_menu(){
    menu.classList.toggle("menu_active");
    menu_list.classList.toggle("menu_list_active")
    body.classList.toggle("body_active");
    lines[0].classList.toggle("line1");
    lines[1].classList.toggle("hide");
    lines[2].classList.toggle("hide");
    lines[3].classList.toggle("line4");
}

let gardens = document.getElementById("gardens");
let lawn = document.getElementById("lawn");
let planting = document.getElementById("planting");
let cards = document.querySelectorAll(".card");
let buttons = [gardens, lawn, planting];

gardens.addEventListener("click", bluring);
lawn.addEventListener("click", bluring);
planting.addEventListener("click", bluring);

function bluring(event){

    event.target.classList.toggle("orange");

    if(buttons.filter(i => i.classList.contains("orange")).length === buttons.length){
        event.target.classList.toggle("orange");
        return;
    }
    

    switch(event.target.id){
        case "gardens":
            checkAttribute(cards[0]);
            checkAttribute(cards[4]);
            break;
        case "lawn":
            checkAttribute(cards[2]);
            break;
        case "planting":
            checkAttribute(cards[1]);
            checkAttribute(cards[3]);
            checkAttribute(cards[5]);
            break;
    }

    for(i of cards){
        if(!i.hasAttribute("select")){
            i.classList.add("blur");
        } else {
            i.classList.remove("blur");
        }
    }

    if(![...cards].filter(i => i.hasAttribute("select")).length){
        cards.forEach(i => i.classList.remove("blur"));
    }
}

function checkAttribute(elem){
    if(elem.hasAttribute("select")){
        elem.removeAttribute("select");
        elem.classList.toggle("blur");
    } else {
        elem.setAttribute("select", true);
    }
}

let arrows = document.querySelectorAll(".arrow");

arrows.forEach(i => i.addEventListener("click", dropdown))

function dropdown(event){

    let active_arrow = [...arrows].filter(i => i.hasAttribute("active"))[0];
    let space = [event.target];

    if(active_arrow && active_arrow !== event.target) space.push(active_arrow);

    console.log(space);
    
    space.forEach(i => {
        i.classList.toggle("lighten");
        i.classList.toggle("rotate180deg");
        i.parentElement.classList.toggle("show_price");
        i.nextElementSibling.classList.toggle("hidden");
        i.hasAttribute("active") ? i.removeAttribute("active") : i.setAttribute("active", true);
    })

}

let arrow_light = document.querySelector(".arrow_light");
arrow_light.addEventListener("click", dropdown_city);
let dropdown_city_elem = document.querySelector(".dropdown_city");

function dropdown_city(event){
    if(!info.classList.contains("hidden")) info.classList.toggle("hidden");
    dropdown_city_elem.classList.toggle("hidden");
    arrow_light.classList.toggle("rotate180deg");
    arrow_light.classList.toggle("arrow_light_active");
    let parent = event.target.parentElement;
    parent.classList.toggle("delete_shadow");
    parent.classList.toggle("city_option_active");
}


let info = document.querySelector(".info");
let cities = document.querySelectorAll(".city");

cities.forEach(i => i.addEventListener("click", dropdown_city))
cities.forEach(i => i.addEventListener("click", fillGaps));

let _gap1 = document.querySelector(".gap1");
let _gap2 = document.querySelector(".gap2");
let _gap3 = document.querySelector(".gap3");

let gap1 = ["Canandaigua, NY", "New York City", "Yonkers, NY", "Sherrill, NY"];
let gap2 = ["+1 585 393 0001", "+1 212 456 0002", "+1 914 678 0003", "+1 315 908 0004"];
let gap3 = ["151 Charlotte Street", "9 East 91st Street","511 Warburton Ave", "14 WEST Noyes BLVD"]
;
let telephone = document.querySelector(".center");
let woman = document.querySelector(".woman");

let city_selector = document.querySelector(".city-selector");

function fillGaps(event){

    info.classList.toggle("hidden");

    let number;

    switch(event.target.innerHTML){
        case "Canandaigua, NY":
            number = 0;
            break;
        case "New York City":
            number = 1;
            break;
        case "Yonkers, NY":
            number = 2;
            break;
        case "Sherrill, NY":
            number = 3;
            break;
    }

    _gap1.innerHTML = gap1[number];
    _gap2.innerHTML = gap2[number];
    _gap3.innerHTML = gap3[number];
    city_selector.innerHTML = gap1[number];


    woman.classList.toggle("woman_delete");

    telephone.action = `tel:${gap2[number].split(" ").filter(i => i !== " ").join("")}`;
}