


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



function open_card(number){
    let x=0, y=0, z=0, a=0;
    if(number == 1){
        if(x=0){
            let Element = document.getElementById("one")
            Element.classList.remove("not_turn")
            Element.classList.add("card")   
        }else{
            let Element = document.getElementById("one")
            Element.classList.remove("card") 
            Element.classList.add("not_turn")  
        }
        
    }else if(number == 2){
        let Element = document.getElementById("two")
        Element.classList.add("card")
    }
}






    
