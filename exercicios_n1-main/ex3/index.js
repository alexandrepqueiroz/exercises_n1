function calcula() {
    var salario = parseFloat(document.getElementById('salarioatual').value);
    var novosalario = 0;

    if (salario <= 280 ) {
        novosalario = salario * 1.2;
    }

    else if (salario > 280 && salario<=700){
        novosalario = salario * 1.15;
    }

    else if(salario > 700 && salario <= 1500 ){
        novosalario = salario * 1.10;
    }

    else {
        novosalario = salario * 1.05;
    }

    document.getElementById('semReajuste').innerHTML = "R$"+ parseFloat(document.getElementById('salarioatual').value);
    document.getElementById('percentual').innerHTML = parseFloat(((novosalario / salario)-1)*100).toFixed(1) + "%"
    document.getElementById('aumento').innerHTML = "R$" + parseFloat(novosalario - salario).toFixed(2)
    document.getElementById('comReajuste').innerHTML = "R$" + parseFloat(novosalario).toFixed(2)
}



