async function loadProducts() {
    const res = await fetch('/products');
    const products = await res.json();
    const productsDiv = document.getElementById('products');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageUrl}" alt="${product.name}" style="width:100px;">
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

async function addToCart(productId) {
    const res = await fetch('/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, quantity: 1 })
    });

    if (res.ok) {
        loadCart();
    }
}

async function loadCart() {
    const res = await fetch('/cart');
    const cartItems = await res.json();
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <h4>${item.productId.name}</h4>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

loadProducts();
loadCart();
