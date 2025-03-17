var mangaLib = JSON.parse(manga);

let ButtonHeader = document.getElementsByName("menu");
let i = 1, Fmenu;

// console.log(i);

ButtonHeader.forEach(element => {
    element.addEventListener('mouseover', function () {
        element.style.backgroundColor = "rgb(44, 44, 44)";
        console.log(element.id);
        document.getElementById("Fmenu" + element.id).style.fontFamily = "cursive";
    });
    element.addEventListener('mouseout', function () {
        element.style.backgroundColor = "rgb(31, 31, 31)";
        document.getElementById("Fmenu" + element.id).style.fontFamily = "system-ui";
    });
    
});


// function MEvent(element)
// {
//     // console.log("element.name");
// }

// item.addEventListener("mouseover", func, false);

function OverAnimation(event)
{
    console.log(event.target);
}

function open_input(box, x, l) {
    box.className = "open_input";
    x.className = "_x";
    l.className = "display_n";
    setTimeout(()=> document.getElementById(box.id).style.width = "300px" , 100);
    document.getElementById(box.id).focus();
}

function close_input(box, x, l) {
    box.className = "display_n";
    document.getElementById(box.id).style.width = "0px"
    x.className = "display_n";
    l.className = "lupa";
    document.getElementsByClassName("ss_result")[0].style.display = "none";
}

function search(input_manga, title, img, src) {
    var count = true;
    let e;
    _name = document.getElementById(input_manga.id).value;
    _name = _name.toLowerCase();
    document.getElementsByClassName("ss_result")[0].style.display = "none";
    
    mangaLib.forEach(element => {
        e = element.title.toLowerCase();
        if ((e.indexOf(_name) == 0) && count && _name) {
            console.log(element.title)
            count = false;
            console.log(document.getElementById(title.id).innerHTML);
            
            document.getElementById(title.id).innerHTML = element.title;
            document.getElementById(src.id).href = element.src;
            document.getElementById(img.id).src = element.img;
            document.getElementsByClassName("ss_result")[0].style.display = "flex";
        }
    });
}
