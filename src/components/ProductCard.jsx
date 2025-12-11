import { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isInfoHovered, setIsInfoHovered] = useState(false);

  const cardClasses = `
    bg-white text-gray-900 rounded-lg shadow-lg overflow-visible transition duration-300 relative 
    ${isInfoHovered 
      ? 'shadow-2xl transform scale-[1.02]'
      : 'hover:shadow-2xl transform hover:scale-[1.02]'
    }
  `;

  const detailedInfo = (
    <div className="p-4 h-full flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2 text-indigo-700">Detalles del Producto</h3>
      <p className="text-sm text-gray-600 mb-4 overflow-y-auto max-h-48">
        {product.details}
      </p>
      <ul className="text-sm space-y-1">
        <li><span className="font-semibold">ID:</span> {product.id}</li>
        <li><span className="font-semibold">Precio:</span> ${product.price.toFixed(2)}</li>
        <li><span className="font-semibold">Stock:</span> {product.stock}</li>
      </ul>
      <button
        onClick={() => setIsInfoHovered(false)}
        className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition duration-200"
      >
        Volver
      </button>
    </div>
  );

  const normalContent = (
    <>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-indigo-600 font-semibold mb-4">${product.price.toFixed(2)}</p>

        {/* 🔥 BOTÓN CON DESHABILITADO AUTOMÁTICO SEGÚN STOCK */}
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${
            product.stock === 0
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {product.stock === 0 ? "Sin stock" : "Añadir al Carrito"}
        </button>
      </div>
    </>
  );

  return (
    <div className={cardClasses}>
      {/* Icono info */}
      <div 
        className="absolute top-1 right-1 text-xl cursor-pointer z-20 p-1 rounded-full 
                   bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-150"
        onMouseEnter={() => setIsInfoHovered(true)}
        onMouseLeave={() => setIsInfoHovered(false)}
      >
        ℹ️
      </div>

      {isInfoHovered ? detailedInfo : normalContent}
    </div>
  );
};

export default ProductCard;
