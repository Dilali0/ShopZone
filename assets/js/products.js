let dropdownbtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input"); 
let listitems = document.querySelectorAll(".dropdown-list-items")

// show dropdown list on click on dropdown btn
dropdownbtn.onclick = function(){
    // rotat arrow icon
    if(list.classList.contains("show")){
        icon.style.rotate = "0deg"
    }else{
        icon.style.rotate = "-180deg"; 
    }
    // show the list of catégorie
    list.classList.toggle(`show`);

}; 
// hide drop list when clicked in outside dropdown btn
window.onclick = function(e){
    if(
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon"
    ) {
        list.classList.remove(`show`);
        icon.style.rotate = "0deg";
    }
}

for(items of listitems){
    items.onclick = function(e){
        // change dropdown btn text on click on selected lest items
        span.innerText = e.target.innerText;
    };
}