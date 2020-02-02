//card

const navItemTopAnim = (id)=>{
    console.log(id);
    navItems.forEach(item=>{
        if(item.getAttribute("id")==id){
            console.log(item);
            item.firstElementChild.classList.add("menu_nav_item_border--show");
            item.classList.add("menu_nav_item--selected");
        }else{
            item.firstElementChild.classList.remove("menu_nav_item_border--show");
            item.classList.remove("menu_nav_item--selected");
        }
    });
}

const userMenuItemAnim = (id)=>{
    console.log(id);
    userMenuItems.forEach(item=>{
        if(item.getAttribute("id")==id){
            item.classList.add("menu_user-menu_item--selected");
        }else{
            item.classList.remove("menu_user-menu_item--selected");
        }      
    })
}

//grid
document.querySelectorAll(".card").forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        cardHover(item);
    });
    item.addEventListener("mouseleave",()=>{
        cardUnHover(item);
    });
});

but_down.addEventListener("click",()=>{
    updateListAnimation(listDataB,false);
});
but_up.addEventListener("click",()=>{
    updateListAnimation(listData,true);
});

const updateListAnimation = (data,up)=>{
    let current = 0;
    gridCards.forEach(card=>{

        card.querySelectorAll(".card_cover").forEach(item=>{
            item.classList.add("card-content-animation--part-one");
            (up==false)?item.classList.add("card-content-animation--part-one--back"):console.log("");
        });
        card.querySelectorAll(".card_title").forEach(item=>{
            item.classList.add("card-content-animation--part-two");
            (up==false)?item.classList.add("card-content-animation--part-two--back"):console.log("");
        });
        card.querySelectorAll(".card_bottom").forEach(item=>{
            item.classList.add("card-content-animation--part-two");
            (up==false)?item.classList.add("card-content-animation--part-two--back"):console.log("");
        });

        setTimeout(()=>{
            firstCard.querySelector("#list-size").innerText = data.page + "/2";
            card.setAttribute("id","card"+current);
            card.querySelector(".card_portrait").setAttribute("src",data.cards[current].background);
            card.querySelector(".card_title_text").innerText = data.cards[current].bandName;
            card.querySelector(".card_title_genre-text").innerText = data.cards[current].bandGenre;
            card.querySelector(".card_bottom_date").innerText = data.cards[current].showDate;
            card.querySelector(".card_bottom_portrait").setAttribute("src",data.cards[current].portrait);

            current++;
        },400);

        setTimeout(()=>{
            card.querySelectorAll(".card_cover").forEach(item=>{
                item.classList.remove("card-content-animation--part-one");
                (up==false)?item.classList.remove("card-content-animation--part-one--back"):console.log("");
            });
            card.querySelectorAll(".card_title").forEach(item=>{
                item.classList.remove("card-content-animation--part-two");
                (up==false)?item.classList.remove("card-content-animation--part-two--back"):console.log("");
            });
            card.querySelectorAll(".card_bottom").forEach(item=>{
                item.classList.remove("card-content-animation--part-two");
                (up==false)?item.classList.remove("card-content-animation--part-two--back"):console.log("");
            });
        },800)
    })
}

const cardHover = (card)=>{
    card.querySelector(".card_portrait").classList.add("card_portrait--show");
    card.querySelector(".card_title_text").classList.add("card_title_text--white");
    card.querySelector(".card_title_add").classList.add("card_title_add--white");
    card.querySelector(".card_bottom_portrait").classList.add("card_bottom_portrait--hide");
    card.querySelector(".card_bottom_play").classList.add("card_bottom_play--show");
}
const cardUnHover = (card)=>{
    card.querySelector(".card_portrait").classList.remove("card_portrait--show");
    card.querySelector(".card_title_text").classList.remove("card_title_text--white");
    card.querySelector(".card_title_add").classList.remove("card_title_add--white");
    card.querySelector(".card_bottom_portrait").classList.remove("card_bottom_portrait--hide");
    card.querySelector(".card_bottom_play").classList.remove("card_bottom_play--show");
}

