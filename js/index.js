const orderLogo = document.querySelector('#order-logo');
const list = document.querySelector('.modal-body')
orderLogo.addEventListener('click', orderLogoFunction);
const nothingHere = document.querySelector('.nothing-here-yet');
let priceSumVal = 0;
const priceSum = document.querySelector('.sum-price')

let checkingLogo = 0;
let value = 0;
let valueArt = 0;

function orderLogoFunction (){
    nothingHere.innerHTML = '';
    if (checkingLogo == 0){
        value += 1;
        list.insertAdjacentHTML('afterbegin', '<div class="math-box"><p>Logotype creating</p><div class="tovar"> <button class="plus">+</button><p class="text2">1</p><button class="minus">-</button></div><div class="price"><p class="price-text"><b>Price:</b></p><p class="price-num2">3.99</p><p class="dollar">$</p></div><button class="deleteLogo">X</button></div>')
        
        const text = document.querySelector('.text2');
        priceSumVal = ((value * 3.99) + (valueArt * 4.99))
        text.innerHTML = value;
        priceSum.innerHTML = priceSumVal;

        

        const plus = document.querySelector('.plus');
        plus.addEventListener('click', plusOne);

        function plusOne(){
            value++;
            text.innerHTML = (value);
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            priceSum.innerHTML = priceSumVal;
            
        }

        const minus = document.querySelector('.minus');
        minus.addEventListener('click', minusOne);
        
        function minusOne(){
            if (value >= 2){
            value--
            text.innerHTML = (value);
            // console.log(text.innerHTML);
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            priceSum.innerHTML = priceSumVal;
            }
        }
        checkingLogo = 1;
        const mathBox = document.querySelector('.math-box');
        const del = document.querySelector('.deleteLogo')

        del.addEventListener('click', deleteLogoFunction)

        function deleteLogoFunction(){
            value = 0;
            mathBox.remove()
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            checkingLogo = 0;
            
            priceSum.innerHTML = priceSumVal;
        }

        // 
        const priceNum = document.querySelector('.price-num')
        
        priceSumVal = ((value * 3.99) + (valueArt * 4.99))
        priceSum.innerHTML = priceSumVal;
        

    }
    else {
        value++
        const text = document.querySelector('.text2');
        text.innerHTML = value;
        priceSumVal = ((value * 3.99) + (valueArt * 4.99))
        priceSum.innerHTML = priceSumVal;
    }
    
}






// order art
const orderArt = document.querySelector('#order-art');
orderArt.addEventListener('click', orderArtFunction);

let checkingArt = 0;


function orderArtFunction (){
    valueArt += 1;
    nothingHere.innerHTML = '';
    if (checkingArt == 0){
        list.insertAdjacentHTML('afterbegin', '<div class="math-box2"><p>Creating Art</p><div class="tovar"> <button class="plusArt">+</button><p class="textArt">1</p><button class="minusArt">-</button></div><div class="price"><p class="price-text"><b>Price:</b></p><p class="price-num">4.99</p><p class="dollar">$</p></div><button class="deleteLogo">X</button></div>')
        
        const textArtValue = document.querySelector('.textArt');

        priceSumVal = ((value * 3.99) + (valueArt * 4.99))
        priceSum.innerHTML = priceSumVal;


        textArtValue.innerHTML = valueArt;

        const plusArt = document.querySelector('.plusArt');
        plusArt.addEventListener('click', plusOneArt);

        function plusOneArt(){
            valueArt++;
            textArtValue.innerHTML = (valueArt);
            
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            priceSum.innerHTML = priceSumVal;
            
        }

        const minusArt = document.querySelector('.minusArt');
        minusArt.addEventListener('click', minusOneArt);
        
        function minusOneArt(){
            if (valueArt >= 2){
            valueArt--
            textArtValue.innerHTML = (valueArt);
            
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            priceSum.innerHTML = priceSumVal;

            
            }
        }
        checkingArt = 1;
        const mathBox2 = document.querySelector('.math-box2');
        const delArt = document.querySelector('.deleteLogo')

        delArt.addEventListener('click', deleteArtFunction)
// 
        function deleteArtFunction(){
            const mathBox2 = document.querySelector('.math-box2');
            mathBox2.remove()
            valueArt = 0;
            checkingArt = 0;
            priceSumVal = ((value * 3.99) + (valueArt * 4.99))
            priceSum.innerHTML = priceSumVal;


        }

        const priceNum2 = document.querySelector('.price-num2')
        
        

    }
    else {
        valueArt++
        const textArtValue = document.querySelector('.textArt');
        textArtValue.innerHTML = valueArt;
        priceSumVal = ((value * 3.99) + (valueArt * 4.99))
        priceSum.innerHTML = priceSumVal;
    }
    
}






