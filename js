const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const b10 = document.querySelector("#b10");
const bg = document.querySelector (".bg");
const pet = document.querySelector ("#pet");


//walking//
b1.addEventListener("click", action);
function action(a) {   
b1.addEventListener("click", action);
a.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petwalk");
b1.removeEventListener("click", action);
b1.onclick = saction;
} 
function saction()
{  
bg.classList.remove ("mbg");
b1.addEventListener ("click", action);
pet.classList.remove ("action");
pet.removeAttribute ("class");
//pet.classList.add ("idle") //
}

//jump//
b2.addEventListener("click", action2);
function action2(a) {   
b2.addEventListener("click", action2);
a.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petjump");
b2.removeEventListener("click", action2);
b2.onclick = saction;
} 
function saction()
{  
bg.classList.remove ("mbg");
b2.addEventListener ("click", action2);
pet.classList.remove ("action");
pet.removeAttribute ("class");
//pet.classList.add ("idle") //
}



//eyesclose//



b3.addEventListener("click", action3);
function action3(a) {   
b3.addEventListener("click", action3);
a.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petclose");
b3.removeEventListener("click", action3);
b3.onclick = saction3;
} 
function saction3()
{  
bg.classList.remove ("mbg");
b3.addEventListener ("click", action3);
pet.classList.remove ("action");
pet.classList.remove ("action2");
pet.removeAttribute ("class");
//pet.classList.add ("idle") //
}


//movetail//

b4.addEventListener("click", action4);
function action4(a) {   
b4.addEventListener("click", action4);
a.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("pettail");
b4.removeEventListener("click", action2);
b4.onclick = saction;
} 
function saction()
{  
bg.classList.remove ("mbg");
b4.addEventListener ("click", action4);
pet.classList.remove ("action");
pet.classList.remove ("action2");
pet.classList.remove ("action3");
pet.removeAttribute ("class");
//pet.classList.add ("idle") //
}
