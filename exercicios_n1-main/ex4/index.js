function converter() {
    var data = new Date (document.getElementById('datainput'))
    var dia_informado = data.substring(0,2)
    var mes_informado = data.substring(3,5)
    var ano_informado = data.substring(6,10)

    

    
    switch(mes_informado) {

        case mes_informado === 01:
        document.getElementById('resposta').write(dia_informado + 'de Janeiro' + 'de' + ano_informado)
        break;

        case mes_informado == 02:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Fevereiro' + 'de' + ano_informado;
        break;

        case mes_informado == 03:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Março' + 'de' + ano_informado;
        break;

        case mes_informado == 04:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Abril' + 'de' + ano_informado;
        break;

        case mes_informado == 05:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Maio' + 'de' + ano_informado;
        break;

        case mes_informado == 06:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Junho' + 'de' + ano_informado;
        break;

        case mes_informado == 07:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Julho' + 'de' + ano_informado;
        break;

        case mes_informado == 08:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Agosto' + 'de' + ano_informado;
        break;

        case mes_informado == 09:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Setembro' + 'de' + ano_informado;
        break;

        case mes_informado == 10:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Outubro' + 'de' + ano_informado;
        break;

        case mes_informado == 11:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Novembro' + 'de' + ano_informado;
        break;

        case mes_informado == 12:
        document.getElementById('resposta').innerHTML = dia_informado + 'de Dezembro' + 'de' + ano_informado;
        break;

        default :
        document.write('');

    }

}