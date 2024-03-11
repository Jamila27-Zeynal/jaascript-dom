
const modal1=document.getElementById(`modal1`);
const modal2=document.getElementById(`modal2`);
const modal3=document.getElementById(`modal3`);


const button1=document.getElementById(`button1`);
const button2=document.getElementById(`button2`);
const button3=document.getElementById(`button3`);

const closeButtons=document.getElementsByClassName(`close`);

function openModal(modal){
    modal.style.display=`block`;
}

function closeModal(modal){
    modal.style.display=`none`;
}



button1.addEventListener(`click`,function(){
    openModal(modal1);
})
button2.addEventListener(`click`,function(){
    openModal(modal2);
})
button3.addEventListener(`click`,function(){
    openModal(modal3);
})