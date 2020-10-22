function obtemMedia () {
   var n1, n2, n3, n4, n5, media, valor = 0;
   n1 = parseFloat(document.getElementById('1bi').value)
   n2 = parseFloat(document.getElementById('2bi').value)
   n3 = parseFloat(document.getElementById('3bi').value)
   n4 = parseFloat(document.getElementById('4bi').value)
   n5 = parseFloat(document.getElementById('nota-rec').value)

   var arraydenotas = [n1, n2, n3, n4, n5]

   for(i=0; i<arraydenotas.length; i++) {
       if(arraydenotas[i] != 0){
        valor++;
       }
   }

   media = (n1 + n2 + n3 + n4 + n5)/valor;

  document.getElementById("result").innerHTML = parseFloat(media);
}