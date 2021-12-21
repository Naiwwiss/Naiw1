window.onload = function heartadd(){
    console.log("test1")
    let hearts = document.getElementsByClassName("fa-heart");
    for (let heart in hearts){
        heart.addEventListener("click",changeColor)
    }
}

function changeColor(e){
    console.log("test")
    let element = e.target
    var currentColor=element.style.color;
    if(currentColor=='black'){
        element.style.color='red';
    }
    else{
        element.style.color='black'
    }
}