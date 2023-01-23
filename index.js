function sidebarOn(){
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("x").style.display = "flex";
    document.getElementById("i").style.display = "none";
    // document.body.style.overflow = "hidden";
}

function sidebarOff(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("x").style.display = "none";
    document.getElementById("i").style.display = "flex";
    // document.body.style.overflow = "scroll";
}


function section1on(){
    document.getElementById("section1").style.display = "flex";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
}

function section2on(){
    document.getElementById("section2").style.display = "flex";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
}

function section3on(){
    document.getElementById("section3").style.display = "flex";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section4").style.display = "none";
}

function section4on(){
    document.getElementById("section4").style.display = "flex";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section1").style.display = "none";
}

// if (document.getElementById("section1").style.display = "flex"){
//     document.getElementById("sc_1").style.backgroundColor = "white";
// }

// if (document.getElementById("section2").style.display = "flex"){
//     document.getElementById("sc_2").style.backgroundColor = "blue";
// }

// if (document.getElementById("section3").style.display = "flex"){
//     document.getElementById("sc_3").style.backgroundColor = "blue";
// }

// if (document.getElementById("section4").style.display = "flex"){
//     document.getElementById("sc_4").style.backgroundColor = "blue";
// }