async function onLoad () {
    let com = document.getElementById("com");
    let own = document.getElementById("own");
    let commsPics = [];
    let ownPics = [];

    await fetch("pictures.json")
        .then(res => res.json())
        .then(json => loadPics(json.picture, commsPics, ownPics));


    await createDiv(com, commsPics);
    await createDiv(own, ownPics);

    showSlides(1, "com");
    showSlides(1, "own");
}


let slideIndexCom = 1;
let slideIndexOwn = 1;
onLoad();
async function loadPics(json, com, own) { 

    for (let i = 0; i < json.length; i++) {
        if (json[i].type === "com") {
            com.push(json[i]);
        } else if (json[i].type === "own") {
            own.push(json[i]);
        }
    }
}

async function createDiv(n, nPics) {

    let dots = document.createElement("div");
    dots.setAttribute("id", nPics[0].type + "-dots");
    dots.setAttribute("class", "dot-container")

    for (let i = 0; i < nPics.length; i++) {
        createPics(nPics[i].type, i+1, nPics.length, nPics[i].name, nPics[i].fileType, nPics[i].artist, n);
        let dot = document.createElement("span");
        dot.setAttribute("class", "dot-" + nPics[i].type);
        dot.setAttribute("onclick", "currentSlide(" + (i+1) + ",'" + nPics[i].type + "')");
        dots.appendChild(dot);
    }

    n.appendChild(dots);

    let temp = document.createElement("a");
    temp.setAttribute("class", "prev");
    temp.setAttribute("onclick", "plusSlides(-1,'" + nPics[0].type + "')");
    console.log(nPics[0].type);
    temp.innerHTML = "&#10094";
    n.appendChild(temp);
    temp = document.createElement("a");
    temp.setAttribute("class", "next");
    temp.setAttribute("onclick", "plusSlides(1,'" + nPics[0].type + "')");
    temp.innerHTML = "&#10095";
    n.appendChild(temp);
    n.appendChild(dots);
}

async function createPics(type, num, max, name, fileType, artist, doc) {
    let div = document.createElement("div");
    div.setAttribute("class", "mySlides-" + type + " fade");
    let tempDoc = document.createElement("div");
    tempDoc.innerHTML = num + " / " + max;
    tempDoc.setAttribute("class", "numbertext");
    div.appendChild(tempDoc);
    tempDoc = document.createElement("img");
    tempDoc.setAttribute("class", "img");
    tempDoc.setAttribute("src", "pictures/" + type + "/" + name + "." + fileType);
    div.appendChild(tempDoc);
    tempDoc = document.createElement("div");
    tempDoc.setAttribute("class", "text");
    tempDoc.innerHTML = "Drawn by " + artist;
    div.appendChild(tempDoc);
    doc.appendChild(div);
}

function plusSlides(n, type) {
    if (type === "com") showSlides(slideIndexCom += n, type);
    if (type === "own") showSlides(slideIndexOwn += n, type);
}

function currentSlide(n, type) {
    if (type === "com") showSlides(slideIndexCom = n, type);
    if (type === "own") showSlides(slideIndexOwn = n, type);
}

function showSlides(n, type) {
    var i;
    let slides = document.getElementsByClassName("mySlides-" + type);
    let dots = document.getElementsByClassName("dot-" + type);

    if (n > slides.length && type === "com") {
        slideIndexCom = 1;
    } else if (n > slides.length && type === "own") {
        slideIndexOwn = 1;
    }
    if (n < 1 && type === "com") {slideIndexCom = slides.length;
    } else if (n < 1 && type === "own") {slideIndexOwn = slides.length;}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (type === "com") {
        slides[slideIndexCom-1].style.display = "flex";
        dots[slideIndexCom-1].className += " active";
    } else if (type === "own") {
        slides[slideIndexOwn-1].style.display = "flex";
        dots[slideIndexOwn-1].className += " active";
    }
}