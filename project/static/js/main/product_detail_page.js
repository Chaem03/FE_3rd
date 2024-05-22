/* product detail page - JS */
document.addEventListener('DOMContentLoaded', (event) => {
    const quantityElement = document.querySelector('.quantity');
    const decrease = document.querySelector('.decrease');
    const increase = document.querySelector('.increase');
    const totalPriceElement = document.querySelector('.totalPrice');
    const productPrice =document.querySelector('.discount_price');
    


    function updateTotalPrice() {
        let currentQuantity = quantityElement.innerText;
        console.log(currentQuantity);
        let newTotalPrice = currentQuantity *parseFloat(productPrice.innerHTML.replace(/[^0-9.-]+/g,"")); 
        console.log(productPrice);

        console.log(newTotalPrice.toLocaleString());
        
        totalPriceElement.innerText = newTotalPrice+ '원';
    }
    
    decrease.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 1) { // 수량이 1 이하로 내려가지 않도록 함
            quantityElement.innerText = currentQuantity - 1;
          updateTotalPrice();
        }
    });

    increase.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = currentQuantity + 1;
        updateTotalPrice();
    });


        
});