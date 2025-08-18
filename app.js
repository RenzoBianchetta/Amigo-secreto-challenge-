// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres=[];

function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;
if(nombre==0){
    alert("Ingrese nombre");
} else{
    nombres.push(nombre);
    console.log(nombres);
    
}
    document.getElementById('amigo').value=' ';
}




    function mostrarAmigos() {
      // 1. Obtener el elemento de la lista
      const lista = document.getElementById("listaAmigos");
      
      // 2. Limpiar la lista existente
      lista.innerHTML = "";
      
      // 3. Iterar sobre el arreglo
      for (let i = 0; i < nombres.length; i++) {
        // 4. Crear <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = nombres[i]; // asignar el nombre
        lista.appendChild(li); // agregar a la lista
      }
    }

function sortearAmigo(){
let sorteado;
if(nombres==0){
    alert("Esta vacia");
} else{
    let indice=Math.floor(Math.random()*nombres.length);
     sorteado=nombres[indice];
     let nom=document.getElementById('resultado');
     nom.innerHTML=sorteado;


}
}