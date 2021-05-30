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

//laddning av localstorage
document.body.style.backgroundColor = localStorage.getItem("jscolorbg");
//document.documentElement.style.setProperty("--color","jscolor");
//document.documentElement.style.setProperty("--colortxt","jscolortxt");
let btn1 = document.getElementById('LightButton');
btn1.style.display='inline';
let btn2 = document.getElementById('DarkButton');
btn2.style.display='inline';



function DarkMode() {
    console.log("klickat Dark")

    document.body.style.backgroundColor = "#282828";
    document.documentElement.style.setProperty("--color","#121212");
    document.documentElement.style.setProperty("--colortxt","white");

    //sparar färg i localstorage
    localStorage.setItem("jscolorbg", "#282828");
    //localStorage.setItem("jscolor", "#121212");
    //localStorage.setItem("jscolortxt", "white");
}

function LightMode() {
    console.log("klickat Light")

    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty("--color","#e6add8");
    document.documentElement.style.setProperty("--colortxt","black");

    //sparar färg i localstorage
    localStorage.setItem("jscolorbg", "#white");
    //localStorage.setItem("jscolor", "#e6add8");
    //localStorage.setItem("jscolortxt", "white");
}
