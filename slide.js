async function onLoad () {
    let div = document.getElementById("comms");
    let dots = document.createElement("div");
    dots.setAttribute("id", "comm-dots");
    dots.setAttribute("class", "dot-container")
    await fetch("pictures.json")
        .then(res => res.json())
        .then(json => loadPics(json.picture, div, dots));

    let temp = document.createElement("a");
    temp.setAttribute("class", "prev");
    temp.setAttribute("onclick", "plusSlides(-1)");
    temp.innerHTML = "&#10094";
    div.appendChild(temp);
    temp = document.createElement("a");
    temp.setAttribute("class", "next");
    temp.setAttribute("onclick", "plusSlides(1)");
    temp.innerHTML = "&#10095";
    div.appendChild(temp);
    div.appendChild(dots);
    showSlides(1);
}


let slideIndex = 1;
onLoad();
async function loadPics(json, doc, dots) {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        if (json[i].type === "com") {
            createPic(doc, i+1, json.length, "comms", json[i].name, json[i].fileType, json[i].artist);
        } else if (json[i].type === "own") {
            createPic(doc, i+1, json.length, "own", json[i].name, json[i].fileType, json[i].artist);
        } else {
            return;
        }
        let dot = document.createElement("span");
        dot.setAttribute("class", "dot");
        dot.setAttribute("onclick", "currentSlide(" + (i+1) + ")");
        dots.appendChild(dot);
    }
}

async function createPic(doc, num, max, type, name, fileType, author) {
    let div = document.createElement("div");
    div.setAttribute("class", "mySlides fade")
    let tempDoc = document.createElement("div");
    tempDoc.innerHTML = num + " / " + max;
    tempDoc.setAttribute("class", "numbertext")
    div.appendChild(tempDoc);
    tempDoc = document.createElement("img");
    tempDoc.setAttribute("class", "img");
    tempDoc.setAttribute("src", "pictures/" + type + "/" + name + "." + fileType)
    div.appendChild(tempDoc);
    tempDoc = document.createElement("div");
    tempDoc.setAttribute("class", "text");
    tempDoc.innerHTML = "Drawn by " + author;
    div.appendChild(tempDoc);
    doc.appendChild(div);
}

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}