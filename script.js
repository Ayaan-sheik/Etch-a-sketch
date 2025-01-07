

const body = document.querySelector("body");
const container = document.querySelector(".container");


// creating the grid 

function CreateGrid(size){
    container.innerHTML = "";

    for(let i =0;i<size;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j =0;j<size;j++){
            const grid = document.createElement("div");
            grid.setAttribute("style","background-color:white; border:1px solid black;")
            row.appendChild(grid);
            grid.classList.add("grid");
        }   

        container.appendChild(row);
    }
}




CreateGrid(10);

let color;

let toggleBlack = document.querySelector('.toggleBlack');
let toggleEraser = document.querySelector(".toggleEraser");
toggleBlack.addEventListener('click',function(){
    color = "black";
})

toggleEraser.addEventListener('click',function(){
    color = "white";
})

container.addEventListener('mouseover',function(event){
    if(event.target.classList.contains("grid")){
        event.target.style.backgroundColor = color;
    }
})

let gridlines = document.querySelector(".toggleGridlines");

gridlines.addEventListener('click',function(){
    container.innerHTML = "";

    for(let i =0;i<size;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j =0;j<size;j++){
            const grid = document.createElement("div");
            grid.setAttribute("style","background-color:white;")
            row.appendChild(grid);
            grid.classList.add("grid");
        }   

        container.appendChild(row);
    }
}
)
let slider = document.querySelector("#slider");
let sliderValue = document.querySelector('#label');
slider.addEventListener('input',function(event){
    size = event.target.value;
    CreateGrid(size);
    sliderValue.innerHTML=`Grid Size: ${size} * ${size} `
})
let size =15;

let clear = document.querySelector(".clear")

clear.addEventListener("click",function(){
    CreateGrid(size);
})


