import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Camiseta Festival', price: 25.99, image: 'https://picsum.photos/id/10/400/400', details: 'Camiseta oficial del festival con algodón premium.' },
    { id: 2, name: 'Gorra Oficial', price: 19.99, image: 'https://picsum.photos/id/11/400/400', details: 'Gorra ajustable con logo bordado del festival.' },
    { id: 3, name: 'Sudadera Premium', price: 49.99, image: 'https://picsum.photos/id/12/400/400', details: 'Sudadera cómoda y abrigada, edición limitada.' },
    { id: 4, name: 'Pulsera VIP', price: 9.99, image: 'https://picsum.photos/id/13/400/400', details: 'Pulsera exclusiva para los asistentes VIP.' },
    { id: 5, name: 'Botella Reutilizable', price: 14.99, image: 'https://picsum.photos/id/14/400/400', details: 'Botella metálica reutilizable con grabado oficial.' },
    { id: 6, name: 'Poster Edición Limitada', price: 12.99, image: 'https://picsum.photos/id/15/400/400', details: 'Póster de colección con arte exclusivo del festival.' }
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) removeFromCart(id);
    else setCart(cart.map((item) => item.id === id ? { ...item, quantity: qty } : item));
  };

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-purple-900 text-white pt-32 md:pt-20">
      <div className="max-w-7xl mx-auto lg:mr-16">
        <h1 className="text-5xl font-black text-center mb-4">Tienda del Festival</h1>
        <p className="text-center text-indigo-300 mb-12 text-lg">Compra tu merchandise oficial</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Carrito</h2>
                <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{cart.length}</span>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Tu carrito está vacío</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-bold text-sm">✕</button>
                        </div>
                        <p className="text-indigo-600 font-semibold text-sm mb-2">${item.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded text-sm">−</button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 text-center border border-gray-300 rounded py-1 text-sm"
                            min="1"
                          />
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded text-sm">+</button>
                        </div>
                        <p className="text-right font-semibold text-sm mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-lg">Total:</span>
                      <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-200">
                      Proceder al Pago
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
