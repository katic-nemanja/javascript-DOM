let inputText = document.querySelector("#input1");

//*.attributes izlistava sve atribute koje element ima definisane
console.log(inputText.attributes); 

// .getAttribute("attribute name") - izlistava vrednost svakog atributa, vraca null ako nije definisan
console.log(inputText.getAttribute("type"));
console.log(inputText.getAttribute("id"));
console.log(inputText.getAttribute("placeholder"));
console.log("da li postoji atribut klasa? " + inputText.getAttribute("class")); //ovde dobijamo null vrednost jer class nije definisan atribut


// .setAttribute("ime atributa", "vrednost") - postavlja vrednost u atribut koji je naveden
inputText.setAttribute("class", "user");
console.log("Koja je vrednost atributa klasa? " + inputText.getAttribute("class")); //ovde dobijamo vrednost jer je sada atribut class sada definisan


// .hasAttribute("ime atributa") - vraca true/false da li je neki atribut definisan ili ne
console.log(inputText.hasAttribute("name")); //dobijamo false vrednost jer ovaj atribut nije definisan

// .removeAttribute("ime atributa") - uklanja atribut iz elementa
inputText.removeAttribute("class");
console.log("Da li postoji atribut class? " + inputText.hasAttribute("class")); //ponovo dobijamo null vrednost jer  smo uklonili class atribute

// praktican primer dodavanja i oduzimanja klase jednom elementu
function DodajKlasu(){
    
    if(inputText.hasAttribute("class")){
        inputText.removeAttribute("class");
    }
    else{
        inputText.setAttribute("class", "user");
    }
}

// manipulisanje style svojstvom elemenata
// .style vraca sve stilove koje element ima definisan
console.log(inputText.style);

// .style.<ime css svojstva> vraca vrednost tog svojstva ukoliko je definisana kao inline element
// ukoliko je potrebno izlistati vrednost stilova definisanih u eksternom dokumentu, koristiti
// window.getComputedStyle(element)
console.log("pozadinska boja inputa je: " + inputText.style.backgroundColor);
console.log("Velicina fonta je: " + inputText.style.fontSize);

let btn = document.getElementById("button1");
console.log(btn.style.color);
console.log(btn.style.fontFamily); //ne vraca ni jednu vrednost jer nije definisano svojstvo



//.style property moze da se iskoristi i da podesi zeljeno svojstvo elementa
btn.style.color= "black";
btn.style.fontFamily= "Tahoma";
console.log(btn.style.fontFamily); //vraca Tahoma jer je sada definisano
inputText.style.padding = "20px";
inputText.style.width = "200px";

// .style.cssText override-uje stil preko standardnih CSS komandi 
// ako mu se doda "+=" operator, tada ce dodati svoje svojstvo na postojeca
// ako se ostavi samo znak "=", u tom slucaju sva prethodna svojstva ce biti obrisana
// moze se definisati neogranicen broj svojstvava, samo ih je neophodno odvajati sa ";"
inputText.style.cssText += "width:800px;height:150px;color:green";
console.log(inputText);

// window.getComputedStyle(element,pseudo element) - vraca stil definisan u externom css dokumentu
// pseudo element nije obavezan, ako je potrebno izlistati CSS elementa, samo njega navesti
console.log(window.getComputedStyle(btn));

// moguce je vratiti i konkretno svojstvo definisano u eksternom CSS dokumentu, pozivanjem na zeljeni
// takodje koriscenjem  window.getComputedStyle(element).<svojstvo>
console.log("background svojstvo: " + window.getComputedStyle(btn).background);

// MANIPULISANJE CLASS SVOJSTVIMA
// className vraca klase koje element poseduje
let divClass = document.querySelector("#div1");
console.log("klase koje div poseduje su: " + divClass.className);
// preko className je moguce "+=" operatorom dodati jos klasa ili
// "=" operatorom override-ovati klasu na samo tu koja se poslednja definise
divClass.className += " user";
console.log("Sada taj div poseduje klase: " + divClass.className);

//classList vraca kolekciju definisanih klasa bilo kog elementa na stranici
// classList.add(ime klase) dodaje na postojece, novu klasu
// .add() moze da doda neograniceno klasa odvojenih zarezom
divClass.classList.add("nova", "nova1"); //dodaje klasu u listu klasa
console.log("nakon dodavanja: " + divClass.classList);

// classList.remove(ime klase) - uklanja klasu iz elementa
// .remove() moze da ukloni neograniceno klasa odvojenih zarezom
divClass.classList.remove("title", "nova1");
console.log("nakon uklanjanja: " + divClass.classList);

// classList.replace(postojeca klasa, nova klasa) - postojecu klasu menja novom
divClass.classList.replace("user", "korisnik");
console.log("Nakon zamene klase user klasom korisnik: " + divClass.classList);


// classList.contains(ime klase) - proverava da li element poseduje zadatu klasu i vraca true ako postoji
console.log("provera da li postoji klasa user: " + divClass.classList.contains("user"));

// classList.toggle(ime klase) - ako klasa postoji u elementu, sklonice je, ako ne postoji, dodace je
// primer funkcije koja ukljucuje/iskljucuje klasu
function onOff(){
    divClass.classList.toggle("user");
    console.log(divClass.classList);
}