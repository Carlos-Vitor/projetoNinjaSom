let productsNS = data; 

let produtos = document.querySelectorAll('.produto');
let destaques = document.querySelectorAll('.destaque');
let cordas = document.querySelector('#cordas');
let percussao = document.querySelector('#percussao');
let sopro = document.querySelector('#sopro');
let teclas = document.querySelector('#teclas');

console.log(productsNS[0].items[0].images[0].imageUrl);

//i = 0;

//console.log(productsNS[0].productId);

function preencherCordas(){
for(let produto of produtos){
        for(let product of productsNS){
            if(product.categoryId == "11"){
                produto.innerHTML = '<img src = "'+ product.items[0].images[0].imageUrl +'">'+
                                                    '<p>' + product.productName + '</p>' +
                                                    '<p>' + product.productTitle + '</p>' +
                                                    '<p>R$1.499,90</p>';
            } 
        }
    }
}

function preencherTeclas(){
    for(let produto of produtos){
            for(let product of productsNS){
                if(product.categoryId == "14"){
                    produto.innerHTML = '<img src = "'+ product.items[0].images[0].imageUrl +'">'+
                                                        '<p>' + product.productName + '</p>' +
                                                        '<p>' + product.productTitle + '</p>' +
                                                        '<p>R$1.499,90</p>';
                } 
            }
        }
    }



cordas.onclick = preencherCordas;
teclas.onclick = preencherTeclas;
window.onload = preencherCordas;

function preencherProdutos(){
    for(let destaque of destaques){
        for(let product of productsNS){
                destaque.innerHTML = '<img src = "'+ product.items[0].images[0].imageUrl +'">'+
                                                    '<p>' + product.productName + '</p>' +
                                                    '<p>' + product.productTitle + '</p>' +
                                                    '<p>R$1.499,90</p>'; 
        }
    }
}

window.onscroll = preencherProdutos;