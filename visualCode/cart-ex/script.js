document.addEventListener('DOMContentLoaded', () => {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const productsList = document.getElementById('products');
  const clearCartButton = document.getElementById('clear-cart');

  let cart = [];

  // Función para actualizar la visualización del carrito
  const updateCart = () => {
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price} (Cantidad: ${item.quantity})`;
      cartItemsElement.appendChild(li);
    });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `Total: $${total}`;
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const productId = product.dataset.id;
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
  };

  // Evento clic para agregar productos al carrito
  productsList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      addToCart(event.target);
    }
  });

  // Evento clic para vaciar el carrito
  clearCartButton.addEventListener('click', () => {
    cart = [];
    updateCart();
  });

  // Actualizar la visualización inicial del carrito
  updateCart();
});
