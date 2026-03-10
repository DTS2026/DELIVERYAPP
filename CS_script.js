function enviarChecklist(){

let data = {

sucursal: document.getElementById("sucursal").value,
placa: document.getElementById("placa").value,
conductor: document.getElementById("conductor").value,
km: document.getElementById("km").value,

luces_delanteras: document.getElementById("luces_delanteras").checked ? "OK" : "FALLA",
luces_traseras: document.getElementById("luces_traseras").checked ? "OK" : "FALLA",
direccionales: document.getElementById("direccionales").checked ? "OK" : "FALLA",
bocina: document.getElementById("bocina").checked ? "OK" : "FALLA",

equipo_frio: document.getElementById("equipo_frio").checked ? "OK" : "FALLA",

temperatura: document.getElementById("temperatura").value,
observaciones: document.getElementById("observaciones").value

};

fetch("https://script.google.com/macros/s/AKfycbyAFjClJDZTqnTpfFR7XHnmHlv_Ox48Fs7aHEYj_BAkcMnnW4yxVcWfjF6knyc6z-zPng/exec",{

method:"POST",
body:JSON.stringify(data)

})
.then(r=>r.json())
.then(res=>{

alert("Checklist enviado correctamente");

});

}