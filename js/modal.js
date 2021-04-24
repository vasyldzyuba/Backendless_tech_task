let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function getImgSrc(src) {
    modal.style.display = "block";
    modalImg.src = src;
}