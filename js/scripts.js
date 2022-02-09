/*!
* ZOUZOU FASHION - Shop Homepage v5.0.3 (https://zouzou-fashion.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/zouzou-fashion/zouzou-fashion-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// var section1 = document.getElementById("section-1")
var totalPrices = document.querySelector(".total-Price");
var plus =Array.from(document.querySelectorAll(".bi-plus-circle-fill"))
var minus =Array.from(document.querySelectorAll(".bi-dash-circle-fill"))
var quantities =Array.from(document.querySelectorAll(".quantities"))
var unitPrices = document.querySelectorAll(".unites-price");
var trashs =document.querySelectorAll(".btn-trash");
var hearts = document.querySelectorAll(".btn-heart");



for(let i = 0; i < plus.length;i++){
    plus[i].addEventListener("click",function(){   
       quantities[i].innerText = Number(quantities[i].innerText) + 1
       total()
    });
  minus[i].addEventListener("click",function(){
      if (quantities[i].innerText>0)
    quantities[i].innerText = Number(quantities[i].innerText) - 1
    total()
  })

}
function total(){
  var totalPrices = document.querySelector(".total-Price");
  var quantities =Array.from(document.querySelectorAll(".quantities"));
var unitPrices = document.querySelectorAll(".unites-price");
let sum=0;
for(let i=0; i<unitPrices.length;i++){
   sum=Number(quantities[i].innerText) * Number(unitPrices[i].innerText)+sum;
}
totalPrices.innerText=sum;
}
for( let i=0 ;i< trashs.length;i++){
  trashs[i].addEventListener("click",function(){
    trashs[i].parentElement.parentElement.parentElement.remove();
    total();
  })
}
for(let i=0;i<hearts.length; i++){
  hearts[i].addEventListener("click",function(){
if(hearts[i].style.color!="red"){
  hearts[i].style.color ="red"
}
else{
  hearts[i].style.color ="#212529"
}
  })
}