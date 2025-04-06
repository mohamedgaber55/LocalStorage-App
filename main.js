// select all Elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {

    span.addEventListener("click", (e) => {

        if(e.target.classList.contains("check-item")){
            checkItem();
        }

        if(e.target.classList.contains("add-item")){
            addItem();
        }

        if(e.target.classList.contains("delete-item")){
            deleteItem();
        }

        if(e.target.classList.contains("show-item")){
            showItem();
        }

    });

});

function emptyInput(){

    if(theInput.value === ''){
        results.innerHTML = `The <span>input</span> can't be empty`;
    }

}

function checkItem(){

    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            results.innerHTML = `An Item With The Name <span>${theInput.value}</span> Was Found In Your LocalStorage!`;
        }else{
            results.innerHTML = `No Item With The Name <span>${theInput.value}</span> Was Found In Your LocalStorage!`;
        }
    }else{
        emptyInput();
    }
    
}

function addItem(){
    if(theInput.value !== ''){
        localStorage.setItem(theInput.value, "added");
        results.innerHTML = `An Item With The Name <span>${theInput.value}</span> Was Added From Your LocalStorage!`


    }else{
        emptyInput();
    }
}

function deleteItem(){
    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value);
            results.innerHTML = `An Item With The Name <span>${theInput.value}</span> Was Deleted From Your LocalStorage!`

        }
        else{
            results.innerHTML = `No Items With The Name <span>${theInput.value}</span>`;
        }
    }
    else{
        emptyInput();
    }
}

function showItem(){
    results.innerHTML = '';
    results.innerHTML = 'Here Are The Items That Were Found: ';

    if(localStorage.length){
        for(let [key, value] of Object.entries(localStorage)){
            results.innerHTML += `<span class = "key">${key} </span>`
        }
    }
    else{
        emptyInput();
    }
}