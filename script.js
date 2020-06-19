function displayDateTime(){
    let hour = document.getElementById("heure");
    let current = new Date();
    hour.innerText = current.toLocaleTimeString('fr-FR');
}

function main(){
    setInterval(displayDateTime, 1000);
}

main(); 