var maiorAltura = 0
var sexo = ''
var qtdeHomens = 0  
var qtdeMulheres = 0
var alturas = [document.getElementById('alt1'),
               document.getElementById('alt2'), 
               document.getElementById('alt3'),
               document.getElementById('alt4'),
               document.getElementById('alt5')              
]

var sexos = [document.getElementById('s1'),
            document.getElementById('s2'), 
            document.getElementById('s3'),
            document.getElementById('s4'),
            document.getElementById('s5')              
]
function calculo() {


    for(i=0; alturas.length && sexos.length; i++) {

    if (parseFloat(alturas[i].value) > maiorAltura) {
        maiorAltura = alturas[i].value
        sexo = sexos[i].value
    }

    if (sexos[i].value === "Masculino") {
        qtdeHomens++
    } 
    else if (sexos[i].value === "Feminino"){
        qtdeMulheres++
    } 

    document.getElementById('totalHomens').innerHTML = qtdeHomens
    document.getElementById('totalMulheres').innerHTML = qtdeMulheres
    document.getElementById('maiorAltura').innerHTML = maiorAltura + " m"
    document.getElementById('sexoMaiorAltura').innerHTML = sexo
}  
           
    
}
    
