
var btns=document.querySelectorAll(".btn");

btns.forEach(function(e){
    var content=e.nextElementSibling;
    e.addEventListener("click",function(){
        
        content.classList.add("view");
    })
})

var closes=document.querySelectorAll(".close");
closes.forEach(function(e){
    var close=e.parentNode.parentNode;
    e.addEventListener("click",function(){
        
        close.classList.remove("view");
    })
})

