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
            results.innerHTML = `An item with the name <span>${theInput.value}</span> was found in your LocalStorage!`;
        }else{
            results.innerHTML = `No item with the name <span>${theInput.value}</span> was found in your LocalStorage!`;
        }
    }else{
        emptyInput();
    }
    
}

function addItem(){
    if(theInput.value !== ''){
        localStorage.setItem(theInput.value, "added");
        results.innerHTML = `An item with the name <span>${theInput.value}</span> was Added to your LocalStorage!`


    }else{
        emptyInput();
    }
}

function deleteItem(){
    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value);
            results.innerHTML = `An item with the name <span>${theInput.value}</span> was Deleted from your LocalStorage!`

        }
        else{
            results.innerHTML = `No items with the name <span>${theInput.value}</span>`;
        }
    }
    else{
        emptyInput();
    }
}

function showItem(){
    results.innerHTML = '';
    results.innerHTML = 'Here are the items that were found: ';

    if(localStorage.length){
        for(let [key, value] of Object.entries(localStorage)){
            results.innerHTML += `<span class = "key">${key} </span>`
        }
    }
    else{
        emptyInput();
    }
}