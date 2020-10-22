


function calcular (valor1, valor2) {    

    document.getElementById('opSoma').innerHTML =(document.getElementById("v1").value) +'+' +(document.getElementById("v2").value)
    document.getElementById('resSoma').innerHTML = parseInt(document.getElementById("v1").value) + parseInt(document.getElementById("v2").value)
    
    document.getElementById('opMult').innerHTML = (document.getElementById("v1").value) +'*' +(document.getElementById("v2").value)
    document.getElementById('resMult').innerHTML = parseInt(document.getElementById("v1").value) * parseInt(document.getElementById("v2").value)
    
    document.getElementById('opDiv').innerHTML = (document.getElementById("v1").value) +'/' +(document.getElementById("v2").value)
    document.getElementById('resDiv').innerHTML = parseInt(document.getElementById("v1").value) / parseInt(document.getElementById("v2").value)
    
    document.getElementById('opRes').innerHTML = (document.getElementById("v1").value) +'%' +(document.getElementById("v2").value)
    document.getElementById('resResto').innerHTML = parseInt(document.getElementById("v1").value) % parseInt(document.getElementById("v2").value)
}



