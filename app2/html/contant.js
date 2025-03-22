var mangaLib = JSON.parse(manga);

mangaLib.forEach(element => {
    let div = document.createElement('div');
    // let p = document.getElementById("manga_list");

    div.className = "content_block";
    div.innerHTML = "<a href=\"" + element.src + "\" class=\"title_a\" style=\"margin: auto;\"><img src=\""+ element.img + 
    "\" style=\"height: 300px\"><font class=\"title_name\">" + element.title + "</p></a>";
    
    document.getElementById('manga_list').appendChild(div);
});