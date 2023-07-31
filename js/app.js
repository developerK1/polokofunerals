//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );

	let thisYear = new Date();
	let newYear = thisYear.getFullYear();

	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());
/* =============================================================== */
/* ========================= HOVER POP FORWARDS ============================= */
/* =============================================================== */
const popForward  = checkUp(document.querySelectorAll(".pop-forwards"));

if(popForward !== null){
  popForward.forEach((item) => {
    item.addEventListener("mouseover", function(){
      item.classList.add("y-zindex");
    });

    item.addEventListener("mouseout", function(){
      item.classList.remove("y-zindex");
    })
  });
}


/* =============================================================== */
/* ========================= MODALS COSTUMIZED ============================= */
/* =============================================================== */
const formBtn = document.querySelectorAll("form button")
const btns = document.querySelectorAll("main button");
const menuLinks = document.querySelectorAll(".menu-links")



//ATTACHING EVENTS
formBtn.forEach(btn => btn.addEventListener("click", (e)=> {
  e.preventDefault();
  showModalFunc("func-modal");
}))
menuLinks.forEach(link => link.addEventListener("click", (e)=>showModalFunc("func-modal")));
btns.forEach(btn => btn.addEventListener("click", (e)=>showModalFunc("func-modal")));


//DISPLAY MODAL FUNC
function showModalFunc(id){
  document.querySelector(`#${id}`).classList.add("force-view")
}


//CLOSE MOFAL FUNC
function closeModal(id){
  document.querySelector(`#${id}`).classList.remove("force-view")
}
/* =============================================================== */
/* ========================= Read More  ============================= */
/* =============================================================== */
let statusShowRead = false;

if(checkSingle(document.querySelector("#about-us button")) != undefined){
  let content = document.querySelector("#about-us aside .content");

  document.querySelector("#about-us button").addEventListener("click", (e)=>{
    if(statusShowRead === false){
      content.classList.add("opening-modal");
      e.target.textContent = "Read Less";

      statusShowRead = true;
    }else if (statusShowRead === true) {
      content.classList.remove("opening-modal");
      e.target.textContent = "Read More";

      statusShowRead = false;
    }
  })
}
/* =============================================================== */
/* ========================= SHARE BUTTON ============================= */
/* =============================================================== */

// const shareBtn = document.querySelector("footer button a");
// const shareLink = "https://rebangwefunerals.co.za";
// shareBtn.href = `https://www.facebook.com/share.php?u=${shareLink}`;


/* =============================================================== */
/* ========================= HAMBURGER ============================= */
/* =============================================================== */
const hamburger = document.querySelector("#hamburger");
const main = document.querySelector("main");
const hamburgerLines = Array.from(document.querySelectorAll("#hamburger .lines"));
const navLinks = document.querySelector("header article .flexy-cen ul")
let hamburgerStatus = false;


hamburger.addEventListener("click", function(){
  if(!hamburgerStatus){
    navLinks.classList.add("show-ul");
    setTimeout(()=> navLinks.classList.add("open-hamburder"), 500);

    hamburgerLines[0].classList.add("upperline");
    hamburgerLines[1].classList.add("middleline");
    hamburgerLines[2].classList.add("lowerline");

    main.style.display = "none";

    hamburgerStatus = true;

  }else if(hamburgerStatus){
    setTimeout(()=> navLinks.classList.remove("open-hamburder"), 500);

    hamburgerLines[0].classList.remove("upperline");
    hamburgerLines[1].classList.remove("middleline");
    hamburgerLines[2].classList.remove("lowerline");

    navLinks.classList.remove("show-ul");

    main.style.display = "block";
    hamburgerStatus = false;

  }
})
/* =============================================================== */
/* ========================= CHECK IF DOCUEMNET HAS AN ITEM ============================= */
/* =============================================================== */
function checkUp(item){

 if(item.length === 0) {
   return null;
 }
   return item;
}

function checkSingle(elem){
  if(elem !== null){
    return elem;
  }
}
