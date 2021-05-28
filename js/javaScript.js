let back = document.getElementById("back");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    back.style.top = value * 0.5 + 'px';
    mountain.style.top = value * 0.75 + 'px';
    road.style.top = value * 0.25 + 'px';
    text.style.top = value * 1 + 'px';
})

document.body.style.backgroundColor = localStorage.getItem("color");

function DarkMode() {
    console.log("klickat Dark")
    document.body.style.backgroundColor = "black";
    localStorage.setItem("color", "black");
    }

function LightMode() {
    console.log("klickat Light")
    document.body.style.backgroundColor = "white";
    localStorage.setItem("color", "white");
    }

