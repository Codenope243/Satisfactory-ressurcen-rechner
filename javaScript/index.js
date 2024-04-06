setInterval(function() {
    let produktionsmengeInput = document.getElementsByClassName("produkt-menge-feld")[0];
    let produktionsmenge = parseFloat(produktionsmengeInput.value);
    
    if (produktionsmenge < 0) {
        produktionsmengeInput.value = 0;
    }

    let produktionszeit = 12;
    let ressurse1 = 6;
    let ressurse2 = 12;
    
    // Berechne die Gesamtzeit für die Herstellung
    const gesamtzeit = (produktionsmenge * produktionszeit) /60 ;
    
    // Berechne die Gesamtanzahl der benötigten Ressourcen
    const benötigteressurse1 = produktionsmenge * ressurse1;
    const benötigteressurse2 = produktionsmenge * ressurse2;
    
    console.log("Produktionsmenge:", produktionsmenge);
    console.log("Gesamtzeit:", gesamtzeit);
    console.log("Benötigte Ressource 1:", benötigteressurse1);
    console.log("Benötigte Ressource 2:", benötigteressurse2);

    let ressurssenProMinFeld = document.getElementsByClassName("ressursen-menge")[0]
    
    ressurssenProMinFeld.innerHTML="Pro min:" + benötigteressurse1



}, 100);


function produktmengeVerringern(){
    let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

    produktmengeInput.value--
}

function produktmengeErhöhen(){
    let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

    produktmengeInput.value++
}

