var input = document.getElementById("input");
var ul = document.getElementById("ul");

function addtask(){
    if(input.value === ''){
        alert('hey');
    }
    else{
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("id","img");
        img.src = "";
        ul.appendChild(img);
        li.innerHTML = input.value;
        ul.appendChild(li);
        li.style.textDecoration = "none";
        input.value = "";
    }
    img.onclick = function(){
      if(li.style.textDecoration = "none"){
            img.src = "Pic.jpeg"; 
            li.style.textDecoration = "line-through";
      } 
      else{
        img.src = "";
        li.style.textDecoration = "none";
      }
    }
}