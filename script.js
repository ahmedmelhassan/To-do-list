var input = document.getElementById("input");
var ul = document.getElementById("ul");

function addtask(){
    if(input.value === ''){
        alert('Type something to add');
    }
    else{
        var li = document.createElement("li");
        var img = document.createElement("img");
        var span = document.createElement("img");
        span.setAttribute("id","cross");
        span.src = "close.png";
        ul.appendChild(span);
        img.setAttribute("id","img");
        img.src = "";
        ul.appendChild(img);
        li.innerHTML = input.value;
        ul.appendChild(li);
        li.style.textDecoration = "none";
        input.value = "";
    }
     img.onclick = function(){
            img.src = "Pic.jpeg"; 
            li.style.textDecoration = "line-through";
        
     }
     span.onclick = function(){
        li.remove();
        span.remove();
        img.remove();
     }
}