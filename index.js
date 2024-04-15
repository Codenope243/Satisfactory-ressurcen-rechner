
const maschienenBibliothek={
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },

    Schmelzofen:{
        name:"Schmelzofen",
    },

    Konstruktor:{
        name:"Konstruktor",
    },

    Schmelze:{
        name:"Schmelze",
    },

    Fabrikator:{
        name:"Fabrikator",
    },

    Gießerei:{
        name:"Gießerei",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
    BohrerMk1:{
        name:"Bohrer Mk.1",
    },
}


//Ab hier ist die Bibliothek
const produktBibliothek={
    Eisenbarren:{
        bild:"url('bilder/Eisenbarren.png')",
        produktionszeit:2,
        ressurce1:1,
        ressurce1Name:" Eisenerz ",
        ertrag:1,
        stromverbrauch:0.3,
        STproduktionProMin:30,
        maschiene1:maschienenBibliothek.BohrerMk1.name,
        maschiene2:maschienenBibliothek.Schmelzofen.name,
    },
    
    Eisenstangen:{
        bild:"url('bilder/Eisenstangen.png')",
        produktionszeit:14,
        ressurce1:1,
        ressurce1Name:" Eisenbaren ",
        ertrag:1,
        stromverbrauch:0.53,
        maschiene1:maschienenBibliothek.Schmelzofen.name,
        maschiene2:maschienenBibliothek.Konstruktor.name
    },

    Eisenplatten:{
        bild:"url('bilder/Eisenplatten.png')",
        produktionszeit:6,
        ressurce1:3,
        ressurce1Name:" Eisenbaren ",
        ertrag:2,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Schmelze.name,
    },

    Kupferbarren:{
        bild:"url('bilder/Kupferbarren.png')",
        produktionszeit:2,
        ressurce1:1,
        ressurce1Name:" Kupferererz ",
        ertrag:1,
        maschiene1:maschienenBibliothek.BohrerMk1.name,
        maschiene2:maschienenBibliothek.Schmelzofen.name,
    },

    Kupferdraht:{
        bild:"url('bilder/Kupferdraht.png')",
        produktionszeit:4,
        ressurce1:1,
        ressurce1Name:" Kupferbarren ",
        ertrag:2,
        maschiene1:maschienenBibliothek.Schmelzofen.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
    },

    Kabel:{
        bild:"url('bilder/Kabel.png')",
        produktionszeit:2,
        ressurce1:2,
        ressurce1Name:" Draht ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
    },

    Beton:{
        bild:"url('bilder/Beton.png')",
        produktionszeit:4,
        ressurce1:3,
        ressurce1Name:" Kalkstein ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
    },

    Schrauben:{
        bild:"url('bilder/Schrauben.png')",
        produktionszeit:6,
        ressurce1:1,
        ressurce1Name:" Eisenstangen ",
        ertrag:4,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
    },

    VerstärkteEisenplatten:{
        bild:"url('bilder/Verstärkte Eisenplatten.png')",
        produktionszeit:12,
        ressurce1:6,
        ressurce1Name:" Eisenplatten ",
        ressurce2:12,
        ressurce2Name:" Schrauben ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    Fabpatrronen:{
        bild:"url('bilder/Fabpatrronen.png')",
        produktionszeit:6,
        ressurce1:5,
        ressurce1Name:" Blütenblätter ",
        ertrag:10,
        maschiene1:maschienenBibliothek.Konstruktor.name,
    },

    Kupferblech:{
        bild:"url('bilder/Kupferblech.png')",
        produktionszeit:6,
        ressurce1:2,
        ressurce1Name:" Kupferbarren ",
        ertrag:1,
        maschiene1:"Schmelzofen",
        maschiene2:maschienenBibliothek.Konstruktor.name,
    },

    Rotoren:{
        bild:"url('bilder/Rotoren.png')",
        produktionszeit:15,
        ressurce1:5,
        ressurce1Name:" Eisenstangen ",
        ressurce2:25,
        ressurce2Name:" Schrauben ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    modularerRahmen:{
        bild:"url('bilder/modularer Rahmen.png')",
        produktionszeit:60,
        ressurce1:3,
        ressurce1Name:" Verstärkte Eisenplatten ",
        ressurce2:12,
        ressurce2Name:" Eisenstangen ",
        ertrag:2,
        maschiene1:maschienenBibliothek.Fabrikator.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    IntelligenteBeschichtung:{
        bild:"url('bilder/Intelligente Beschichtung.png')",
        produktionszeit:30,
        ressurce1:1,
        ressurce1Name:" Verstärkte Eisenplatten ",
        ressurce2:1,
        ressurce2Name:"Rotoren",
        ertrag:1,
        maschiene1:maschienenBibliothek.Fabrikator.name,
        maschiene2:maschienenBibliothek.Fabrikator.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    AlienDNAKapsel:{
        bild:"url('bilder/Alien DNA-Kapsel.png')",
        produktionszeit:6,
        ressurce1:1,
        ressurce1Name:" Alien Protein ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
    },

    Stahlbarren:{
        bild:"url('bilder/Stahlbarren.png')",
        produktionszeit:4,
        ressurce1:3,
        ressurce1Name:" Eisenerz ",
        ressurce2:3,
        ressurce2Name:" Kohle ",
        ertrag:3,
        maschiene1:maschienenBibliothek.BohrerMk1.name,
        maschiene2:maschienenBibliothek.BohrerMk1.name,
        maschiene3:maschienenBibliothek.Gießerei.name,
    },

    Stahlträger:{
        bild:"url('bilder/Stahlträger.png')",
        produktionszeit:4,
        ressurce1:4,
        ressurce1Name:" Stahlbarren ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Gießerei.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,

    },

    Stahlrohre:{
        bild:"url('bilder/Stahlrohre.png')",
        produktionszeit:6,
        ressurce1:3,
        ressurce1Name:" Stahlbarren ",
        ertrag:2,
        maschiene1:maschienenBibliothek.Gießerei.name,
        maschiene2:maschienenBibliothek.Konstruktor.name, 
    },

    Mehrzweckgerüst:{
        bild:"url('bilder/Mehrzweckgerüst.png')",
        produktionszeit:24,
        ressurce1:1,
        ressurce1Name:" Modularer Rahmen ",
        ressurce2:12,
        ressurce2Name:" Stahlträger ",
        ertrag:2,
        maschiene1:maschienenBibliothek.Fabrikator.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    Stahlbetontrager:{
        bild:"url('bilder/Stahlbetontrager.png')",
        produktionszeit:10,
        ressurce1:4,
        ressurce1Name:" Stahlträger ",
        ressurce2:5,
        ressurce2Name:" Beton ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    Stator:{
        bild:"url('bilder/Stator.png')",
        produktionszeit:12,
        ressurce1:3,
        ressurce1Name:" Stahlrohr ",
        ressurce2:8,
        ressurce2Name:" Kupferdraht ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Konstruktor.name,
        maschiene2:maschienenBibliothek.Konstruktor.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    Motor:{
        bild:"url('bilder/Motor.png')",
        produktionszeit:12,
        ressurce1:2,
        ressurce1Name:" Rotoren ",
        ressurce2:2,
        ressurce2Name:" Statoren ",
        ertrag:1,
        maschiene1:maschienenBibliothek.Fabrikator.name,
        maschiene2:maschienenBibliothek.Fabrikator.name,
        maschiene3:maschienenBibliothek.Fabrikator.name,
    },

    AutomatischeVerkabelung:{
        bild:"url('bilder/Automatische Verkabelung.png')",
        produktionszeit:24,
        ressurce1:1,
        ressurce1Name:" Statoren ",
        ressurce2:20,
        ressurce2Name:" Kabel ",
        ertrag:1,
    },

    SchwerermodularerRahmen:{
        bild:"url('bilder/Schwerer modularer Rahmen.png')",
        produktionszeit:30,
        ressurce1:5,
        ressurce1Name:" modularer Rahmen ",
        ressurce2:15,
        ressurce2Name:" Stahlrohr ",
        ressurce3:5,
        ressurce3Name:" Stahlbetonträger ",
        ressurce4:100,
        ressurce4Name:" Schrauben ",
        ertrag:1,
    },

    Cateriumbarren:{
        bild:"url('bilder/Cateriumbarren.png')",
        produktionszeit:4,
        ressurce1:3,
        ressurce1Name:" Cateriumerz ",
        ertrag:1,
    },

    Turbodraht:{
        bild:"url('bilder/Turbodraht.png')",
        produktionszeit:5,
        ressurce1:1,
        ressurce1Name:" Cateriumbarren ",
        ertrag:5,
    },

    KIBegrenzer:{
        bild:"url('bilder/KI-Begrenzer.png')",
        produktionszeit:12,
        ressurce1:5,
        ressurce1Name:"Kupferblech",
        ressurce2:20,
        ressurce2Name:" Turbodraht ",
        ertrag:1,
    },

    Quarzkristall:{
        bild:"url('bilder/Quarzkristall.png')",
        produktionszeit:8,
        ressurce1:5,
        ressurce1Name:" Rohquarz ",
        ertrag:3,
    },

    Quarzsand:{
        bild:"url('bilder/Quarzsand.png')",
        produktionszeit:8,
        ressurce1:3,
        ressurce1Name:" Rohquarz ",
        ertrag:5,
    },
//nebenprudukt von kunstof (schweröllrükstand)(1)muss noch hinzugefügt werdern
    Kunststoff:{
        bild:"url('bilder/Kunststoff.png')",
        produktionszeit:6,
        ressurce1:3,
        ressurce1Name:" Rohöl ",
        ertrag:2,
        
    },
//nebenprudukt von Gummi (schweröllrükstand)(2)muss noch hinzugefügt werdern
    Gummi:{
        bild:"url('bilder/Gummi.png')",
        produktionszeit:6,
        ressurce1:3,
        ressurce1Name:" Rohöl ",
        ertrag:2,
    },

    Platine:{
        bild:"url('bilder/Platine.png')",
        produktionszeit:8,
        ressurce1:2,
        ressurce1Name:" Kupferblech",
        ressurce2:4,
        ressurce2Name:" Kuststoff ",
        ertrag:1,
    },

    Computer:{
        bild:"url('bilder/Computer.png')",
        produktionszeit:24,
        ressurce1:10,
        ressurce1Name:" Platine ",
        ressurce2:9,
        ressurce2Name:" Kabel ",
        ressurce3:18,
        ressurce3Name:" Kuststoff ",
        ressurce4:52,
        ressurce4Name:" Schrauben ",
        ertrag:1,
    },

    ModularerMotor:{
        bild:"url('bilder/Modularer Motor.png')",
        produktionszeit:60,
        ressurce1:2,
        ressurce1Name:" Motor ",
        ressurce2:15,
        ressurce2Name:" Gummi ",
        ressurce3:2,
        ressurce3Name:" Intelligente Beschichtung ",
        ertrag:1,
    },

    AdaptiveSteuereinheit:{
        bild:"url('bilder/Adaptive Steuereinheit.png')",
        produktionszeit:120,
        ressurce1:15,
        ressurce1Name:" Automatische Verkabelung ",
        ressurce2:10,
        ressurce2Name:" Platine ",
        ressurce3:2,
        ressurce3Name:" Schwerer modularer Rahmen ",
        ressurce4:2,
        ressurce4Name:" Computer ",
        ertrag:2,
    },

    LeererKanister:{
        bild:"url('bilder/Leerer Kanister.png')",
        produktionszeit:4,
        ressurce1:2,
        ressurce1Name:" Kunststoff ",
        ertrag:4,
    },

    HighspeedAnschluss:{
        bild:"url('bilder/Highspeed-Anschluss.png')",
        produktionszeit:16,
        ressurce1:56,
        ressurce1Name:" Turbodraht ",
        ressurce2:10,
        ressurce2Name:" Kabel ",
        ressurce3:1,
        ressurce3Name:" Platine ",
        ertrag:1,
    },

    Quarzoszillator:{
        bild:"url('bilder/Quarzoszillator.png')",
        produktionszeit:120,
        ressurce1:36,
        ressurce1Name:" Quarzkristall ",
        ressurce2:28,
        ressurce2Name:" Kabel ",
        ressurce3:5,
        ressurce3Name:" Verstärkte Eisenplatten ",
        ertrag:2,
    },
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Hier wird beim laden die constante "produkt" auf "Eisenbarren" gesetzt so das am anfang der Eisenbarren ausgewählt ist
let produkt = ""
produkt="Eisenbarren"
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
setInterval(function() {
    //Hier wird der Produktionsmengen wert ausgelesen und überprüft
        let produktionsmengeInput = document.getElementsByClassName("produkt-menge-feld")[0];
        let produktionsmenge = parseFloat(produktionsmengeInput.value);

     if (produktionsmenge < 1 || isNaN(produktionsmenge)) {
            produktionsmengeInput.value = 1;
            produktionsmenge = 1;
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Hier wird die constante "werte" festgelegt auserdem begint hier die if abfrage

      const werte = produktBibliothek[produkt];

    if (werte) {
        
    //Ab hier werden die benötigtet ressurcen berechnet

        //Hier werden die constanten aus der Bibliothek ausgelesen und neu definiert
        const ressurce1 = werte.ressurce1;
        const ressurce2 = werte.ressurce2;
        const ressurce3 = werte.ressurce3;
        const ressurce4 = werte.ressurce4;
        const ressurce1Name = werte.ressurce1Name;
        const ressurce2Name = werte.ressurce2Name;
        const ressurce3Name = werte.ressurce3Name;
        const ressurce4Name = werte.ressurce4Name;
        const ertrag = werte.ertrag;
        
        //Hier werden die constanten für die text felder festgelegt
        const ressurce1Menge = document.getElementById("ressurce1-menge");
        const ressurce2Menge = document.getElementById("ressurce2-menge");
        const ressurce3Menge = document.getElementById("ressurce3-menge");
        const ressurce4Menge = document.getElementById("ressurce4-menge");
       
        //Hier werden die ressurcen berechnet und eingetragen
        ressurce1Menge.innerHTML = ressurce1Name + ": " + parseFloat((produktionsmenge * ressurce1 / ertrag).toFixed(2));
        ressurce2Menge.innerHTML = ressurce2Name + ": " + parseFloat((produktionsmenge * ressurce2 / ertrag).toFixed(2));
        ressurce3Menge.innerHTML = ressurce3Name + ": " + parseFloat((produktionsmenge * ressurce3 / ertrag).toFixed(2));
        ressurce4Menge.innerHTML = ressurce4Name + ": " + parseFloat((produktionsmenge * ressurce4 / ertrag).toFixed(2));

        //Hier wird überprüft ob eine ressurce undefiniert ist und angezeigt werden soll
        if (typeof ressurce2 === "undefined") {
            ressurce2Menge.style.visibility="hidden"
        }else{
            ressurce2Menge.style.visibility = "visible"
        }

        if (typeof ressurce3 === "undefined") {
            ressurce3Menge.style.visibility="hidden"
        }else{
            ressurce3Menge.style.visibility="visible"
        }

        if (typeof ressurce4 === "undefined") {
            ressurce4Menge.style.visibility="hidden"
        }else{
            ressurce4Menge.style.visibility="visible"
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

        //Hier werden die constanten für das Produktbild definiert
        const bild = werte.bild
        const produktbildContainer = document.querySelector(".produktbild-container");
    
        //Hier wird das Produkt bild eingefügt
        produktbildContainer.style.backgroundImage = bild;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Ab hier wird der stromverbrauch berechnet
        //Hier werden die werte aus der Bibliothek ausgelesen und in einer constante definiert
        const stromverbrauch = werte.stromverbrauch;

        //Hier wird die constante für das text feld definiert
        const stromverbrauchFeld = document.getElementsByClassName("strom-info-feld")[0];

        //Hier wird der Stromverbrauch berechnet und gerundet
        const gesamterStromverbrauch = stromverbrauch * produktionsmenge;
        const gesamterStromverbrauchGerundet = Math.ceil(gesamterStromverbrauch);

        //Hier wird der Stromverbrauch eingetragen
        stromverbrauchFeld.innerHTML = gesamterStromverbrauchGerundet + " MW";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

    //Ab hier werden die Benötigten maschienen berechnet
        //Hier werden die werte aus der Bibliothek ausgelesen und in einer constante definiert
        const STproduktionProMin = werte.STproduktionProMin;
        const maschiene1 = werte.maschiene1;
        const maschiene2 = werte.maschiene2;
        const maschiene3 = werte.maschiene3;
        const maschiene4 = werte.maschiene4;
        const test = werte.test

        //Hier werden die constanten für die text felder definiert
        const maschienenFeld1 = document.getElementsByClassName("maschienen-feld")[0];
        const maschienenFeld2 = document.getElementsByClassName("maschienen-feld")[1];
        const maschienenFeld3 = document.getElementsByClassName("maschienen-feld")[2];
        const maschienenFeld4 = document.getElementsByClassName("maschienen-feld")[3];

        //Hier werden die menge an gebrauchter Maschienen berechnet
        const produktionProMin = produktionsmenge / STproduktionProMin;
        const gebrauchteMaschienen1gerundet = Math.ceil(produktionProMin);

        //Hier wird die menge an gebrauchter Maschienen eingetragen
        maschienenFeld1.innerHTML = maschiene1 + ": " + gebrauchteMaschienen1gerundet;
        maschienenFeld2.innerHTML = maschiene2 + ": " + gebrauchteMaschienen1gerundet;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
    }else{
        console.log("produkt nicht gefunden")
    }
},100);
    //Hier endent der interval und die "if" abfrage
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   


//Ab hier sind die functionen für die verringerrung der Prduktionsmenge und der Erhöhung der Produktionsmenge
    //Hier wird Verringert
    function produktmengeVerringern(){
     let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

      produktmengeInput.value--
    }

    //Hier wird Erhöht
    produktmengeErhöhen()
    function produktmengeErhöhen(){
        let produktmengeInput = document.getElementsByClassName("produkt-menge-feld")[0]

        produktmengeInput.value++
    }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Ab hier ist alles für die Produkt Auswahl
    //Hier wird die constante für den Produkte Auswahl Container festgelegt und seine sichtbarkeit wird auf "hidden" gestellt 
    const produkteAuswahlContainer = document.getElementById("produkte-auswahl-container");
    produkteAuswahlContainer.style.visibility = "hidden";

    //Hier ist die function fürs ein/aus blenden des Auswahl Containers
    function produkteAuswahlEinAusBlenden() {

     //Hier werden die constanten definiert
     const produkteAuswahlContainer = document.getElementById("produkte-auswahl-container");
     const produktBilder = document.getElementsByClassName("produkt-bild");

     //Hier wird der Auswahl Container unsichtbar und sichtbar gemacht
     //Indem eine if abfrage gemacht wird ob den container unsichtbar ist oder nicht wenn ja dan mach ihn sichtbar
     if (produkteAuswahlContainer.style.visibility === "hidden") {
        produkteAuswahlContainer.style.visibility = "visible";

        //Hier wird die transition zeit auf 0.3s gesetzt
         for (let e = 0; e < produktBilder.length; e++) {
            produktBilder[e].style.transition = "ease 0.3s";
         }

         console.log("true")
     } else {
        //Hier wird die transition zeit auf 0.0s gesetzt und der  container versteckt
         for (let i = 0; i < produktBilder.length; i++) {
             produktBilder[i].style.transition = "ease 0.0s";
         }
         produkteAuswahlContainer.style.visibility = "hidden";
        //Hier wird in die Console "false" ausgegeben
         console.log("false")
     }
    }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------