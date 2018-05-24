var getData = function() {
        var mercado1 = document.getElementById("mercado1").value;
        var pensado = document.getElementById("pensado").value;
        var transporte1 = document.getElementById("transporte1").value;
        var servicio1 = document.getElementById("servicio1").value;
        var plan1 = document.getElementById("plan1").value;
        var arriendo1 = document.getElementById("arriendo1").value;
        var educacion1 = document.getElementById("educacion1").value;
        var viajes1 = document.getElementById("viajes1").value;
        var salidas1 = document.getElementById("salidas1").value;
        if (mercado1.length === 0||pensado.length === 0||transporte1.length === 0||servicio1.length === 0||plan1.length === 0||arriendo1.length === 0||educacion1.length === 0||
        viajes1.length === 0||salidas1.length === 0){
            alert("Error Agregar valor de presupuesto pensado");} 
            else { 
                var Resultado1 = mercado1 + transporte1 + servicio1 + plan1 + arriendo1 + educacion1 + viajes1 + salidas1;
                var Resultado2 = pensado - Resultado1;
                document.getElementById('resultado').innerHTML = Resultado1
                document.getElementById('resultado').innerHTML = Resultado2
            }
           
            }
            
