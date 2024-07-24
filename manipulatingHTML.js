// MANIPULATING HTML ELEMENTS FROM JS


// kreiranje novog elementa
// appendChild() dodaje node na kraj liste dece
let menu = document.querySelector(".menu");
let list = document.createElement("li");
list.innerHTML = "Contact";
menu.appendChild(list);


// textContent vs innerText (textContent prikazuje sve elemente HTML dokumenta, dok innerText prikazuje samo vidljive elemente dokumenta)
console.log(menu.textContent);
console.log(menu.innerText);

//preko textContenta je moguce promeniti strukturu svakog HTML elementa
menu.textContent = "Umesto liste sada imamo obican tekst!!!";


// innerHTML je svojstvo preko kog mozemo menjati strukturu elementa dodajuci nove HTML tagove
menu.setAttribute("class", "menu");
menu.innerHTML = "<ul><li>Home</li><li>About</li><li>Blog</li></ul>";//resetujem stranicu na izvornu zbog daljeg rada


// after() - sluzi za dodavanje elementa nakon nekog elementa
menu.after("Neki tekst nakon elementa .menu");


// append() - na kraj dodaje elemente ili tekst parent node-u

let el1 = document.createElement("li");
let el2 = document.createElement("li");
el1.innerHTML="prvi element iz append() metode";
el2.innerHTML="drugi element iz append() metode";
menu.append(el1,el2);

// prepend() - na pocetak dodaje elemente ili tekst parent node-u
menu.prepend(el1.innerHTML, el2.innerHTML);





let div = document.createElement("div");
div.innerHTML = "<p>Manipulacija HTML iz Javascripta</p>";
div.id = "title";
div.className = "JS";
document.body.appendChild(div);
console.log(div);

//let child = div.firstChild;

let _h1 = document.createElement("h1");
_h1.innerHTML = "<h1>Naslov</h1>";
div.insertAdjacentElement("afterbegin", _h1);




// div.insertAdjacentElement(0, _h1);

// document.body.appendChild(div);