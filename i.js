let bg = document.querySelector('.bg');
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.terrain');
let text = document.querySelector('.text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log(value);

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
} )

let sideB = document.querySelector('.sidebar')
let menuState = 0
document.querySelector('.sidebarToggle').onclick= function(){
    if (menuState === 0){
      menuState = 1
      document.querySelector('.arroww').style.transition = "0.5s"
      document.querySelector('.arroww').style.opacity = '0'
      sideB.style.opacity = '1';
      sideB.style.transform = 'translatey(300px);';
      document.querySelector('.sidebarToggle').style.transform = "rotate(90deg)"
      document.querySelector('main').style.marginTop = "450px";
      document.querySelector('main').style.transition = "0.5s";
    } else {menuState = 0;
      document.querySelector('.arroww').style.opacity = '1';
      sideB.style.transform = "translatey(-300px);";
      sideB.style.opacity = '0';
      document.querySelector('main').style.marginTop = "";
      document.querySelector('.sidebarToggle').style.transform = "rotate(0deg)";}
};

window.onscroll = scrollChange
function scrollChange (){
    if (window.pageYOffset > 400) {
    document.querySelector('h1').style.transform = 'translateY(-0px)';}
    else {document.querySelector('h1').style.transform = "";}
    }
    
    function numOfdots (num) {
    for (let i = 0; i < num; i++) {
        let questionTitle = document.createElement("p")
        questionTitle.classList.add("animazione");
        questionTitle.innerHTML = `<h1>⦿</h1>`
        console.log('asda');
        document.querySelector(".container").appendChild(questionTitle);
        document.querySelector(".containerL").appendChild(questionTitle.cloneNode(true));
    }
}
numOfdots(500)

let m = document.querySelectorAll('.animazione')
m.forEach(element => element.style.transition = '10s');
for (let i = 0; i < m.length; i++) {
    if (i % 2 == 0){
        m[i].style.opacity = '0'
    }
}
window.setInterval(function(){
let randNum =  (Math.floor(Math.random() * m.length));
m[randNum].style.opacity = '0';
}, 100);
let intervalId = window.setInterval(function(){
let randNum =  (Math.floor(Math.random() * m.length) +3) *2;
if (m[randNum] !== undefined){
m[randNum].style.opacity = '1';}
}, 100);

let x = document.querySelectorAll(".del");
x.forEach(element => {element.addEventListener("click", () => element.parentNode.parentNode.remove())});

let day = new Date()
document.querySelector(".Yeardate").innerText = day.getFullYear();
