const bibliothek={
    Eisenbarren:{
        produktionszeit:2,
        ressurse1:1,
        ertrag:1,
    },

    Eisenstangen:{
        produktionszeit:14,
        ressurse1:1,
        ertrag:1,
    },

    Eisenplatten:{
        produktionszeit:6,
        ressurse1:3,
        ertrag:2,
    },

    Kupferbarren:{
        produktionszeit:2,
        ressurse1:1,
        ertrag:1,
    },

    Kupferdraht:{
        produktionszeit:4,
        ressurse1:1,
        ertrag:2,
    },

    Kabel:{
        produktionszeit:2,
        ressurse1:2,
        ertrag:1,
    },

    Beton:{
        produktionszeit:4,
        ressurse1:3,
        ertrag:1,
    },

    Schrauben:{
        produktionszeit:6,
        ressurse1:1,
        ertrag:4,
    },

    VerstärkteEisenplatten:{
        produktionszeit:12,
        ressurse1:6,
        ressurse2:12,
        ertrag:1,
    },

    Fabpatrronen:{
        produktionszeit:6,
        ressurse1:5,
        ertrag:10,
    },

    Kupferblech:{
        produktionszeit:6,
        ressurse1:2,
        ertrag:1,
    },

    Rotoren:{
        produktionszeit:15,
        ressurse1:5,
        ressurse2:25,
        ertrag:1,
    },

    modularerRahmen:{
        produktionszeit:60,
        ressurse1:3,
        ressurse2:12,
        ertrag:2,
    },

    IntelligenteBeschichtung:{
        produktionszeit:30,
        ressurse1:1,
        ressurse2:1,
        ertrag:1,
    },

    AlienDNAKapsel:{
        produktionszeit:6,
        ressurse1:1,
        ertrag:1,
    },

    Stahlbarren:{
        produktionszeit:4,
        ressurse1:3,
        ressurse2:3,
        ertrag:3,
    },

    Stahlträger:{
        produktionszeit:4,
        ressurse1:4,
        ertrag:1,
    },

    Stahlrohre:{
        produktionszeit:6,
        ressurse1:3,
        ertrag:2, 
    },

    Mehrzweckgerüst:{
        produktionszeit:24,
        ressurse1:1,
        ressurse2:12,
        ertrag:2,
    },

    Stahlbetontrager:{
        produktionszeit:10,
        ressurse1:4,
        ressurse2:5,
        ertrag:1,
    },

    Stator:{
        produktionszeit:12,
        ressurse1:3,
        ressurse2:8,
        ertrag:1,
    },

    Motor:{
        produktionszeit:12,
        ressurse1:2,
        ressurse2:2,
        ertrag:1,
    },

    AutomatischeVerkabelung:{
        produktionszeit:24,
        ressurse1:1,
        ressurse2:20,
        ertrag:1,
    },

    SchwerermodularerRahmen:{
        produktionszeit:30,
        ressurse1:5,
        ressurse2:15,
        ressurse3:5,
        ressurse4:100,
        ertrag:1,
    },

    Cateriumbarren:{
        produktionszeit:4,
        ressurse1:3,
        ertrag:1,
    },

    Turbodraht:{
        produktionszeit:5,
        ressurse1:1,
        ertrag:5,
    },

    KIBegrenzer:{
        produktionszeit:12,
        ressurse1:5,
        ressurse2:20,
        ertrag:1,
    },

    Quarzkristall:{
        produktionszeit:8,
        ressurse1:5,
        ertrag:3,
    },

    Quarzsand:{
        produktionszeit:8,
        ressurse1:3,
        ertrag:5,
    },
//nebenprudukt von kunstof (schweröllrükstand)(1)muss noch hinzugefügt werdern
    Kunststoff:{
        produktionszeit:6,
        ressurse1:3,
        ertrag:2,
        
    },
//nebenprudukt von Gummi (schweröllrükstand)(2)muss noch hinzugefügt werdern
    Gummi:{
        produktionszeit:6,
        ressurse1:3,
        ertrag:2,
    },

    Platine:{
        produktionszeit:8,
        ressurse1:2,
        ressurse2:4,
        ertrag:1,
    },

    Computer:{
        produktionszeit:24,
        ressurse1:4,
        ressurse2:4,
        ressurse3:4,
        ressurse4:4,
        ertrag:1,
    },

    ModularerMotor:{
        produktionszeit:60,
        ressurse1:2,
        ressurse2:15,
        ressurse3:2,
        ertrag:1,
    },

    AdaptiveSteuereinheit:{
        produktionszeit:120,
        ressurse1:15,
        ressurse2:10,
        ressurse3:2,
        ressurse4:2,
        ertrag:2,
    },

    LeererKanister:{
        produktionszeit:4,
        ressurse1:2,
        ertrag:4,
    },

    HighspeedAnschluss:{
        produktionszeit:16,
        ressurse1:56,
        ressurse2:10,
        ressurse3:1,
        ertrag:1,
    },

    Quarzoszillator:{
        produktionszeit:120,
        ressurse1:36,
        ressurse2:28,
        ressurse3:5,
        ertrag:2,
    },
}

let produkt = ""

setInterval(function() {
    let produktionsmengeInput = document.getElementsByClassName("produkt-menge-feld")[0];
    let produktionsmenge = parseFloat(produktionsmengeInput.value);
    
    if (produktionsmenge < 0) {
        produktionsmengeInput.value = 0;
    }


    const werte = bibliothek[produkt]

    if(werte){

        const produktionszeit = werte.produktionszeit
        const ressurse1 = werte.ressurse1
        const ressurse2 = werte.ressurse2
        const ertrag = werte.ertrag

        // Berechne die Gesamtzeit für die Herstellung
        const gesamtzeit = (produktionsmenge * produktionszeit) /60 ;
   
            // Berechne die Gesamtanzahl der benötigten Ressourcen
            const benötigteressurse1 = produktionsmenge * ressurse1 / ertrag;
            const benötigteressurse2 = produktionsmenge * ressurse2 / ertrag;


     let ressurssenProMinFeld = document.getElementsByClassName("ressursen-menge")[0]
     ressurssenProMinFeld.innerHTML = "Pro min:" + benötigteressurse1 

    }else{
        console.log("Produkt nicht gefunden in der Bibliothek");
    }

}, 100);


function produktmengeVerringern(){
    let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

    produktmengeInput.value--
}

function produktmengeErhöhen(){
    let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

    produktmengeInput.value++
}

const produkteAuswahlContainer = document.getElementById("produkte-auswahl-container");
produkteAuswahlContainer.style.visibility = "hidden";
function produkteAuswahlEinAusBlenden() {
    
    const produktBilder = document.getElementsByClassName("produkt-bild");

    if (produkteAuswahlContainer.style.visibility === "hidden") {
        produkteAuswahlContainer.style.visibility = "visible";

        for (let e = 0; e < produktBilder.length; e++) {
            produktBilder[e].style.transition = "ease 0.3s";
        }

        console.log("true")
    } else {
        for (let i = 0; i < produktBilder.length; i++) {
            produktBilder[i].style.transition = "ease 0.0s";
        }
        produkteAuswahlContainer.style.visibility = "hidden";
        
        console.log("false")
    }
}