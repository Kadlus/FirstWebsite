let position = 1;
let pictures = document.getElementsByTagName("img");
function nextImage() {
    if(position < pictures.length-1) {
        position++;
        pictures[position].classList.add("gallery-img"); //vložení nové třídy
        pictures[position-1].classList.remove("gallery-img");//odstranění třídy "gallery-img" z obrázku
        pictures[0].src = "assets/images/images_"+ position +".jpg";//cesta k novému obrázku
    }
    else {
        position = 1;
        pictures[1].classList.add("gallery-img");
        pictures[pictures.length-1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/images_1.jpg";
    }
}

function prevImage() {
    if(position === 1) {
        position = pictures.length-1;
        pictures[1].classList.remove("gallery-img");
        pictures[pictures.length-1].classList.add("gallery-img");
        pictures[0].src = "assets/images/images_"+ (pictures.length - 1) +".jpg";
    }
    else {
        position--;
        pictures[position].classList.add("gallery-img");
        pictures[position+1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/images_"+ position +".jpg";
    }
}