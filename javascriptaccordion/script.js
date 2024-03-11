const  accordionItem=document.querySelectorAll(".item");
accordionItem.forEach(item => {
const title=item.querySelector(".title");
const content=item.querySelector(".content");
title.addEventListener(`click`,() => {
item.classList(`active`);
})
});