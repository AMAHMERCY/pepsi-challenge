let action =document.body;
function change(){
    action.style.backgroundColor ="blue";
   var image= document.getElementById("hero");
  
   if(action.style.backgroundColor=="blue"){
    image.src = "images/pepsi001.png"
   }
  }

drink.onclick = function(){
    change()
}
function chang(){
action.style.backgroundColor ="black";
   var image= document.getElementById("hero");
   if(action.style.backgroundColor=="black"){
    image.src = "images/pepsi003.png"
   }
}
  drink2.onclick = function(){
    chang()
}
function chan(){
    action.style.backgroundColor ="red";
       var image= document.getElementById("hero");
       if(action.style.backgroundColor=="red"){
        image.src = "images/pepsi002.png"
       }
    }
      drink1.onclick = function(){
        chan()
    }