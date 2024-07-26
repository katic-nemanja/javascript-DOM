//callback funkcija je funkcija koja se prosledjuje kao parametar drugoj funkciji
function prikaz(parametar){
    console.log(parametar);
}


function sumiraj(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(`zbir brojeva ${num1} i ${num2} je: ${sum}`);
}

sumiraj(5, 9, prikaz); //prikaz je funkcija koja je prosledjena kao parametar funkciji sumiraj


//anonimus function - to su funkcije koje se kreiraju bez imena
// da bi se ova funkcija pozvala, pozivamo varijablu kojoj smo dodelili funkciju i njoj prosledjujemo parametre
// proizvod(3,6) - to je poziv funkcije koja ce da izracuna proizvod
let proizvod = function(a,b){
    return a*b;
}


console.log(`Proizvod brojeva 5 i 4 je: ${proizvod(5,4)}`);


//setTimeout(funkcija,interval u milisekundama) - odlaze izvrsenje za toliko milisekundi
setTimeout(function() {
    console.log("Odlozeno prikazivanje funkcije za 5 sekundi.")
}, 5000);