document.getElementsByClassName("search-icon")[0].addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("search_input").value = "";
})