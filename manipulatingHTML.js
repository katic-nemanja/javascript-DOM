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
menu.prepend("prepend 1", "prepend 2");

// insertAdjacentHTML(position,html element) na izabranog roditelja moze da doda:
// - "beforebegin" pre pocetka tog roditelja zeljeni element
// - "afterbegin" posle pocetka tog roditelja zeljeni element iliti ako je roditelj, prvo dete
// - "beforeend" pre kraja tog roditelja zeljeni element iliti ako je roditelj, poslednje dete
// - "afterend" posle kraja tog roditelja zeljeni element iliti van roditelja
menu.insertAdjacentHTML("beforebegin","<p>Before begin element</p>");
menu.insertAdjacentHTML("afterbegin","<li>After begin element</li>");
menu.insertAdjacentHTML("beforeend","<li>Before end element</li>");
menu.insertAdjacentHTML("afterend","<h3>Before begin element</h3>");

// insertAdjacentElement na izabranog roditelja moze da doda isto kao i HTML samo sto dodaje element
menu.insertAdjacentElement("afterend", el1);


// replaceChild(novo dete,staro dete); - menja jedan cvor drugim
menu.replaceChild(el1,el2);

// cloneNode() je metoda kojom se klonira bilo koji element,
// default vrednost mu je false, ali ako mu se prosledi 
// "true" u zagradi, onda kopira cvor sa sve decom cvorovima
let klonirani = menu.cloneNode(true);
console.log(klonirani);

// removeChild(child element) - uklanja selektovani child element iz roditeljskog containera
menu.removeChild(menu.lastChild);

// insertBefore(novi cvor, postojeci cvor) - ubacuje novi cvor pre postojeceg child cvora unutar parenta
let insBefore = document.createElement("p");
insBefore.textContent = "Ubacen tekst pre Elementa 1";
menu.insertBefore(insBefore, el1);