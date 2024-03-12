
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


function ease_thing(x){
    if (x == "home"){
        document.getElementsByClassName("content_home").classList.add(" content_home_activate");
    }
}
    
