function displayDateTime(){

    let hour = document.getElementById("heure");
    hour.innerText = current.toLocaleTimeString('fr-FR');
}


function main(){
    setInterval(displayDateTime, 1000);
}

main(); 