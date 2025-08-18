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
      const lista = document.getElementById("listaAmigos");
      
      lista.innerHTML = "";
      for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i]; 
        lista.appendChild(li); 
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
