window.onload = function () {
    document.getElementById("genre_response").onclick = genreResponse;
};

function openTab(event, tabNum) {

    var i;
    var tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += " active";
}

function upDate(previewPic){
   
    var image = document.getElementById("image");
    image.style.background = "url(" + previewPic.src + ") #8e68ff";

    image.innerHTML = previewPic.alt;


}

function unDo(){
    
    var image = document.getElementById("image");
    image.style.background = "#8e68ff";

    image.innerHTML = "Hover over an image below to display here.";
   
    
}
function upDa(previewPic){
   
    var image = document.getElementById("image2");
    image.style.background = "url(" + previewPic.src + ") #8e68ff";

    image.innerHTML = previewPic.alt;


}

function unD(){
    
    var image = document.getElementById("image2");
    image.style.background = "#8e68ff";

    image.innerHTML = "Hover over an image below to display here.";
   
    
}
function upDat(previewPic){
   
    var image = document.getElementById("image3");
    image.style.background = "url(" + previewPic.src + ") #8e68ff";

    image.innerHTML = previewPic.alt;


}

function unDu(){
    
    var image = document.getElementById("image3");
    image.style.background = "#8e68ff";

    image.innerHTML = "Hover over an image below to display here.";
   
    
}