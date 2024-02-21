function getRandomColor(){
    return  Math.floor(Math.random() * 255) + 1
}



btn=document.getElementById("change-color-btn")
box=document.getElementById("color-box")
btn.addEventListener("click",function(){
    var a =getRandomColor()
    var b = getRandomColor()
    var c = getRandomColor()
    box.style.backgroundColor = "rgb(" + a + ", " + b + ", " + c + ")";
   
})

