//menu

const navItems = document.querySelectorAll(".menu_nav_item");
const userMenuItems = document.querySelectorAll(".menu_user-menu_item");

navItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
        navItemTopAnim(e.target.id);
    })
});
userMenuItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
        userMenuItemAnim(e.target.id);
    })
});


//grid
const firstCard = document.querySelector("#card-one");
const card = document.querySelector("#card");
const gridCards = document.querySelectorAll(".grid .card");
const textb = document.querySelector("#textwrap");
const but_up = document.querySelector("#but_up");
const but_down = document.querySelector("#but_down");
const portrait = document.querySelector("#portrait");

let listData = {page:1,"cards":[
    {
        background:"./img/pic1.jpg",
        portrait:"./img/port1.jpg",
        bandName:"My Chemical Romance",
        bandGenre:"Pop Punk",
        showDate:"10/10/2020"   
    },
    {
        background:"./img/pic2.jpg",
        portrait:"./img/port2.jpg",
        bandName:"Green Day",
        bandGenre:"Punk",
        showDate:"17/10/2020"
    },
    {
        background:"./img/pic3.jpg",
        portrait:"./img/port3.jpg",
        bandName:"Marilyn Manson",
        bandGenre:"Metal",
        showDate:"03/10/2020"
    },
    {
        background:"./img/pic1.jpg",
        portrait:"./img/port1.jpg",
        bandName:"Fall Out Boy",
        bandGenre:"Pop Punk",
        showDate:"10/10/2020"
    },
    {
        background:"./img/pic2.jpg",
        portrait:"./img/port3.jpg",
        bandName:"Coldplay",
        bandGenre:"Pop",
        showDate:"17/10/2020"
    },
    {
        background:"./img/pic3.jpg",
        portrait:"./img/port2.jpg",
        bandName:"Pan!c",
        bandGenre:"Alt Rock",
        showDate:"03/10/2020"
    },
    {
        background:"./img/pic1.jpg",
        portrait:"./img/port1.jpg",
        bandName:"Mago de Oz",
        bandGenre:"F*ck Metal",
        showDate:"03/10/2020"
    }
]}
let listDataB = {page:2,"cards":[
    {
        background:"./img/pic2.jpg",
        portrait:"./img/port2.jpg",
        bandName:"Green Day",
        bandGenre:"Punk",
        showDate:"17/10/2020"
    },
    {
        background:"./img/pic3.jpg",
        portrait:"./img/port1.jpg",
        bandName:"Pan!c",
        bandGenre:"Alt Rock",
        showDate:"03/10/2020"
    },
    {
        background:"./img/pic1.jpg",
        portrait:"./img/port2.jpg",
        bandName:"Marilyn Manson",
        bandGenre:"Metal",
        showDate:"03/10/2020"
    },
    {
        background:"./img/pic2.jpg",
        portrait:"./img/port3.jpg",
        bandName:"Coldplay",
        bandGenre:"Pop",
        showDate:"17/10/2020"
    },
    {
        background:"./img/pic3.jpg",
        portrait:"./img/port1.jpg",
        bandName:"My Chemical Romance",
        bandGenre:"Pop Punk",
        showDate:"10/10/2020"
    },
    {
        background:"./img/pic1.jpg",
        portrait:"./img/port2.jpg",
        bandName:"Mago de Oz",
        bandGenre:"F*ck Metal",
        showDate:"03/10/2020"
    },
    {
        background:"./img/pic2.jpg",
        portrait:"./img/port1.jpg",
        bandName:"Fall Out Boy",
        bandGenre:"Pop Punk",
        showDate:"10/10/2020"
    }
]}

let listSize = gridCards.length;

const updateList = (data)=>{//stands for grid
    let current = 0;
    gridCards.forEach(item=>{
        item.setAttribute("id","card"+current);
        item.querySelector(".card_portrait").setAttribute("src",data.cards[current].background);
        item.querySelector(".card_title_text").innerText = data.cards[current].bandName;
        item.querySelector(".card_title_genre-text").innerText = data.cards[current].bandGenre;
        item.querySelector(".card_bottom_date").innerText = data.cards[current].showDate;
        item.querySelector(".card_bottom_portrait").setAttribute("src",data.cards[current].portrait);
        current++;
    })
}

window.addEventListener("load",()=>{
    updateList(listData);
});