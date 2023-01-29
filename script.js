// Task 01
function sum(){
    let start = 0;
    return function(count){
       start = start + count;
       console.log(start)
    }
}
let summ = sum()
summ(3);
summ(5);
summ(228);

// Task 02
import {beerAll,wineAll,pepsiAll,showRes} from './module.js';
document.querySelector('#add').addEventListener('click',function(){
    if(document.querySelector('#check-01').checked){
    beerAll();
    document.querySelector('.sell').disabled = false;
     }
     if(document.querySelector('#check-02').checked){
        wineAll();
        document.querySelector('.sell').disabled = false;
         }
         if(document.querySelector('#check-03').checked){
            pepsiAll();
            document.querySelector('.sell').disabled = false;
             }
   
})




document.querySelector('.sell').addEventListener('click',function(){
    document.querySelector('.info-shop').innerHTML +=  `<p>${document.querySelector('#all-shop').innerHTML}</p>`;
showRes();
    document.querySelector('#inp-amount').value = '';
    document.querySelector('#all-shop').innerHTML = '';
    document.querySelector('.sell').disabled = true;
})
document.querySelector('.close-modal').addEventListener('click',function(){
    document.querySelector('.modal-window').classList.add('close');
    document.querySelector('.modal-window').classList.remove('open');
  
})