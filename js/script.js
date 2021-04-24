let container = document.getElementsByClassName("container")[0];
let title = document.getElementsByClassName("title")[0];
let logo = document.getElementsByClassName("logo")[0];
let nav = document.getElementsByClassName("nav")[0];
let lightBtn = document.getElementById("light-btn");
let darkBtn = document.getElementById("dark-btn");
let backendBtn = document.getElementById("backend-btn");
const select = document.querySelector('#selected').getElementsByTagName('option');
let site = document.getElementsByClassName("site")[0];
let icons = document.getElementsByClassName("ic");
let footer = document.getElementById("footer");


document.checkForm.onclick = () => {
    let checked = document.querySelector('input[name=check]:checked').value;
    container.style.backgroundColor = checked;
    if (checked == "#c1f6f6") {
        logo.style.color = "black";
        title.style.color = "black";
        nav.style.backgroundColor = "#5e7373";
        footer.style.backgroundColor = "#5e7373";
        site.style.color = "black";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "black";
        }
    }
    if (checked == "#474545") {
        logo.style.color = "#b7b5b5";
        title.style.color = "#b7b5b5";
        nav.style.backgroundColor = "#272727";
        site.style.color = "#b7b5b5";
        footer.style.backgroundColor = "#272727";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "#b7b5b5";
        }
    }
    if (checked == "#989696") {
        logo.style.color = "white";
        title.style.color = "white";
        nav.style.backgroundColor = "#545454";
        footer.style.backgroundColor = "#545454";
        site.style.color = "white";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "white";
        }
    }
}

lightBtn.onclick = () => {
    logo.style.color = "black";
    title.style.color = "black";
    nav.style.backgroundColor = "#5e7373";
    container.style.backgroundColor = "#c1f6f6";
    site.style.color = "black";
    footer.style.backgroundColor = "#5e7373";
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.color = "black";
    }
}

darkBtn.onclick = () => {
    logo.style.color = "#b7b5b5";
    title.style.color = "#b7b5b5";
    nav.style.backgroundColor = "#272727";
    container.style.backgroundColor = "#474545";
    site.style.color = "#b7b5b5";
    footer.style.backgroundColor = "#272727";
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.color = "#b7b5b5";
    }
}

backendBtn.onclick = () => {
    logo.style.color = "white";
    title.style.color = "white";
    nav.style.backgroundColor = "#545454";
    container.style.backgroundColor = "#989696";
    site.style.color = "white";
    footer.style.backgroundColor = "#545454";
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.color = "white";
    }
}

function color(val) {
    if (val == "light") {
        logo.style.color = "black";
        title.style.color = "black";
        footer.style.backgroundColor = "#5e7373";
        nav.style.backgroundColor = "#5e7373";
        container.style.backgroundColor = "#c1f6f6";
        site.style.color = "black";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "black";
        }
    }
    if (val == "dark") {
        logo.style.color = "#b7b5b5";
        title.style.color = "#b7b5b5";
        nav.style.backgroundColor = "#272727";
        container.style.backgroundColor = "#474545";
        site.style.color = "#b7b5b5";
        footer.style.backgroundColor = "#272727";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "#b7b5b5";
        }
    }
    if (val == "backendless") {
        logo.style.color = "white";
        title.style.color = "white";
        nav.style.backgroundColor = "#545454";
        container.style.backgroundColor = "#989696";
        site.style.color = "white";
        footer.style.backgroundColor = "#545454";
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = "white";
        }
    }
}
