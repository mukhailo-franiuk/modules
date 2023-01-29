const getSelector = selector => document.querySelector(selector);


let priceBeer = 25;
let priceWine = 176;
let pricePepsi = 51;

let moneyAllBeer = 0;
let moneyAllWine = 0;
let moneyAllPepsi = 0;
let moneyAll = 0;

function beerAll() {
    let countBeer = Number(getSelector('.b-b').textContent);
        if (countBeer <= 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countWine} шт пива!`;
        }
        if (countBeer - Number(getSelector('#inp-amount').value) < 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.modal-window').classList.remove('close');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countBeer} шт пива!`;
        }
        else{
            if (getSelector('#check-01').checked) {
                getSelector('#all-shop').innerHTML += `<p>
                ${getSelector('#check-01').value} - ${Number(getSelector('#inp-amount').value)}шт
                </p>`;
                countBeer = countBeer - Number(getSelector('#inp-amount').value);
                getSelector('.b-b').textContent = countBeer;
                moneyAllBeer = Number(getSelector('#inp-amount').value) * priceBeer;
            }
        }
  
}


function wineAll() {
    let countWine = Number(getSelector('.b-w').textContent);
   
        if (countWine <= 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countWine} шт вина!`;
        }
        if (countWine - Number(getSelector('#inp-amount').value) < 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.modal-window').classList.remove('close');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countWine} шт вина!`;
        }
        else {
            if (getSelector('#check-02').checked) {
                getSelector('#all-shop').innerHTML += `<p>${getSelector('#check-02').value} - ${Number(getSelector('#inp-amount').value)}шт</p>`;
                countWine = countWine - Number(getSelector('#inp-amount').value);
                getSelector('.b-w').textContent = countWine;
                moneyAllWine = Number(getSelector('#inp-amount').value) * priceWine;
                 
            }
        }
  

}

function pepsiAll() {
    let countPepsi = Number(getSelector('.b-p').textContent);
 
        if (countPepsi <= 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countWine} шт пепсі!`;
        }
        if (countPepsi - Number(getSelector('#inp-amount').value) < 0) {
            getSelector('.modal-window').classList.add('open');
            getSelector('.modal-window').classList.remove('close');
            getSelector('.text-modal').textContent = `У нас на складі залишилося ${countPepsi} шт пепсі!`;
        }
        else {
            if (getSelector('#check-03').checked) {
                getSelector('#all-shop').innerHTML += `<p>${getSelector('#check-03').value} - ${Number(getSelector('#inp-amount').value)}шт</p>`;
                countPepsi = countPepsi - Number(getSelector('#inp-amount').value);
                getSelector('.b-p').textContent = countPepsi;
                moneyAllPepsi = Number(getSelector('#inp-amount').value) * pricePepsi;
                
            }
      
    }

}


function showRes(){
      moneyAll =  moneyAllBeer + moneyAllWine + moneyAllPepsi;
     getSelector('.b-m').innerHTML = `${Number(getSelector('.b-m').textContent) +  moneyAll}`
     getSelector('.info-shop').innerHTML +=  `<p>Потрачено всього - ${moneyAll} гривень</p>`;
     moneyAllBeer = 0;
      moneyAllWine = 0;
      moneyAllPepsi = 0;
     console.log(moneyAll)
    

}

export { beerAll, wineAll, pepsiAll,showRes} 