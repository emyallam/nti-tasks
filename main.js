var userInput = document.getElementById("userInput");
var searchInput = document.getElementById("searchInput");
var homeContent = document.getElementById("homeContent");


var allItems = [];
if(localStorage.getItem("allTasks")){
    allItems = JSON.parse(localStorage.getItem("allTasks"));
    displayItems();
}

function addItem(){
    allItems.push(userInput.value);
    localStorage.setItem("allTasks",JSON.stringify(allItems));
    userInput.value ="";
    // console.log(allItems);
    displayItems();
    
}
function displayItems(){
    var cartona = ``;
    for(var item =0; item<allItems.length; item++){
        cartona = cartona +
        `
        <div
        class="home-item mb-2 rounded-pill text-dark mx-auto w-50  d-flex justify-content-between align-items-center">
        <p id="itemContent " class="m-0 p-0 text-white">Content:${allItems[item]}</p>
        <i onclick="deleteItem(${item})" class="fa-sharp fa-solid fa-trash text-white"></i>
      </div>
        `;
    }
    homeContent.innerHTML = cartona;
}


//delete

function deleteItem(ind){
    allItems.splice(ind,1);
    localStorage.setItem("allTasks",JSON.stringify(allItems));

    displayItems();
}

//search

