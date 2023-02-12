const template = document.createElement("template");

template.innerHTML = `
    <div id="emblemContainer">
        <div id="emblemTag">S</div>
        <div id="menuBar">
            <a href="index.html" class="menuButton" id="main">Main</a>
            <a href="about-me.html" class="menuButton" id="about-me">About Me</a>
            <a href="commision-info.html" class="menuButton" id="commision-info">Commision Info</a>
            <a href="gallery.html" class="menuButton" id="gallery">Gallery</a>
        </div>
        <div id="emblemTop"></div>
        <div id="emblemBottom"></div>
    </div>
    <div id="fixedContainer">
        <div id="header">
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>
            <div class="lineLeft"></div>
            <div class="lineRight"></div>  
        </div>
    </div>
    <div id="fixedBackgroundLines">
        <div class="backgroundLine">&nbsp;</div>
        <div class="backgroundLine">&nbsp;</div>
        <div class="backgroundLine">&nbsp;</div>
    </div>`;
    document.getElementById("head").appendChild(template.content);
    document.getElementById(document.getElementById("metadata").content).id = "current";
    