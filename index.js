
/* 16*16 test
const gridContainer = document.querySelector(".grid-container");

for (let i=0; i<256; i++) {
    const item = document.createElement("div");
    item.className = "item";
    gridContainer.appendChild(item);
}
*/

const gridContainer = document.querySelector(".grid-container");

function createGrid(size) {
    gridContainer.innerHTML="";

    const itemSize = 960 / size;
    for (let i=0; i< size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("item");
        gridItem.style.width = itemSize + "px";
        gridItem.style.height = itemSize + "px";
        gridContainer.appendChild(gridItem);
    }

    //mouserover effect
    const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'black';
})
});

}

createGrid(16)





//button click
const button = document.querySelector("button")

button.addEventListener("click", function(){
    let sizeRequest = prompt("How many rows do you want? The number should be integer between 0 and 100");
    sizeRequest = parseInt(sizeRequest);

    if (sizeRequest && sizeRequest>0 && sizeRequest<=100) {
        createGrid(sizeRequest);
    } else {
        alert("the number should be integer between 0 and 100")
    }

})