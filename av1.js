
const frutas = [ "Morango" , "Banana" , "Maça" , "Abacaxi" , "Melão" , "Mamão " , "Kiwi" , "Tomate" , "Uva" , "Abacate" ] 
const valores = [ 4.99 , 1.99 , 5.80 , 5.00 , 3.70 , 4.80 , 7.99, 3.99, 2.89, 3.29 ] 

function mostrarEstoque (){ 
    let contador = 0 
    while(contador < frutas.length){ 
        console.log(frutas[contador] + " - R$ " + valores[contador]) 
        contador = contador + 1 
    } 
    console.log ( "_________________________" ) 
} 

function addfruta(fruta, valor){ 
    frutas.push(fruta) 
    valores.push(valor) 
} 

function remfruta (indice){ 
    frutas.splice(indice, 1 ) 
    valores.splice(indice, 1) 
} 

mostrarEstoque () 

addfruta( "Laranja" , 2.79 ) 
mostrarEstoque () 


remfruta (7) 

mostrarEstoque()
