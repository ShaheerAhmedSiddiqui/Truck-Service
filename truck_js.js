function dashboard() {
    var relatedElements = document.getElementById('myDiv');
    relatedElements.style.display = "block";
}

function popClose() {
    var relatedElements = document.getElementById('myDiv');
    relatedElements.style.display = "none";
}
function popupClose() {
    var relatedElements = document.getElementById('theShow');
    relatedElements.style.display = "none";
}

function slideBar() {
    var relatedElements = document.getElementById('focus');
    relatedElements.style.display = "block";
}
function dashClose() {
    var relatedElements = document.getElementById('focus');

    relatedElements.style.display = "none";

    var relatedElements = document.getElementById('myDiv');

    relatedElements.style.display = "none";

    var relatedElements = document.getElementById('theShow');

    relatedElements.style.display = "none";

    var relatedElements = document.getElementById('srvChange');

    relatedElements.style.display = "none";

    var relatedElements = document.getElementById('crgChange');

    relatedElements.style.display = "none";


    var relatedElements = document.getElementById('adding');

    relatedElements.style.display = "none";
}

function banner() {
    var relatedElements = document.getElementById('theShow');

    relatedElements.style.display = "block";
}

function srvFunc() {
    var relatedElements = document.getElementById('srvChange');

    relatedElements.style.display = "block";
}
function srvClose() {
    var relatedElements = document.getElementById('srvChange');

    relatedElements.style.display = "none";
}

function crgFunc() {
    var relatedElements = document.getElementById('crgChange');

    relatedElements.style.display = "block";
}
function crgClose() {
    var relatedElements = document.getElementById('crgChange');

    relatedElements.style.display = "none";
}

function addFunc() {
    var relatedElements = document.getElementById('adding');

    relatedElements.style.display = "block";
}
function addClose() {
    var relatedElements = document.getElementById('adding');

    relatedElements.style.display = "none";
}


// dashbord js//
document.querySelector("#myFile").addEventListener("change", function () {
    console.log("ok1")
    const reader = new FileReader();
    reader.addEventListener("load", () => {

        localStorage.setItem("key", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.getElementById('ldImg');
    document.getElementById("about").innerHTML = localStorage.getItem('plan');
    img.src = localStorage.getItem("key") ?? "./truck-img/truck.png";
    const recentImageDataUrl = localStorage.getItem("recent-images");
    if (recentImageDataUrl) {
        document.querySelector("#forPanel").setAttribute("src", recentImageDataUrl);
    }
});

function myFun() {
    var img = document.getElementById('ldImg');
    img.src = localStorage.getItem("key") ?? "./truck-img/truck.png";
}



// forbanner


document.querySelector("#myInp").addEventListener("change", function () {
    console.log("ok1")
    const reader = new FileReader();
    reader.addEventListener("load", () => {

        localStorage.setItem("let", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.getElementById('forGet');
    img.src = localStorage.getItem("let") ?? "./truck-img/istock.jpg";
    const recentImageDataUrl = localStorage.getItem("recent-images");
    if (recentImageDataUrl) {
        document.querySelector("#forGet").setAttribute("src", recentImageDataUrl);
    }
});

function getBanner() {
    var img = document.getElementById('forGet');
    img.src = localStorage.getItem("let") ?? "./truck-img/truck.png";
}


function letChange() {
    var chng = document.getElementById("chgText").value;
    localStorage.setItem('plan', chng);
    document.getElementById("about").innerHTML = localStorage.getItem('plan');

}

function lgtChng() {
    var chng = document.getElementById("lgtText").value;
    localStorage.setItem('l-chng', chng);
    document.getElementById("l-text").innerHTML = localStorage.getItem('l-chng');

}



//for Service
document.querySelector("#srvInp").addEventListener("change", function () {
    console.log("ok1")
    const reader = new FileReader();
    reader.addEventListener("load", () => {

        localStorage.setItem("onn", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.getElementById('srvImg');
    img.src = localStorage.getItem("onn") ?? "./truck-img/civil-engineering.jpg";
    document.getElementById("l-text").innerHTML = localStorage.getItem('l-chng');
    document.getElementById("forAddp").innerHTML = localStorage.getItem("sblog");
    document.getElementById("forAddh3").innerHTML = localStorage.getItem("blog");
    const recentImageDataUrl = localStorage.getItem("recent-images");
    if (recentImageDataUrl) {
        document.querySelector("#srvImg").setAttribute("src", recentImageDataUrl);
    }
});

function theChange() {
    var img = document.getElementById('srvImg');
    img.src = localStorage.getItem("onn") ?? "./truck-img/civil-engineering.jpg";
}


//fro cargo

document.querySelector("#crgInp").addEventListener("change", function () {
    console.log("ok1")
    const reader = new FileReader();
    reader.addEventListener("load", () => {

        localStorage.setItem("for", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.getElementById('crgImg');
    img.src = localStorage.getItem("for") ?? "./truck-img/cargo.jpg";
    const recentImageDataUrl = localStorage.getItem("recent-images");
    if (recentImageDataUrl) {
        document.querySelector("#crgImg").setAttribute("src", recentImageDataUrl);
    }
});

function theChange() {
    var img = document.getElementById('crgImg');
    img.src = localStorage.getItem("for") ?? "./truck-img/cargo.jpg";
}


// addblog

document.querySelector("#addInp").addEventListener("change", function () {
    console.log("ok1")
    const reader = new FileReader();
    reader.addEventListener("load", () => {

        localStorage.setItem("add", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.getElementById('forAddimg');
    img.src = localStorage.getItem("add") ?? "./truck-img/wood.jpg";
    const recentImageDataUrl = localStorage.getItem("recent-images");
    if (recentImageDataUrl) {
        document.querySelector("#forAddimg").setAttribute("src", recentImageDataUrl);
    }
});

function letAdd() {
    var img = document.getElementById('forAddimg');
    img.src = localStorage.getItem("add") ?? "./truck-img/wood.jpg";
}



var blog_hd = document.getElementById("forAddh3");
var blog_p = document.getElementById("forAddp");
function addHd() {
    var add = document.getElementById("add-hd").value;
    localStorage.setItem("blog", add)
    document.getElementById("forAddh3").innerHTML = localStorage.getItem("blog");

    var save = document.getElementById("add-p").value;
    localStorage.setItem("sblog", save)
    document.getElementById("forAddp").innerHTML = localStorage.getItem("sblog");

}


// function addPg(){
//     var save = document.getElementById("add-p").value;
//     localStorage.setItem("sblog" , save)
//     document.getElementById("forAddp").innerHTML=localStorage.getItem("sblog");
// }



//addblog//


// var newCell = tb_row.insertCell();
// var newText = document.createTextNode(input);
// newCell.appendChild(newText);


function toAdd() {
    var add_img = document.getElementById("forAddimg");
    var add_h3 = document.getElementById("forAddh3");
    var add_p = document.getElementById('forAddp');
    fav_items = [add_img, add_h3, add_p]
    var cart_div = document.getElementById("clone");
    var newCell = cart_div.insertCell();
    newCell.appendChild(fav_items[2]);
    document.getElementById("add-hd").value ="";
    document.getElementById("add-p").value ="";
}
var ul = document.createElement("ul");
function getBlog() {
    var apnLi = "<li> <div class=' favourite b-images3 blog-3 d-flex bg-white mb-3' id='blg-loop'><img src='' id='forAddimg' class='img-fluid w-25' alt=''> <div class='b-report w-75 bg-white p-4'> <h3 class='fs-5' id='forAddh3'></h3> <p class='m-0' id='forAddp'></p> </div> </div> </li>"
}