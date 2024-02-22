function getRandomColor(){
    return  Math.floor(Math.random() * 255) + 1
}



btn=document.getElementById("change-color-btn")
box=document.getElementById("color-box")
btn.addEventListener("click",function(){
        
    box.style.backgroundColor = `rgb(${getRandomColor()} , ${getRandomColor()} , ${getRandomColor()})`
})

