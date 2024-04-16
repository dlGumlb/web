


function openmenu() {

    let x = document.getElementById("menu")
    let y = document.getElementById("content")

    if(x.style.display == 'none'){
        x.style.display = 'block'
        y.style.display = "none"
    }else{
        x.style.display = 'none'
        y.style.display = "block" 
    }
}


let x=0, y=0, z=0, a=0;
function open_card(number){
   
    if(number == 1){
        let Element = document.getElementById("one")
        Element.classList.remove("not_turn")
        Element.classList.remove("card")
        if(x%2==0){
            let Element = document.getElementById("one")
            Element.classList.add("card") 
            Element.childNodes[1].style.display = "none";
            Element.childNodes[3].style.display = "flex";
            x+=1 
        }else if(x%2 != 0){
            let Element = document.getElementById("one") 
            Element.classList.add("not_turn") 
            Element.childNodes[3].style.display = "none";
            Element.childNodes[1].style.display = "block"; 
            x-=1
        }
        
    }else if(number == 2){
        let Element = document.getElementById("two")
        Element.classList.remove("not_turn")
        Element.classList.remove("card")
        if(x%2==0){
            let Element = document.getElementById("two")
            Element.classList.add("card")  
            Element.childNodes[1].style.display = "none";
            Element.childNodes[3].style.display = "flex";
            x+=1 
        }else if(x%2 != 0){
            let Element = document.getElementById("two") 
            Element.classList.add("not_turn")  
            Element.childNodes[3].style.display = "none";
            Element.childNodes[1].style.display = "block"; 
            x-=1
        }
    }else if(number == 3){
        let Element = document.getElementById("three")
        Element.classList.remove("not_turn")
        Element.classList.remove("card")
        if(x%2==0){
            let Element = document.getElementById("three")
            Element.classList.add("card") 
            Element.childNodes[1].style.display = "none";
            Element.childNodes[3].style.display = "flex"; 
            x+=1 
        }else if(x%2 != 0){
            let Element = document.getElementById("three") 
            Element.classList.add("not_turn")  
            Element.childNodes[3].style.display = "none";
            Element.childNodes[1].style.display = "block"; 
            x-=1
        }
    }else if(number == 4){
        let Element = document.getElementById("four")
        Element.classList.remove("not_turn")
        Element.classList.remove("card")
        if(x%2==0){
            let Element = document.getElementById("four")
            Element.classList.add("card") 
            Element.childNodes[1].style.display = "none";
            Element.childNodes[3].style.display = "flex"; 
            x+=1 
        }else if(x%2 != 0){
            let Element = document.getElementById("four") 
            Element.classList.add("not_turn")  
            Element.childNodes[3].style.display = "none";
            Element.childNodes[1].style.display = "block"; 
            x-=1
        }
    }    
}






    
