function klik()
{
    alert(this.id);
}

// event object - ovo je objekat koji se prosledjuje elementu kada se dogadjaj desi koji pokrece funkciju
// .type - event objektu se moze proslediti .type prilikom poziva sto izlistava tip eventa koji se dogodio, pogledati #button1 u events.html fajlu
// .target - event objektu se moze proslediti .target prilikom poziva sto izlistava target element na koji se event odnosi


// console.log(this) - stampa element na koji se odnose event handler
// console.log(this.id) - stampa id elementa koji je target element event handlera


//dodavanje eventhandlera iz JAVASCRIPT dokumenta
let btn = document.querySelector("#button2");
btn.onclick = function ()
{
    console.log("Klik na drugo dugme, dodat dogadjaj iz Javascript dokumenta");

    console.log("element koji je pozvao dogadjaj, id: " + this.id);
    console.log("Element: ");
    console.log(this);

    // null vrednost ponistava event handler
    btn.onclick = null;
}

// .addEventListener(event, function) - ova opcija dodaje event handler bilo kom elementu
// -event predstavlja dogadjaj koji ispaljuje event
// function - prestavlja funkciju koja ce taj dogadjaj da obradi

let btn3 = document.querySelector("#button3");
btn3.addEventListener('click',
    function (event)
    {
        console.log(event.type);
    });


let btn4 = document.querySelector("#button4");

// .addEventListener - dodavanje spoljne funkcije 
btn4.addEventListener("click", klik);

// .removeEventListener("click", klik) - uklanja event handler iz elementa. Od parametara prosledjuje mu se isto sto mu je prosledjeno od parametara kada je event listener kreiran
btn4.removeEventListener("click", klik);