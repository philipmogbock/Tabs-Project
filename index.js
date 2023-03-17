const btnEls =document.querySelectorAll(".btn");
const articleEls = document.querySelectorAll(".content");
const buttonContainerEl = document.querySelector(".btn-container");

// add event listener to buttons 
buttonContainerEl.addEventListener('click', (event) => {
    //   console.log("forEach worked"); 
    
    const id = event.target.dataset.id;
    // btn.classList.add("live");        
    if(id){
        btnEls.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
    }

    articleEls.forEach((article) => {
        article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
});
