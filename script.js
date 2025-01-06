

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