
function openmenu() {
    let x = document.getElementById("menu_content")
    let y = document.getElementById("content")

    if(x.style.display == 'none'){
        x.style.display = 'block'
        y.style.display = "none"
    }else{
        x.style.display = 'none'
        y.style.display = "block"
    }
    
}


