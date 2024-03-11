const body=document.querySelector(".list");
const addBtn=document.querySelector(`.btn`);
let user=true;

function add(){
    if(user){
        body.classList.add(`dark`)
        user=false
    }else{
        body.classList.remove(`dark`)
        user=true
    }
}
addBtn.addEventListener("click",add);