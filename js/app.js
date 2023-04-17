function fechaYHora () {  
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
    let mesesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Septiembre","Octubre","Noviembre","Diciembre"];
    let parrafoFecha = document.getElementById('parrafoFecha');
    let parrafoHora = document.getElementById('parrafoHora');
    let fechaActual,
        horas,
        minutos,
        segundos,
        amPm; 
        
    fechaActual = new Date();
    console.log(fechaActual);
      
    parrafoFecha.innerHTML = `${diasSemana[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${mesesAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    
    
    
    horas =  fechaActual.getHours();
    minutos = fechaActual.getMinutes();
    segundos = fechaActual.getSeconds();
    
    
    if(segundos < 10){
        segundos = `0${segundos}`
    }
    if(minutos < 10){
        minutos = `0${minutos}`
    }
    
    if(horas >= 12){
        horas = horas - 12
        amPm = `PM`
        if(horas < 10){
            horas = `0${horas}`
        }
    } else{
        amPm = `AM`
    }
    
    if(horas === 0){
        horas = 12;
    }
    
    parrafoHora.innerHTML = `${horas}:${minutos}:${segundos}${amPm}`
    
    
     }
    
    window.setInterval(fechaYHora, 1000);
    
let btnAzul = document.getElementById('btnAzul');
let btnVerde = document.getElementById('btnVerde');
let btnRosa = document.getElementById('btnRosa');

  btnAzul.addEventListener("click", darColorAzul);
  btnVerde.addEventListener("click", darColorVerde);
  btnRosa.addEventListener("click", darColorRosa);
  
  function darColorAzul() {
    console.log("btnAzul");
    parrafoFecha.className = "display-5 textoAzul";
    parrafoHora.className = "display-5 textoAzul";
  }

  function darColorVerde() {
    console.log("btnVerde");
    parrafoFecha.className = "display-5 textoVerde";
    parrafoHora.className = "display-5 textoVerde";
  }

  function darColorRosa() {
    console.log("btnRosa");
    parrafoFecha.className = "display-5 textoRosa";
    parrafoHora.className = "display-5 textoRosa";
  }
