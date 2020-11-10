btnCalcular = document.getElementById('calcular');
btnCalcular.onclick = calcular;

function calcular(){
    cantidadPasesPorDia = document.getElementById('pase_dia').value
    cantidadPasesCompletos = document.getElementById('pase_completo').value
    cantidadPasesDosDia = document.getElementById('pase_dosdias').value
    
    cantidadPasesPorDia = cantidadPasesPorDia == "" ? 0: cantidadPasesPorDia;
    cantidadPasesCompletos = cantidadPasesCompletos == "" ? 0: cantidadPasesCompletos;
    cantidadPasesDosDia = cantidadPasesDosDia == "" ? 0: cantidadPasesDosDia;

    //calculo el total
    total = cantidadPasesPorDia * 30 + cantidadPasesCompletos * 50 + cantidadPasesDosDia* 45
    
    //actualizo el resumen
    resumen = document.getElementById('lista-productos')
    let textResumen = ''

    if(cantidadPasesPorDia != 0){
        textResumen = cantidadPasesPorDia.toString() + ' boletos pase por día'
    }
    if(cantidadPasesCompletos != 0){
        textResumen = textResumen != '' ? textResumen + '<br> ': textResumen
        textResumen = textResumen + cantidadPasesCompletos.toString() + ' boletos pase todos los días'
    } 
    if(cantidadPasesDosDia != 0){
        textResumen = textResumen != '' ? textResumen + '<br> ': textResumen
        textResumen = textResumen + cantidadPasesDosDia.toString() + ' boletos pase sábado y domingo'
    }   
    if(total == 0){
        textResumen = ''
    }
    resumen.innerHTML = textResumen
    resumen.style.color = 'white'
    

    //actualizo el total
    sumaTotal = document.getElementById('suma-total')
    sumaTotal.textContent = "$" + total.toString()

}
