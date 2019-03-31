// http://www.calpe.es/ver/260/restaurantes.html
var empresas_elem = [...document.querySelectorAll('.empresa-cuerpo')];
var lista = empresas_elem.map(function(empresa) {
    var obj = {
        nombre : empresa.querySelector('.empresa__titulo') === null ? "" :  empresa.querySelector('.empresa__titulo').textContent,
        direccion : empresa.querySelector('.empresa__dir') === null ? "" : empresa.querySelector('.empresa__dir').textContent+', Calp, Alicante,Comunidad Valenciana, España',
        telefono : empresa.querySelector('.empresa__tlf')  === null ? "" : empresa.querySelector('.empresa__tlf').textContent,
        PaginaWeb : empresa.querySelector('.empresa__web')  === null ? "" : empresa.querySelector('.empresa__web').textContent,
        Tipo : "Restaurante"
    };

    return obj;
});

// console.table(lista);

var elementos = '';
for(var row of lista){
  for(var prop in row){
    var cellVal = row[prop];
    elementos += '"'+ cellVal + '"; '
  }
  elementos += '\n';
}
// console.log(elementos);

var arrayindice=['nombre','direccion','telefono','Pagina Web','Tipo'];
var indice = '';
for(var row of arrayindice){
    var cellVal = row;
    indice += '"' + cellVal + '"; '
}
// console.log(indice);
var csv = indice+'\n'+elementos;
console.log(csv);
60/restaurantes.html
