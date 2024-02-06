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
    const image = product.querySelector('.product__image').getAttribute('src');
    btn.addEventListener('click', () => {
        const prodInCart = productInCart(product.getAttribute('data-id'));
        if (prodInCart !== null) {
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            prodInCart.textContent = parseInt(prodInCart.textContent) + quantity;
        } else {
            const prodClone = product.cloneNode(false);
            prodClone.classList.replace('product', 'cart__product');
            cart.appendChild(prodClone);
            
            let img = document.createElement('img');
            img.classList.add('cart__product-image');
            img.setAttribute('src', image);
            prodClone.appendChild(img);
            
            let count = document.createElement('div');
            count.classList.add('cart__product-count');
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            count.textContent = quantity;

            prodClone.appendChild(count);
        }
    });
});

function productInCart(id) {
    const prods = document.querySelectorAll('.cart__product');
    for (let i=0; i < prods.length; i++) {
        if (prods[i].getAttribute('data-id') === id) {
            return prods[i].querySelector('.cart__product-count');
        }
    }
    return null;
}