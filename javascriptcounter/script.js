const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const countr=document.getElementById("countr");

let count=0;

countr.textContent=count;
increase.addEventListener("click", () =>{
    count++;
    countr.textContent=count;
    countr.style.color="green";
    
});
decrease.addEventListener("click", () =>{
    if(count>-100){
    count--;
    countr.textContent=count;
    countr.style.color="red";
    }
});

