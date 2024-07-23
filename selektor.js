// SELEKTORI

let _h1 = document.getElementById("heading1");
let _h2 = document.getElementsByName("heading3");
let _h3 = document.getElementsByTagName("h3");
let _hClass = document.getElementsByClassName("heading2");

// print varijabli
console.log(_h1);
console.log(_h2);
console.log(_h3);
console.log(_hClass);

// selektuje prvi element koji poseduje to svojstvo. Koristi CSS notaciju
let queryHeader = document.querySelector(".heading2");
let queryHeaderAll = document.querySelectorAll("#heading1");

// print query selektora
console.log(queryHeader);
console.log(queryHeaderAll);

// jedan primer upotrebe querySelektora

let q2 = document.querySelector(".odvojenH2");

// ova linija koda prebrojava sve elemente koji poseduju Klasu "heading2"
let ukupnoH2 = document.querySelectorAll(".heading2");

// ova linija kod prebrojava samo elemente sa klasom "heading2" koji se nalaze unutar diva sa klasom "odvojenH2"
let izdvojenoH2 = q2.querySelectorAll(".heading2");

console.log("Ukupno H2 elemenata: " + ukupnoH2.length + ", a onih koji se nalaze unutar <div>-a: " + izdvojenoH2.length);

// SELEKTOVANJE PARENT ELEMENTA IZ CHILDA
let _pChild = document.querySelector("#child1");
let _parent = _pChild.parentNode;
console.log(_parent);


// SELEKTOVANJE CHILD ELEMENATA IZ PARENTA
let _dParent = document.querySelector("#parentDiv");
let _dChildren = _dParent.children;
console.log(_dChildren);

// SELEKTOVANJE RODJAKA
let _pSibling = document.querySelector("#child2");
let _nextSibling = _pSibling.nextElementSibling;
let _prevSibling = _pSibling.previousElementSibling;
console.log("Trenutni element: " + _pSibling.id + ", sledeci rodjak: " + _nextSibling.id + ", prethodni rodjak: " + _prevSibling.id);
// KRAJ SELEKTORA