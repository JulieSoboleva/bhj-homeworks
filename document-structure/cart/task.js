const arrayDec = document.querySelectorAll('.product__quantity-control_dec');
const arrayInc = document.querySelectorAll('.product__quantity-control_inc');
const arrayBtn = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');

arrayDec.forEach(dec => {
    dec.addEventListener('click', () => {
        let elemQuantity = dec.parentElement.querySelector('.product__quantity-value');
        let quantity = parseInt(elemQuantity.textContent);
        if (quantity === 1) {
            return;
        }
        elemQuantity.textContent = --quantity;
    });
});

arrayInc.forEach(inc => {
    inc.addEventListener('click', () => {
        let elemQuantity = inc.parentElement.querySelector('.product__quantity-value');
        let quantity = parseInt(elemQuantity.textContent);
        elemQuantity.textContent = ++quantity;
    });
});

arrayBtn.forEach(btn => {
    const product = btn.closest('.product');
    const id = product.getAttribute('data-id');
    const image = product.querySelector('.product__image').getAttribute('src');
    btn.addEventListener('click', () => {
        const products = Array.from(document.querySelectorAll('.cart__product'));
        const productInCard = products.find(prod => prod.getAttribute('data-id') === id);
        if (productInCard) {
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            let curCount = productInCard.querySelector('.cart__product-count');
            curCount.textContent = parseInt(curCount.textContent) + quantity;
        } else {
            const prodClone = product.cloneNode(false);
            prodClone.classList.replace('product', 'cart__product');
            cart.appendChild(prodClone);
            prodClone.insertAdjacentHTML('beforeEnd', `
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">
                    ${parseInt(product.querySelector('.product__quantity-value').textContent)}
                </div>
            `);
        }
    });
});