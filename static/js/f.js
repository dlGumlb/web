


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



function open_card(){
    let element = document.getElementsByClassName("not_turn")
    element.classList.add("card");
}






    
