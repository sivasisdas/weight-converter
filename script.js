const kilo = document.getElementById("kilo");
const pound = document.getElementById("pound");
const ounce = document.getElementById("ounce");

kilo.addEventListener("input",fromKilo);
pound.addEventListener("input",fromPound);
ounce.addEventListener("input",fromOunce);
window.addEventListener("load",fromKilo);



function fromKilo(){
    let kg =kilo.value;
    pound.value=`${(kg*2.205).toFixed(3)}`;
    ounce.value=`${(kg*35.274).toFixed(3)}`;
}

function fromPound(){
    let lb = pound.value;
   kilo.value=`${(lb/2.205).toFixed(3)}`;
   ounce.value=`${(lb*16).toFixed(3)}`;
}

function fromOunce(){
    let oz = ounce.value;
    kilo.value=`${(oz/35.274).toFixed(3)}`;
    pound.value=`${(oz/16).toFixed(3)}`;
}