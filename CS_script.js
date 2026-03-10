let flota=[];

fetch("CS_flota.json")
.then(r=>r.json())
.then(data=>{

flota=data;

let sucursales=[...new Set(flota.map(f=>f.sucursal))];

let selectSucursal=document.getElementById("sucursal");

sucursales.forEach(s=>{

let op=document.createElement("option");
op.value=s;
op.text=s;

selectSucursal.appendChild(op);

});

cargarPlacas();

});

document.getElementById("sucursal").addEventListener("change",cargarPlacas);

function cargarPlacas(){

let sucursal=document.getElementById("sucursal").value;

let placas=flota
.filter(f=>f.sucursal===sucursal && f.estado==="OPERATIVA")
.map(f=>f.placa);

let selectPlaca=document.getElementById("placa");

selectPlaca.innerHTML="";

placas.forEach(p=>{

let op=document.createElement("option");
op.value=p;
op.text=p;

selectPlaca.appendChild(op);

});

}

function enviarChecklist(){

alert("Checklist listo para enviar");

}