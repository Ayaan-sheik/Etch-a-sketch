

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

let toggleBlack = document.querySelector('.toggleBlack');
let toggleEraser = document.querySelector(".toggleEraser");

let blackbtn = false;
let eraser = false;
toggleBlack.addEventListener('click',function(){
    blackbtn = true;
    eraser = false;
    rainbow =false;
})


toggleEraser.addEventListener('click',function(){
    eraser = true;
    rainbow =false;
    blackbtn = false;
})

let isMouseDown = false;
let k =0;
container.addEventListener("mousedown", () => (isMouseDown = true));
container.addEventListener("mouseup", () => (isMouseDown = false));

container.addEventListener('mouseover',function(event){
    if(blackbtn == true){
        k=1;
    }
    else if(eraser == true){
        k=2;
    }
    else if(rainbow == true){
        k=3;
    } 
    
    
    switch (k){
        case 1:
            if(isMouseDown && event.target.classList.contains("grid")){
                event.target.style.backgroundColor = "black";
            }
            break;
        case 2:
            if(isMouseDown && event.target.classList.contains("grid")){
                event.target.style.backgroundColor = "white";
            }
            break;
        case 3:
            if(isMouseDown && event.target.classList.contains("grid")){
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
            break;
    }
    
})

let toggleRainbow = document.querySelector('.toggleRainbow')

let rainbow =false;
toggleRainbow.addEventListener('click',function(){
    rainbow =true;
    eraser = false;
    blackbtn = false;
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


